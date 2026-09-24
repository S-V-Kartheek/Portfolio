import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen overflow-hidden c-space">
      <HeroText />
      <div className="relative w-full md:w-1/2 h-[400px] md:h-[600px] flex items-center justify-center">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : 0.35}
                position={isMobile ? [0, -1.5, 0] : [0, 0, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </div>
      <ParallaxBackground />
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
