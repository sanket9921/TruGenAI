"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = ({ subheading, heading, description,image }: { subheading: string; heading: string; description: string;  image:string}) => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-sm font-light text-black dark:text-white">
                {subheading}
              </h4>
              <h1 className="mb-5 pr-16 text-5xl font-bold text-black dark:text-white">
                {heading}
              </h1>
              <p>
                {description}
              </p>

                <div className="mt-10">
                <button
                  onClick={() => window.location.href = '/contact'}
                  aria-label="get started button"
                  className="flex rounded-full border-2 border-primary px-7.5 py-2.5 text-primary duration-300 ease-in-out hover:bg-primary hover:text-white dark:hover:bg-primary cursor-pointer"
                >
                  Talk to our export
                </button>
                </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5"></div>
                <div className="p-4 border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                  <Image
                    className="dark:hidden"
                    src={image}
                    alt="Hero"
                    layout="responsive"
                    width={700}
                    height={444}
                  />
                  <Image
                    className="hidden dark:block"
                    src={image}
                    alt="Hero"
                    layout="responsive"
                    width={700}
                    height={444}
                  />
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Hero;
