import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SwiperCore, { Autoplay } from "swiper";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
