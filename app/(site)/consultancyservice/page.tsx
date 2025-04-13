import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Metadata } from "next";
import serviceData from "./serviceData";

export const metadata: Metadata = {
  title: "Consultancy Services - TruGenAI",
  description:
    "Explore TruGenAI's expert consultancy services. Transform your business with strategic advice, innovative solutions, and sustainable growth strategies tailored to your needs.",
};

const ConsultancyServicePage = async () => {
  return (
    <>
      <Hero
      subheading="Consultancy Service"
      heading="Strategic Consulting for Digital Success"
      description="TruGenAI specializes in expert consultancy services that transform businesses through strategic advice. We empower organizations to innovate, optimize operations, and achieve sustainable growth in today's competitive landscape."
      image="/images/hero/consulting.jpg"
      />

      <Services
      description="At TruGenAI, we offer a wide range of application development services designed to help your business thrive in the digital age. Our team of experts leverages the latest technologies to deliver custom solutions that drive efficiency, scalability, and innovation."
      serviceData={serviceData}
      />
    </>
  );
};

export default ConsultancyServicePage;
