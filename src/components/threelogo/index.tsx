"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function Hex() {
	const ref = useRef<THREE.Mesh>(null!);
	useFrame((_, dt) => {
		ref.current.rotation.y += dt * 0.6;
		ref.current.rotation.x = Math.sin(performance.now() * 0.001) * 0.2;
	});

	return (
		<mesh ref={ref} castShadow receiveShadow>
			<cylinderGeometry args={[0.9, 0.9, 0.3, 6]} />
			<meshStandardMaterial
				metalness={0.4}
				roughness={0.35}
				color={"#c58325"}
			/>
		</mesh>
	);
}

export default function ThreeLogo() {
	return (
		<Canvas
			dpr={[1, 2]}
			camera={{ position: [1.6, 1.2, 1.6], fov: 40 }}
			gl={{ antialias: true, alpha: true }}
		>
			<ambientLight intensity={0.6} />
			<directionalLight position={[2, 3, 2]} intensity={1.1} />
			<Hex />
			<Environment preset="city" />
		</Canvas>
	);
}
