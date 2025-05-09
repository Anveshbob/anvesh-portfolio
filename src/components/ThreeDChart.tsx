
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
  percentageDifference?: number;
  showValueOnTop?: boolean;
  no3dAnimation?: boolean;
}

const ThreeDChart: React.FC<ThreeDChartProps> = ({
  data,
  title = "Performance Metrics",
  height = 200,
  chartType = "bar",
  tooltipText,
  percentageDifference,
  showValueOnTop = false,
  no3dAnimation = false,
}) => {
  const chartRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
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
      antialias: true,
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
    const maxValue = Math.max(...data.map((item) => item.value));

    if (chartType === "bar") {
      // Create 3D bar chart
      const barWidth = 2;
      const spacing = 1;
      const startX = -(data.length * (barWidth + spacing)) / 2 + barWidth / 2;

      data.forEach((item, index) => {
        const normalizedHeight = (item.value / maxValue) * 10;

        // Create bar geometry
        const geometry = new THREE.BoxGeometry(
          barWidth,
          normalizedHeight,
          barWidth
        );
        geometry.translate(0, normalizedHeight / 2, 0);

        // Create material
        const material = new THREE.MeshPhongMaterial({
          color: new THREE.Color(item.color),
          transparent: true,
          opacity: 0.9,
          shininess: 100,
        });

        // Create mesh
        const bar = new THREE.Mesh(geometry, material);
        bar.position.x = startX + index * (barWidth + spacing);

        scene.add(bar);
        bars.push(bar);

        // Add value on top of the bar if showValueOnTop is true
        if (showValueOnTop) {
          // Create a canvas for the text label on top of each bar
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.width = 128;
          canvas.height = 64;

          if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.font = "bold 28px Arial";
            context.textAlign = "center";
            context.fillStyle = "#ffffff";
            context.fillText(item.value.toString(), canvas.width / 2, 40);

            // Use the canvas as a texture
            const texture = new THREE.CanvasTexture(canvas);
            texture.minFilter = THREE.LinearFilter; // Better scaling
            texture.generateMipmaps = false;

            const labelMaterial = new THREE.SpriteMaterial({
              map: texture,
              transparent: true,
              depthWrite: false,
            });

            const label = new THREE.Sprite(labelMaterial);

            // Position the label just above the bar
            label.position.set(
              bar.position.x,
              normalizedHeight + 1.0,
              bar.position.z
            );

            // Scale the label to be readable
            label.scale.set(4, 2, 1);

            scene.add(label);
          }
        }
      });
    } else if (chartType === "pie") {
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
          bevelThickness: 0.1,
        };

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        const material = new THREE.MeshPhongMaterial({
          color: new THREE.Color(item.color),
          transparent: true,
          opacity: 0.9,
          shininess: 100,
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
    } else if (chartType === "line") {
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
          shininess: 100,
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
          shininess: 100,
        });

        const bar = new THREE.Mesh(barGeometry, barMaterial);
        bar.position.x = points[i].x;
        bar.position.z = points[i].z;

        scene.add(bar);
        bars.push(bar);
      }
    }

    // Animation - simplified or disabled based on no3dAnimation flag
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Only apply animations if no3dAnimation is false
      if (!no3dAnimation) {
        // Apply any animations here - but since we want static representations, 
        // we're not adding any animation logic even if no3dAnimation is false
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

    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartRef.current && chartRef.current.contains(renderer.domElement)) {
        chartRef.current.removeChild(renderer.domElement);
      }

      // Dispose of resources
      bars.forEach((bar) => {
        if (bar.geometry) bar.geometry.dispose();
        if ((bar.material as THREE.Material))
          (bar.material as THREE.Material).dispose();
        scene.remove(bar);
      });
    };
  }, [data, height, chartType, showValueOnTop, no3dAnimation]);

  return (
    <div className="netflix-card p-4 hover:shadow-[0_5px_25px_rgba(37,99,235,0.4)] transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        {title && (
          <h3 className="text-lg font-semibold">{title}</h3>
        )}
        {percentageDifference !== undefined && (
          <div className="bg-netflix-card px-2 py-1 rounded text-sm font-medium bg-netflix-dark/10">
            <span className="text-netflix-red">{percentageDifference}%</span> difference
          </div>
        )}
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              ref={chartRef}
              style={{ height: `${height}px` }}
              className="cursor-help"
            />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>{tooltipText || "Interactive 3D chart showing comparison data."}</p>
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
