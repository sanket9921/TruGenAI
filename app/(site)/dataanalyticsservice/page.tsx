import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Metadata } from "next";
import serviceData from "./serviceData";

export const metadata: Metadata = {
  title: "Data Analytics Services - TruGenAI",
  description:
    "Discover TruGenAI's advanced data analytics services. Transform raw data into actionable insights to make informed decisions, optimize operations, and achieve business success.",
};

const DataAnalyticsServicePage = async () => {
  return (
    <>
      <Hero
      subheading="Big Data and Analytics services"
      heading="Data Transforms Business Outcomes"
      description="TruGenAI specializes in leveraging advanced data analytics to transform raw data into actionable insights, empowering businesses to make informed decisions, optimize operations, and achieve unparalleled success in their respective industries."
      image="/images/hero/data.jpg"
      />
      <Services
      description="At TruGenAI, we offer a wide range of application development services designed to help your business thrive in the digital age. Our team of experts leverages the latest technologies to deliver custom solutions that drive efficiency, scalability, and innovation."
      serviceData={serviceData}
      />
    </>
  );
};

export default DataAnalyticsServicePage;
