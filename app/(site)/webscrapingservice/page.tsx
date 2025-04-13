import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Metadata } from "next";
import serviceData from "./serviceData";

export const metadata: Metadata = {
  title: "Web Scraping Services - TruGenAI",
  description:
    "Discover TruGenAI's expert web scraping services. Extract and analyze data with precision to drive informed decision-making, strategic growth, and competitive advantage.",
};

const WebScrapingServicePage = async () => {
  return (
    <>
      <Hero
      subheading="Web Scrapping Service"
      heading="Power Your Insights with Web Scraping"
      description="TruGenAI offers expert web scraping solutions that extract and analyze data with precision, empowering businesses to excel through informed decision-making. Our tailored strategies ensure efficient data extraction while maintaining accuracy and compliance. We provide the insights needed to drive strategic growth and competitive advantage in today's data-driven landscape."
      image="/images/hero/scrapping.jpg"
      />
      <Services
      description="At TruGenAI, we offer a wide range of application development services designed to help your business thrive in the digital age. Our team of experts leverages the latest technologies to deliver custom solutions that drive efficiency, scalability, and innovation."
      serviceData={serviceData}
      />
    </>
  );
};

export default WebScrapingServicePage;
