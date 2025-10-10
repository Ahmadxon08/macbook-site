import clsx from "clsx";
import useMacBookStore from "../store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import StudioLight from "./three/StudioLight";
import { useMediaQuery } from "react-responsive";
import ModelSwitcher from "./three/ModelSwicher";

const ProductViewer = () => {
  const { setColor, setScale, color, scale } = useMacBookStore();
  const isMobile = useMediaQuery({
    query: "(max-width:1024px)",
  });
  return (
    <section id="product-viewer">
      <h2>Take a closer look</h2>
      <div className="controls">
        <p className="info">Macbook Pro 16 in Space black/white</p>

        <div className="flex-center gap-4 mt-4">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5db")}
              className={clsx(
                "bg-neutral-300",
                color === "#adb5db" && "active"
              )}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx(
                "bg-neutral-900",
                color === "#2e2c2e" && "active"
              )}
            />
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLight />
        <OrbitControls enableZoom={false} />

        <ModelSwitcher scale={isMobile ? 0.03 : scale} isMobile={isMobile} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
