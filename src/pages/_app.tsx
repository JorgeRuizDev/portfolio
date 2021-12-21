import '../styles/globals.css'
import "../styles/tailwind.css";
import type { AppProps } from 'next/app'
import dynamic from "next/dynamic";

const FluidBackgroundContainer = dynamic(
  () => import("components/core/FluidBackground"),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return <><FluidBackgroundContainer /><Component {...pageProps} /></>
}

export default MyApp
