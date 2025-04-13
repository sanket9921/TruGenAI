import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "TruGenAI | AI and Data Solutions for a Smarter Future",
  description:
    "Welcome to TruGenAI. Discover cutting-edge AI, big data, and application development solutions tailored to drive innovation, efficiency, and sustainable growth for your business.",
};

export default function Home() {
  return (
    <main>
      <Hero
      subheading="Innovation for a Smarter Tomorrow"
      heading="Smart Innovations for Sustainable Growth"
      description="At TruGenAI, we leverage cutting-edge technology to drive your business forward. With expertise in AI, big data, and application development, we deliver tailored solutions that ensure your success in the digital age."
      image="/images/hero/hero-home.png"
      />
      {/* <Brands /> */}
      <Feature />
      <About />
      <FeaturesTab />
      {/* <FunFact /> */}
      <Integration />

      {/* <CTA /> */}
      
      <FAQ />
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      <Contact />
      <Blog />
    </main>
  );
}
