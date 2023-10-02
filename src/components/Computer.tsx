import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Html,
  useProgress,
} from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}%</Html>;
};

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("./desktop/scene.gltf");

  return (
    <>
      <hemisphereLight intensity={0.3} />
      <pointLight intensity={5} />
      <pointLight intensity={10} position={[0.5, -1.8, 4.5]} />
      <ambientLight intensity={1} />
      <mesh>
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    mediaQuery.addEventListener("change", (e) => setIsMobile(e.matches));
    setIsMobile(mediaQuery.matches);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
