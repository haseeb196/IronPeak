"use client"

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ElevationDivider from "@/components/ElevationDivider";
import Programs from "@/components/Programs";
import Pricing from "@/components/Pricing";
import Trainers from "@/components/Trainers";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { use } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="bg-chalk-50">
          <ElevationDivider label="Base — Programs" />
        </div>
        <Programs />
        <ElevationDivider label="Ascent — Membership" tone="dark" />
        <Pricing />
        <div className="bg-chalk-50">
          <ElevationDivider label="Ridge — Coaches" />
        </div>
        <Trainers />
        <ElevationDivider label="Approach — Member voices" tone="dark" />
        <Testimonials />
        <div className="bg-chalk-50">
          <ElevationDivider label="Summit — Visit" />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
