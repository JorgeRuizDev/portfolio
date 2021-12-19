import type { NextPage } from "next";
import { useEffect } from "react";

import dynamic from "next/dynamic";
import FluidBackground from "components/core/FluidBackground";

const FluidBackgroundContainer = dynamic(
  () => import("components/core/FluidBackground"),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <div className="w-screen h-screen ">
        <div className="w-full h-full flex items-center justify-center ">
          <span className="text-white md:text-9xl z-50 text-4xl">
            Portfolio
          </span>
          <FluidBackgroundContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
