import SectionHeader from "@/components/Common/SectionHeader";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - TruGenAI",
  description:
    "Learn more about TruGenAI, our mission, and how we empower businesses with cutting-edge AI and data solutions.",
};

const About = async () => {
  return (
    <>
      <Hero
        subheading="Empowering Your Future with AI"
        heading="Smart Solutions for Smart Businesses"
        description="At TruGenAI, we are dedicated to pushing the boundaries of technology to deliver cutting-edge AI and data solutions. Our innovative approach and deep expertise empower businesses to unlock their full potential and drive sustainable growth. Join us in transforming the future, one step at a time."
        image="/images/hero/about.jpg"
      />

      <SectionHeader
        headerInfo={{
          title: "ABOUT TRUGENAI",
          subtitle: "Innovate, Integrate, Succeed",
          description: `At TruGenAI, we harness cutting-edge technology to drive business growth and innovation. Join us in shaping a smarter tomorrow.`,
        }}
      />

      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2">
              <Image
                src="/images/about/AI.png"
                alt="Illustration representing AI and innovation"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/AI.png"
                alt="Illustration representing AI and innovation in dark mode"
                className="hidden dark:block"
                fill
              />
            </div>
            <div className="animate_right md:w-1/2">
              <h2 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white">
                Driving Innovation, Delivering Excellence
              </h2>
              <p>
                At TruGenAI, we are committed to leveraging the power of
                artificial intelligence and data analytics to transform
                businesses and drive growth. Founded as a startup with over 4
                years of industry experience, our team of experts specializes
                in AI and machine learning, big data and analytics, application
                development, and consultancy services.
              </p>
              <br />
              <p>
                Our mission is to provide innovative solutions that empower our
                clients to stay ahead in the competitive market. With a
                customer-centric approach and a passion for technology, we
                deliver tailored solutions that meet the unique needs of each
                business. Join us on our journey to shape a smarter and more
                efficient future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionHeader
        headerInfo={{
          title: "WHY TRUGENAI",
          subtitle: "Your Partner in AI Excellence",
          description: `At TruGenAI, we combine expertise, innovation, and a customer-first approach to deliver exceptional AI and data solutions. Our proven track record and commitment to quality make us the ideal partner for your business's digital transformation.`,
        }}
      />

      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div className="animate_right md:w-1/2">
              <span>Expert Solutions for a Digital World</span>
              <h2 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white">
                Excellence in Every Solution
              </h2>
              <p>
                Choosing the right partner for your AI and data needs is
                crucial. At TruGenAI, we pride ourselves on our commitment to
                excellence, innovation, and customer satisfaction. Here are just
                a few reasons why TruGenAI stands out:
              </p>
              <br />
              {[
                {
                  number: "01",
                  title: "Expertise and Experience",
                  description:
                    "With over 4 years of experience in AI and data analytics, our team of seasoned professionals is well-equipped to deliver high-quality solutions tailored to your business needs.",
                },
                {
                  number: "02",
                  title: "Customer-Centric Approach",
                  description:
                    "We prioritize our clients' needs and work closely with them to understand their goals. Our solutions are designed to deliver tangible results and drive business growth.",
                },
                {
                  number: "03",
                  title: "Innovative Solutions",
                  description:
                    "We stay ahead of the curve by continuously exploring and implementing the latest technologies in AI and data analytics. Our innovative approach ensures that you receive cutting-edge solutions.",
                },
                {
                  number: "04",
                  title: "Comprehensive Services",
                  description:
                    "From AI and machine learning to big data analytics, application development, and consultancy, we offer a wide range of services to meet all your business needs under one roof.",
                },
                {
                  number: "05",
                  title: "Proven Track Record",
                  description:
                    "Our success stories speak for themselves. We have helped numerous clients achieve their business objectives and improve their operational efficiency through our solutions.",
                },
                {
                  number: "06",
                  title: "Commitment to Quality",
                  description:
                    "Quality is at the heart of everything we do. We adhere to the highest standards of quality assurance to ensure that our solutions are reliable, scalable, and effective.",
                },
              ].map((item, index) => (
                <div key={index} className="mt-7.5 flex items-center gap-5">
                  <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      {item.number}
                    </p>
                  </div>
                  <div className="w-3/4">
                    <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
