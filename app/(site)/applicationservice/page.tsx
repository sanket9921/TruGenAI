import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Metadata } from "next";
import serviceData from "./serviceData";

export const metadata: Metadata = {
  title: "Application Development Services - TruGenAI",
  description:
    "Explore TruGenAI's innovative application development services. Build scalable, efficient, and user-friendly applications tailored to your business needs.",
};

const ApplicationServicePage = async () => {
  return (
    <>
      <Hero
      subheading="Application Development Service"
      heading="Next-Gen Applications for Growth"
      description="At TruGenAI, we specialize in developing cutting-edge applications that drive business growth. Our innovative solutions are designed to meet your unique needs, ensuring scalability, efficiency, and a seamless user experience."
      image="/images/hero/app.jpg"
      />
      <Services
      description="At TruGenAI, we offer a wide range of application development services designed to help your business thrive in the digital age. Our team of experts leverages the latest technologies to deliver custom solutions that drive efficiency, scalability, and innovation."
      serviceData={serviceData}
      />
    </>
  );
};

export default ApplicationServicePage;
