import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface ChartData {
  label: string;
  value: number;
  color: string;
  details?: string;
}

interface ThreeDChartProps {
  data: ChartData[];
  title?: string;
  height?: number;
  chartType?: 'bar' | 'pie' | 'line';
  tooltipText?: string;
}

const ThreeDChart: React.FC<ThreeDChartProps> = ({ 
  data, 
  title = "Performance Metrics", 
  height = 200,
  chartType = 'bar',
  tooltipText
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
    
    // Create chart based on type
    const bars: THREE.Mesh[] = [];
    const labels: THREE.Mesh[] = [];
    const maxValue = Math.max(...data.map(item => item.value));
    
    if (chartType === 'bar') {
      // Create 3D bar chart
      const barWidth = 2;
      const spacing = 1;
      const startX = -(data.length * (barWidth + spacing)) / 2 + barWidth / 2;
      
      const loader = new THREE.FontLoader();
      loader.load('/path/to/helvetiker_regular.typeface.json', (font) => {
        data.forEach((item, index) => {
          const normalizedHeight = (item.value / maxValue) * 10;
          
          // Create bar geometry
          const geometry = new THREE.BoxGeometry(barWidth, normalizedHeight, barWidth);
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
          
          // Create text label
          const textGeometry = new THREE.TextGeometry(item.value.toString(), {
            font: font,
            size: 0.5,
            height: 0.1,
          });
          
          const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
          const textMesh = new THREE.Mesh(textGeometry, textMaterial);
          
          // Position text above the bar
          textMesh.position.set(
            bar.position.x - 0.5, // Slightly offset to center
            normalizedHeight + 0.5, 
            bar.position.z
          );
          textMesh.rotation.x = -Math.PI / 2; // Rotate to face up
          
          scene.add(textMesh);
          labels.push(textMesh);
        });
        
        // Modify animation to include labels
        let frame = 0;
        const animate = () => {
          frame = requestAnimationFrame(animate);
          
          bars.forEach((bar, index) => {
            bar.rotation.y += 0.003;
            bar.position.y += Math.sin(Date.now() * 0.0008 + index) * 0.01;
            
            // Also rotate and move labels with bars
            if (labels[index]) {
              labels[index].rotation.y = bar.rotation.y;
              labels[index].position.y = bar.position.y + (bar.geometry.parameters.height / 2) + 0.5;
            }
          });
          
          renderer.render(scene, camera);
        };
        
        animate();
      });
    } else if (chartType === 'pie') {
      // Create 3D pie chart
      const radius = 6;
      const depth = 1.5;
      let startAngle = 0;
      const totalValue = data.reduce((sum, item) => sum + item.value, 0);
      
      data.forEach((item) => {
        const angle = (item.value / totalValue) * Math.PI * 2;
        
        // Create pie segment
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.arc(0, 0, radius, startAngle, startAngle + angle, false);
        shape.lineTo(0, 0);
        
        const extrudeSettings = {
          depth: depth,
          bevelEnabled: true,
          bevelSegments: 1,
          bevelSize: 0.2,
          bevelThickness: 0.1
        };
        
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        const material = new THREE.MeshPhongMaterial({
          color: new THREE.Color(item.color),
          transparent: true,
          opacity: 0.9,
          shininess: 100
        });
        
        const segment = new THREE.Mesh(geometry, material);
        segment.position.z = -depth / 2;
        
        scene.add(segment);
        bars.push(segment);
        
        startAngle += angle;
      });
      
      // Adjust camera for pie chart
      camera.position.set(0, 15, 20);
      camera.lookAt(0, 0, 0);
    } else if (chartType === 'line') {
      // Create 3D line chart
      const points = [];
      const lineWidth = 12;
      const spacing = lineWidth / (data.length - 1);
      const startX = -lineWidth / 2;
      
      // Create points for the line
      for (let i = 0; i < data.length; i++) {
        const x = startX + i * spacing;
        const y = (data[i].value / maxValue) * 8;
        points.push(new THREE.Vector3(x, y, 0));
      }
      
      // Create the line
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ 
        color: 0x2563EB,
        linewidth: 2
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
      
      // Create spheres at data points
      for (let i = 0; i < data.length; i++) {
        const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16);
        const sphereMaterial = new THREE.MeshPhongMaterial({
          color: new THREE.Color(data[i].color),
          transparent: true,
          opacity: 0.9,
          shininess: 100
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.copy(points[i]);
        
        scene.add(sphere);
        bars.push(sphere);
      }
      
      // Add bars below points for visual reference
      for (let i = 0; i < data.length; i++) {
        const barGeometry = new THREE.BoxGeometry(0.5, points[i].y, 0.5);
        barGeometry.translate(0, points[i].y / 2, 0);
        
        const barMaterial = new THREE.MeshPhongMaterial({
          color: new THREE.Color(data[i].color),
          transparent: true,
          opacity: 0.3,
          shininess: 100
        });
        
        const bar = new THREE.Mesh(barGeometry, barMaterial);
        bar.position.x = points[i].x;
        bar.position.z = points[i].z;
        
        scene.add(bar);
        bars.push(bar);
      }
    }
    
    // Animation
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      
      if (chartType === 'bar' || chartType === 'line') {
        // Rotate bars slightly
        bars.forEach((bar, index) => {
          bar.rotation.y += 0.003;
          
          // Add a subtle floating animation
          bar.position.y += Math.sin(Date.now() * 0.0008 + index) * 0.01;
        });
      } else if (chartType === 'pie') {
        // Rotate the entire pie chart
        bars.forEach(segment => {
          segment.rotation.y += 0.005;
        });
      }
      
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
        if (bar.geometry) bar.geometry.dispose();
        if ((bar.material as THREE.Material)) (bar.material as THREE.Material).dispose();
        scene.remove(bar);
      });
    };
  }, [data, height, chartType]);
  
  return (
    <div className="netflix-card p-4 hover:shadow-[0_5px_25px_rgba(37,99,235,0.4)] transition-all duration-300">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div ref={chartRef} style={{ height: `${height}px` }} className="cursor-help" />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>{tooltipText || "Interactive 3D chart. Click and drag to rotate."}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {data.map((item, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-center cursor-help">
                  <div 
                    className="w-3 h-3 rounded-full mr-1" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm">{item.label}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.details || `${item.label}: ${item.value}`}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default ThreeDChart;
