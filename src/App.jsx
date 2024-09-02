//This project created by me within three days >>>>>>
import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className=" z-[999] w-full h-screen bg-white">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
