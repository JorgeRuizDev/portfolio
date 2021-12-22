import { createRef, useEffect } from "react";
// @ts-ignore
import WebglFluid from "webgl-fluid";
interface IFluidBackgroundProps {}

const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

function FluidBackground(props: IFluidBackgroundProps) {
  const ref = createRef<HTMLCanvasElement>();

  useEffect(() => {

    if (!ref.current){
      return;
    }

    WebglFluid(ref.current, {
      IMMEDIATE: false,
      TRIGGER: "hover",
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 5,
      VELOCITY_DISSIPATION: 5,
      PRESSURE: 0.5,
      PRESSURE_ITERATIONS: 20,
      CURL: 10,
      SPLAT_RADIUS: 0.1,
      SPLAT_FORCE: 6000,
      SHADING: true,
      COLORFUL: true,
      COLOR_UPDATE_SPEED: 10,
      PAUSED: false,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      TRANSPARENT: false,
      BLOOM: false,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 0.8,
      BLOOM_THRESHOLD: 0.6,
      BLOOM_SOFT_KNEE: 0.7,
      SUNRAYS: false,
      SUNRAYS_RESOLUTION: 196,
      SUNRAYS_WEIGHT: 1.0,
    });
  }, [ref]);

  return (
    <div className="">
      {isTouchDevice() ? (
        <div className="w-screen h-screen fixed bottom-0 left-0 bg-black"></div>
      ) : (
        <canvas ref={ref} className="w-screen h-screen fixed bottom-0 left-0" />
      )}
    </div>
  );
}

export default FluidBackground;
