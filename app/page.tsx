"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import LightRays from "@/components/ui/LightRays";

const Home = () => {
  return (
    <main className="relative dark:bg-black-100 bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full relative">
        <div
          className="hidden lg:block w-full h-[600px] absolute"
          style={{ width: "100%", height: "600px", position: "absolute" }}
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#0000FF"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1}
            followMouse={true}
            mouseInfluence={0.2}
            // noiseAmount={0.1}
            // distortion={0.05}
            className="custom-rays"
          />
        </div>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
