
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface ThreeDChartProps {
  data: ChartData[];
  title?: string;
  height?: number;
}

const ThreeDChart: React.FC<ThreeDChartProps> = ({ 
  data, 
  title = "Performance Metrics", 
  height = 200 
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!chartRef.current) return;
    
    // Set up scene
    const scene = new THREE.Scene();
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      50,
      chartRef.current.clientWidth / height,
      0.1,
      1000
    );
    camera.position.set(10, 10, 20);
    camera.lookAt(0, 0, 0);
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(chartRef.current.clientWidth, height);
    chartRef.current.appendChild(renderer.domElement);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);
    
    // Add ground plane with grid
    const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);
    
    // Create bars
    const bars: THREE.Mesh[] = [];
    const maxValue = Math.max(...data.map(item => item.value));
    const barWidth = 2;
    const spacing = 1;
    const startX = -(data.length * (barWidth + spacing)) / 2 + barWidth / 2;
    
    data.forEach((item, index) => {
      const normalizedHeight = (item.value / maxValue) * 10;
      
      // Create bar geometry
      const geometry = new THREE.BoxGeometry(barWidth, normalizedHeight, barWidth);
      
      // Move pivot to bottom
      geometry.translate(0, normalizedHeight / 2, 0);
      
      // Create material
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(item.color),
        transparent: true,
        opacity: 0.9,
        shininess: 100
      });
      
      // Create mesh
      const bar = new THREE.Mesh(geometry, material);
      bar.position.x = startX + index * (barWidth + spacing);
      
      scene.add(bar);
      bars.push(bar);
    });
    
    // Animation
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      
      // Rotate the chart slightly
      bars.forEach((bar, index) => {
        bar.rotation.y += 0.005;
        
        // Add a subtle floating animation
        bar.position.y = Math.sin(Date.now() * 0.001 + index) * 0.1;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!chartRef.current) return;
      
      camera.aspect = chartRef.current.clientWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(chartRef.current.clientWidth, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up on unmount
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
      if (chartRef.current && chartRef.current.contains(renderer.domElement)) {
        chartRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of resources
      bars.forEach(bar => {
        bar.geometry.dispose();
        (bar.material as THREE.Material).dispose();
        scene.remove(bar);
      });
    };
  }, [data, height]);
  
  return (
    <div className="netflix-card p-4">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div ref={chartRef} style={{ height: `${height}px` }}></div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <div 
              className="w-3 h-3 rounded-full mr-1" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDChart;
