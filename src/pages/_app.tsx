import "../styles/globals.css";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import useTouch from "hooks/useTouch";
import React from "react";
import Navbar from "components/core/Navbar";
import Footer from "components/core/Footer";
import Head from "components/core/Head";

const FluidBackgroundContainer = dynamic(
  () => import("components/core/FluidBackground"),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <>
      <Head />
      <Navbar />
      <div>
        <FluidBackgroundContainer />
      </div>
      <div className="p-2 min-h-screen">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </>
  );
}

export default MyApp;
