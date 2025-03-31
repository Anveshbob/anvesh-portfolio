
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 30;
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create multiple particle systems with different shapes
    const createParticleSystem = (count: number, size: number, color: number, opacity: number, shape: 'sphere' | 'cube' | 'plane') => {
      const geometry = new THREE.BufferGeometry();
      const posArray = new Float32Array(count * 3);
      
      if (shape === 'sphere') {
        for (let i = 0; i < count; i++) {
          const radius = 25;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          
          posArray[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
          posArray[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          posArray[i * 3 + 2] = radius * Math.cos(phi);
        }
      } else if (shape === 'cube') {
        for (let i = 0; i < count; i++) {
          posArray[i * 3] = (Math.random() - 0.5) * 50;
          posArray[i * 3 + 1] = (Math.random() - 0.5) * 50;
          posArray[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
      } else if (shape === 'plane') {
        for (let i = 0; i < count; i++) {
          posArray[i * 3] = (Math.random() - 0.5) * 50;
          posArray[i * 3 + 1] = (Math.random() - 0.5) * 50;
          posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      
      const material = new THREE.PointsMaterial({
        size,
        color,
        transparent: true,
        opacity,
        sizeAttenuation: true
      });
      
      return new THREE.Points(geometry, material);
    };
    
    // Create geometric shapes
    const createGeometricShapes = () => {
      const shapes = [];
      const geometries = [
        new THREE.TetrahedronGeometry(1.5, 0),
        new THREE.OctahedronGeometry(1.3, 0),
        new THREE.IcosahedronGeometry(1, 0)
      ];
      
      const colors = [0x2563EB, 0x10B981, 0xF59E0B];
      
      for (let i = 0; i < 15; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = new THREE.MeshPhongMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          transparent: true,
          opacity: 0.15,
          wireframe: Math.random() > 0.5
        });
        
        const shape = new THREE.Mesh(geometry, material);
        
        shape.position.x = (Math.random() - 0.5) * 40;
        shape.position.y = (Math.random() - 0.5) * 40;
        shape.position.z = (Math.random() - 0.5) * 30;
        
        shape.rotation.x = Math.random() * Math.PI;
        shape.rotation.y = Math.random() * Math.PI;
        
        shape.userData = {
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.005,
            y: (Math.random() - 0.5) * 0.005,
            z: (Math.random() - 0.5) * 0.005
          },
          floatSpeed: 0.01 + Math.random() * 0.02,
          floatOffset: Math.random() * Math.PI * 2
        };
        
        shapes.push(shape);
        scene.add(shape);
      }
      
      return shapes;
    };
    
    // Add particles and shapes
    const particlesMesh1 = createParticleSystem(600, 0.15, 0x2563EB, 0.5, 'sphere');
    const particlesMesh2 = createParticleSystem(400, 0.1, 0x10B981, 0.3, 'cube');
    const shapes = createGeometricShapes();
    
    scene.add(particlesMesh1);
    scene.add(particlesMesh2);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.001;
      
      particlesMesh1.rotation.x += 0.0003;
      particlesMesh1.rotation.y += 0.0002;
      
      particlesMesh2.rotation.x -= 0.0002;
      particlesMesh2.rotation.z += 0.0003;
      
      // Animate geometric shapes
      shapes.forEach(shape => {
        const speed = shape.userData.rotationSpeed;
        shape.rotation.x += speed.x;
        shape.rotation.y += speed.y;
        shape.rotation.z += speed.z;
        
        // Gentle floating animation
        shape.position.y += Math.sin(time + shape.userData.floatOffset) * 0.01 * shape.userData.floatSpeed;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of resources
      [particlesMesh1, particlesMesh2].forEach(mesh => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) (mesh.material as THREE.Material).dispose();
        scene.remove(mesh);
      });
      
      shapes.forEach(shape => {
        if (shape.geometry) shape.geometry.dispose();
        if (shape.material) (shape.material as THREE.Material).dispose();
        scene.remove(shape);
      });
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 opacity-25 pointer-events-none"
    />
  );
};

export default ThreeBackground;
