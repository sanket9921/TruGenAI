"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import SingleService from "./SingleService";
import { Service } from "@/types/Service";

interface ServicesProps {
  description: string;
  serviceData: Service[];
}

const Services: React.FC<ServicesProps> = ({description, serviceData }) => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "TRUGENAI SERVICES",
              subtitle: "",
              description: description
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {serviceData.map((service, key) => (
              <SingleService service={service} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Services;
