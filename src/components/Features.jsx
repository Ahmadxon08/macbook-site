import { Canvas } from "@react-three/fiber";
import StudioLight from "./three/StudioLight";
import { features, featureSequence } from "../constants";
import clsx from "clsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useRef } from "react";
import { Mackbook } from "./models/Macbook";
import { useMediaQuery } from "react-responsive";
import { Html } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useMacBookStore from "../store";
gsap.registerPlugin(ScrollTrigger);

const ModelScroll = () => {
  const groupRef = useRef();

  const { setTexture } = useMacBookStore();

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    featureSequence.forEach((feature) => {
      const videoSrc = document.createElement("video");
      Object.assign(videoSrc, {
        src: feature.videoPath,
        crossOrigin: "Anonymous",
        muted: true,
        preload: "auto",
        playsInline: true,
      });
      videoSrc.load();
    });
  }, []);

  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom end",
        scrub: 1,
        pin: true,
      },
    });

    //////////////////

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    // 3D spinng?

    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    timeline
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box", { opacity: 1, y: 0, delay: 1 })
      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box1", { opacity: 1, y: 0 })
      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box2", { opacity: 1, y: 0 })
      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box3", { opacity: 1, y: 0 })
      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box4", { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-2xl uppercase"> Loading...</h1>
          </Html>
        }
      >
        <Mackbook scale={isMobile ? 0.05 : 0.08} position={(0, -1, 0)} />
      </Suspense>
    </group>
  );
};

const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>

      <Canvas camera={{}} id="f-canvas">
        <StudioLight />
        <ambientLight intensity={0.5} />
        {/* 3d model goes here */}
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div className={clsx("box", `box-${index + 1}`, feature.styles)}>
            <img src={feature.icon} alt={feature.highlight} />
            <p>
              <span className="text-white">{feature.highlight}</span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
