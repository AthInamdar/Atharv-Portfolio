import React, { useEffect, useRef } from 'react';

export default function Workstation() {
    const hostRef = useRef(null);
    useEffect(() => {
        const host = hostRef.current;
        if (!host) return undefined;
        let cancelled = false;
        let cleanup = () => {};
        import('three').then((THREE) => {
        if (cancelled) return;
        const makeBox = (width, height, depth, color, metalness = 0.45, roughness = 0.35) => {
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), new THREE.MeshStandardMaterial({ color, metalness, roughness }));
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            return mesh;
        };
        let renderer;
        try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); }
        catch { host.classList.add('webgl-unavailable'); return; }
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
        camera.position.set(0, 1.1, 8.1);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        host.appendChild(renderer.domElement);

        scene.add(new THREE.AmbientLight('#c8d7ff', 1.5));
        const key = new THREE.PointLight('#67cfff', 105, 14); key.position.set(2.5, 4, 4); key.castShadow = true; scene.add(key);
        const rim = new THREE.PointLight('#875bff', 80, 12); rim.position.set(-3, 1, -2); scene.add(rim);
        const rig = new THREE.Group(); scene.add(rig);
        const monitor = new THREE.Group(); monitor.position.set(-0.1, 0.55, 0); rig.add(monitor);
        monitor.add(makeBox(3.2, 1.95, 0.16, '#172238', 0.72, 0.27));
        const display = new THREE.Mesh(new THREE.PlaneGeometry(3.02, 1.77), new THREE.MeshStandardMaterial({ color: '#0b1425', emissive: '#102a58', emissiveIntensity: 1.05, roughness: 0.42 })); display.position.z = 0.085; monitor.add(display);
        const lineColors = ['#68d7ff', '#a58bff', '#54e1b5', '#90a0bf', '#68d7ff', '#ad91ff'];
        for (let i = 0; i < 6; i++) { const line = new THREE.Mesh(new THREE.BoxGeometry(0.58 + (i % 3) * 0.22, 0.035, 0.008), new THREE.MeshBasicMaterial({ color: lineColors[i] })); line.position.set(-0.9 + (i % 2) * 0.18, 0.57 - i * 0.24, 0.094); monitor.add(line); }
        const base = makeBox(0.2, 0.65, 0.2, '#3b4a64', 0.7, 0.28); base.position.set(0, -1.28, -0.03); rig.add(base);
        const foot = makeBox(1.05, 0.09, 0.48, '#29364c', 0.7, 0.3); foot.position.set(0, -1.63, 0); rig.add(foot);
        const second = new THREE.Group(); second.position.set(2.22, 0.36, -1.2); second.rotation.y = -0.25; second.scale.setScalar(0.65); rig.add(second);
        second.add(makeBox(2.45, 1.55, 0.14, '#20243e', 0.72, 0.28));
        const secondScreen = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 1.4), new THREE.MeshStandardMaterial({ color: '#111328', emissive: '#4c226f', emissiveIntensity: 0.95 })); secondScreen.position.z = 0.076; second.add(secondScreen);
        const desk = makeBox(5.1, 0.17, 2.7, '#131d30', 0.58, 0.38); desk.position.set(0.1, -1.88, -0.2); rig.add(desk);
        for (let i = 0; i < 28; i++) { const keycap = makeBox(0.18, 0.035, 0.25, i % 7 === 0 ? '#536a91' : '#323f57', 0.45, 0.4); keycap.position.set(-1.55 + (i % 14) * 0.24, -1.76, -0.99 + Math.floor(i / 14) * 0.39); rig.add(keycap); }
        const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.32, 1), new THREE.MeshStandardMaterial({ color: '#647eff', emissive: '#2b27a8', emissiveIntensity: 0.6, wireframe: true })); orb.position.set(-2.3, 0.55, -0.45); rig.add(orb);
        const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.28), new THREE.MeshStandardMaterial({ color: '#48d3de', emissive: '#087d91', emissiveIntensity: 0.6, metalness: 0.55, roughness: 0.25 })); crystal.position.set(2.65, -0.5, 0.2); rig.add(crystal);
        const resize = () => { const bounds = host.getBoundingClientRect(); if (!bounds.width || !bounds.height) return; renderer.setSize(bounds.width, bounds.height, false); camera.aspect = bounds.width / bounds.height; camera.updateProjectionMatrix(); };
        resize();
        const observer = new ResizeObserver(resize); observer.observe(host);
        let pointerX = 0, pointerY = 0, frame = 0, visible = true;
        const pointer = (event) => { const b = host.getBoundingClientRect(); pointerX = ((event.clientX - b.left) / b.width - 0.5) * 2; pointerY = ((event.clientY - b.top) / b.height - 0.5) * 2; };
        host.addEventListener('pointermove', pointer);
        const visibility = () => { visible = !document.hidden; if (visible && !frame) animate(); };
        document.addEventListener('visibilitychange', visibility);
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const clock = new THREE.Clock();
        const animate = () => { if (!visible) { frame = 0; return; } if (!prefersReducedMotion) frame = requestAnimationFrame(animate); const t = prefersReducedMotion ? 0 : clock.getElapsedTime(); rig.rotation.y += ((prefersReducedMotion ? 0 : pointerX * 0.1) - rig.rotation.y) * 0.035; rig.rotation.x += ((prefersReducedMotion ? 0 : -pointerY * 0.045) - rig.rotation.x) * 0.035; rig.position.y = prefersReducedMotion ? 0 : Math.sin(t * 0.75) * 0.08; orb.rotation.y = t * 0.24; crystal.rotation.x = t * 0.3; display.material.emissiveIntensity = 0.95 + Math.sin(t * 1.2) * (prefersReducedMotion ? 0 : 0.1); renderer.render(scene, camera); };
        animate();
        cleanup = () => { cancelAnimationFrame(frame); observer.disconnect(); host.removeEventListener('pointermove', pointer); document.removeEventListener('visibilitychange', visibility); renderer.dispose(); scene.traverse((obj) => { obj.geometry?.dispose(); if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose()); else obj.material?.dispose(); }); renderer.domElement.remove(); };
        }).catch(() => { if (!cancelled) host.classList.add('webgl-unavailable'); });
        return () => { cancelled = true; cleanup(); };
    }, []);
    return <div ref={hostRef} className="workstation-canvas" aria-label="Interactive 3D developer workstation" role="img" />;
}
