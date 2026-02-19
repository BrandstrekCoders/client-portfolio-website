import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer, RenderPass, EffectPass, BloomEffect } from 'postprocessing';

interface HyperspeedProps {
  className?: string;
}

const Hyperspeed = ({ className = '' }: HyperspeedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let animationId: number;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 50, 200);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      90,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, -5);
    camera.lookAt(0, 0, -50);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Composer for bloom effect
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    
    const bloomEffect = new BloomEffect({
      intensity: 3.5,
      luminanceThreshold: 0.1,
      luminanceSmoothing: 0.7,
      radius: 0.85
    });
    
    const effectPass = new EffectPass(camera, bloomEffect);
    effectPass.renderToScreen = true;
    composer.addPass(effectPass);

    // Road
    const roadGeometry = new THREE.PlaneGeometry(10, 400, 20, 100);
    const roadMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a0a0a,
      side: THREE.DoubleSide
    });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.rotation.x = -Math.PI / 2;
    road.position.z = -200;
    scene.add(road);

    // Create tube lights (left side - pink/magenta)
    const leftLights: THREE.Mesh[] = [];
    const leftLightsCount = 40;
    
    for (let i = 0; i < leftLightsCount; i++) {
      const curve = new THREE.LineCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -1)
      );
      
      const tubeGeometry = new THREE.TubeGeometry(curve, 8, 0.35, 12, false);
      const tubeMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.9, 1, 0.7), // Bright Pink/Magenta
        transparent: false
      });
      
      const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
      const lane = Math.floor(Math.random() * 4);
      tube.position.x = -5 + lane * 1.2 + (Math.random() - 0.5) * 0.8;
      tube.position.y = 0.3 + Math.random() * 3;
      tube.position.z = -Math.random() * 400;
      
      const length = 15 + Math.random() * 40;
      tube.scale.z = length;
      
      tube.userData.speed = 80 + Math.random() * 50;
      tube.userData.length = length;
      
      scene.add(tube);
      leftLights.push(tube);
    }

    // Create tube lights (right side - cyan/blue)
    const rightLights: THREE.Mesh[] = [];
    const rightLightsCount = 40;
    
    for (let i = 0; i < rightLightsCount; i++) {
      const curve = new THREE.LineCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -1)
      );
      
      const tubeGeometry = new THREE.TubeGeometry(curve, 8, 0.35, 12, false);
      const tubeMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.5, 1, 0.7), // Bright Cyan/Blue
        transparent: false
      });
      
      const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
      const lane = Math.floor(Math.random() * 4);
      tube.position.x = 5 + lane * 1.2 + (Math.random() - 0.5) * 0.8;
      tube.position.y = 0.3 + Math.random() * 3;
      tube.position.z = -Math.random() * 400;
      
      const length = 15 + Math.random() * 40;
      tube.scale.z = length;
      
      tube.userData.speed = -150 - Math.random() * 70;
      tube.userData.length = length;
      
      scene.add(tube);
      rightLights.push(tube);
    }

    // Side light sticks (green)
    const sticks: THREE.Mesh[] = [];
    const sticksCount = 60;
    
    for (let i = 0; i < sticksCount; i++) {
      const stickGeometry = new THREE.BoxGeometry(0.15, 2, 0.15);
      const stickMaterial = new THREE.MeshBasicMaterial({
        color: 0x10b981
      });
      
      const stick = new THREE.Mesh(stickGeometry, stickMaterial);
      stick.position.x = -9;
      stick.position.y = 1.2;
      stick.position.z = -i * 7;
      
      scene.add(stick);
      sticks.push(stick);
      
      // Right side sticks
      const stickRight = stick.clone();
      stickRight.position.x = 9;
      scene.add(stickRight);
      sticks.push(stickRight);
    }

    // Clock
    const clock = new THREE.Clock();

    // Animation loop
    const animate = () => {
      const deltaTime = clock.getDelta();
      
      // Update left lights (moving away)
      leftLights.forEach(light => {
        light.position.z += light.userData.speed * deltaTime;
        if (light.position.z > 10) {
          light.position.z = -400;
        }
      });
      
      // Update right lights (coming closer)
      rightLights.forEach(light => {
        light.position.z += light.userData.speed * deltaTime;
        if (light.position.z > 10) {
          light.position.z = -400;
        }
      });
      
      // Update sticks
      sticks.forEach(stick => {
        stick.position.z += 100 * deltaTime;
        if (stick.position.z > 10) {
          stick.position.z = -420;
        }
      });
      
      composer.render();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      composer.setSize(container.offsetWidth, container.offsetHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      leftLights.forEach(light => {
        light.geometry.dispose();
        (light.material as THREE.Material).dispose();
      });
      
      rightLights.forEach(light => {
        light.geometry.dispose();
        (light.material as THREE.Material).dispose();
      });
      
      sticks.forEach(stick => {
        stick.geometry.dispose();
        (stick.material as THREE.Material).dispose();
      });
      
      roadGeometry.dispose();
      roadMaterial.dispose();
      composer.dispose();
      renderer.dispose();
      
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
};

export default Hyperspeed;
