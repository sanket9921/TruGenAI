import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Metadata } from "next";
import serviceData from "./serviceData";

export const metadata: Metadata = {
  title: "AI and Machine Learning Services - TruGenAI",
  description:
    "Discover TruGenAI's cutting-edge AI and Machine Learning services. Transform your business operations with intelligent solutions, data-driven decisions, and process automation.",
};

const AiServicePage = async () => {
  return (
    <>
      <Hero
      subheading="AI and Machine Learning Service"
      heading="Harness the Power of Intelligent Solutions"
      description="At TruGenAI, we specialize in leveraging artificial intelligence and machine learning to transform your business operations. Our innovative solutions help you make data-driven decisions, automate processes, and gain a competitive edge."
      image="/images/hero/hero-ai.jpg"
      />
      <Services
      description="At TruGenAI, we offer a wide range of application development services designed to help your business thrive in the digital age. Our team of experts leverages the latest technologies to deliver custom solutions that drive efficiency, scalability, and innovation."
      serviceData={serviceData}
      />
    </>
  );
};

export default AiServicePage;
