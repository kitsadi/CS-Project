import { navbar } from "@/types/navbar";

export const navItems: navbar[] = [
  {
    title: "ACADEMICS",
    type: "dropdown",
    options: [
      {
        title: "Undergraduate",
        href: "/academics/undergraduate",
      },
      {
        title: "Master",
        href: "/program/phd",
      },
      {
        title: "Doctoral",
        href: "/program/phd",
      },
      {
        title: "Lifelong Education",
        href: "/academics/lifelong_education",
      }
      ,
      {
        title: "Non Degree",
        href: "/academics/nondegree",
      }
    ],
  },
  {
    title: "RESEARCH",
    type: "button",
    href: "/research",
  },
  {
    title: "PEOPLE",
    type: "dropdown",
    options: [
      {
        title: "Lecturers",
        href: "/people/lecturers",
      },
      {
        title: "Staffs",
        href: "/people/staffs",
      }
    ],
  },
  {
    title: "NEWS & EVENTS",
    type: "dropdown",
    options: [
      {
        title: "News",
        href: "/announcement",
      },
      {
        title: "Events",
        href: "/congratulations",
      }
    ],
  },
  {
    title: "ABOUT",
    type: "dropdown",
    options: [
      {
        title: "Vision",
        href: "/about/vision",
      },
      {
        title: "Departmental History",
        href: "/about/history",
      },
      {
        title: "Maps and Directions",
        href: "/about/maps",
      },
      
    ],
  },
  {
    title: "FAQs",
    type: "button",
    href: "/faqs"
},
];
