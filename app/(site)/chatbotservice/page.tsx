import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Metadata } from "next";
import { serverHooks } from "next/dist/build/templates/app-route";
import serviceData from "./serviceData";

export const metadata: Metadata = {
  title: "Chatbot Services - TruGenAI",
  description:
    "Discover TruGenAI's advanced AI chatbot services. Enhance customer interaction with intelligent, personalized, and efficient chatbot solutions powered by AI and machine learning.",
};

const ChatbotServicePage = async () => {
  return (
    <>
      <Hero
      subheading="ChatBot Services"
      heading="Advanced AI Chat Solutions"
      description="Discover TruGenAI's advanced AI chat solutions, leveraging cutting-edge technology to enhance customer interaction. Our chatbots utilize AI and machine learning for personalized service across channels, optimizing efficiency and engagement."
      image="/images/hero/chatbot.jpg"
      />
      <Services
      description="At TruGenAI, we offer a wide range of application development services designed to help your business thrive in the digital age. Our team of experts leverages the latest technologies to deliver custom solutions that drive efficiency, scalability, and innovation."
      serviceData={serviceData}
      />
    </>
  );
};

export default ChatbotServicePage;
