import { Service } from "@/types/Service";

const serviceData: Service[] = [
  {
    id: 1,
    icon: "/images/icon/download.png",
    title: "Data Extraction",
    description: "Efficient extraction of specific data points from websites.",
    services: [
      "Structured Data Extraction",
      "Unstructured Data Extraction",
      "Real-time Data Scraping",
    ],
  },
  {
    id: 2,
    icon: "/images/icon/custom.png",
    title: "Custom Scraping Solutions",
    description: "Tailored solutions for unique data needs and formats.",
    services: [
      "Customized Data Scraping",
      "Complex Data Structures",
      "Format-specific Scraping",
    ],
  },
  {
    id: 3,
    icon: "/images/icon/server.png",
    title: "Scalable Infrastructure",
    description:
      "Handling large-scale scraping projects with robust infrastructure.",
    services: [
      "High-volume Data Scraping",
      "Scalable Architecture",
      "Load Balancing",
    ],
  },
  {
    id: 4,
    icon: "/images/icon/quality.png",
    title: "Data Quality Assurance",
    description:
      "Ensuring accurate and reliable data through validation processes.",
    services: ["Data Validation", "Quality Checks", "Error Handling"],
  },
  {
    id: 5,
    icon: "/images/icon/balance.png",
    title: "Compliance and Ethics",
    description:
      "Adhering to legal standards and ethical practices in web scraping.",
    services: [
      "Legal Compliance",
      "Ethical Data Collection",
      "Privacy Protection",
    ],
  },
  {
    id: 6,
    icon: "/images/icon/chain.png",
    title: "Integration Services",
    description:
      "Seamless integration of scraped data into existing systems or databases.",
    services: [
      "Data Integration",
      "API Integration",
      "Database Synchronization",
    ],
  },
];

export default serviceData;