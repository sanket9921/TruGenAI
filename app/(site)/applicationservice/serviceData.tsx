import { Service } from "@/types/Service";


const serviceData: Service[] = [
    {
        id: 1,
        icon: "/images/icon/phone.png",
        title: "Mobile App Development",
        description:
          "Our mobile app development services cover everything from ideation to deployment, ensuring a seamless and engaging user experience.",
        services: [
          "iOS App Development",
          "Android App Development",
          "Cross-Platform App Development (e.g., React Native, Flutter)",
          "App Design and Prototyping",
          "App Testing and Quality Assurance",
          "App Deployment and Maintenance"
        ]
      },

    {
        id: 2,
        icon: "/images/icon/web.png",
        title: "Web Application Development",
        description:
          "We create dynamic and responsive web applications that cater to your business needs, providing a robust online presence.",
        services: [
          "Front-End Development (e.g., React, Angular, Vue.js)",
          "Back-End Development (e.g., Node.js, Django, Ruby on Rails)",
          "Full-Stack Development",
          "Progressive Web Apps (PWA)",
          "Single Page Applications (SPA)",
          "Web Application Design and Prototyping",
          "Web App Testing and Quality Assurance"
        ]
    },
    {
        id: 3,
        icon: "/images/icon/enterprise.png",
        title: "Enterprise Software Solutions",
        description:
          "Our enterprise software solutions help automate and optimize your business processes, leading to increased efficiency and productivity.",
        services: [
          "Custom Enterprise Software Development",
          "ERP System Development",
          "CRM System Development",
          "Business Process Automation",
          "Integration with Existing Systems",
          "Enterprise Software Testing and Quality Assurance",
          "Software Deployment and Maintenance"
        ]
    },

    {
        id: 4,
        icon: "/images/icon/custom.png",
        title: "Custom Application Development",
        description:
          "We offer custom application development services to create software that perfectly aligns with your specific business requirements.",
        services: [
          "Tailor-Made Solutions for Specific Business Needs",
          "API Development and Integration",
          "Custom Software Design and Prototyping",
          "Custom Software Testing and Quality Assurance",
          "Custom Software Deployment and Maintenance"
        ]
    },
    {
        id: 5,
        icon: "/images/icon/setting.png",
        title: "Application Maintenance and Support",
        description:
          "Our comprehensive maintenance and support services keep your applications running smoothly and securely.",
        services: [
          "Application Updates and Upgrades",
          "Performance Monitoring and Optimization",
          "Bug Fixing and Troubleshooting",
          "Security Audits and Enhancements",
          "Technical Support and Helpdesk Services",
          "User Training and Documentation"
        ]
    },

    {
        id: 6,
        icon: "/images/icon/paint.png",
        title: "UX/UI Design Services",
        description:
          "Our UX/UI design services focus on creating user-friendly interfaces that enhance the overall user experience of your applications.",
        services: [
          "User Research and Analysis",
          "Wireframing and Prototyping",
          "UX/UI Design for Mobile Apps",
          "UX/UI Design for Web Applications",
          "Usability Testing and Feedback"
        ]
    }

]

export default serviceData;