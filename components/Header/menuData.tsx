import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "AI And Machine Learning",
        newTab: false,
        path: "/aiservice",
      },
      {
        id: 22,
        title: "Big Data & Analytics",
        newTab: false,
        path: "/dataanalyticsservice",
      },
      {
        id: 23,
        title: "Applicaiton Development",
        newTab: false,
        path: "/applicationservice",
      },
      {
        id: 25,
        title: "ChatBot",
        newTab: false,
        path: "/chatbotservice",
      },
      {
        id: 24,
        title: "Consultancy",
        newTab: false,
        path: "/consultancyservice",
      },
      {
        id: 25,
        title: "Web Scraping",
        newTab: false,
        path: "/webscrapingservice",
      },
    ],
  },
  {
    id: 3,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 4,
    title: "About Us",
    newTab: false,
    path: "/about",
  },

];

export default menuData;
