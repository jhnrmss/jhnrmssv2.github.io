import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGolang,
  FaSourcetree,
  FaJira,
  FaGitAlt,
} from "react-icons/fa6";
import { SiTailwindcss, SiRedux, SiReactquery, SiAxios } from "react-icons/si";
import { TbBrandJavascript, TbGhost2 } from "react-icons/tb";

const moreInfo = [
  {
    title: "Experience",
    description: "2 years of experience at Hooli Software",
    icon: FaBriefcase,
  },
  {
    title: "Education",
    description: "Bachelor of Science in Computer Science",
    icon: FaGraduationCap,
  },
  {
    title: "Projects",
    description: "Been part of 7 projects in my previous role.",
    icon: FaCode,
  },
];

const skillSets = [
  {
    label: "HTML",
    icon: FaHtml5,
    iconStyle: "h-8 w-auto text-orange-400",
  },
  {
    label: "CSS",
    icon: FaCss3Alt,
    iconStyle: "h-8 w-auto text-blue-400",
  },
  {
    label: "JavaScript",
    icon: TbBrandJavascript,
    iconStyle: "h-8 w-auto text-yellow-400",
  },
  {
    label: "ReactJS",
    icon: FaReact,
    iconStyle: "h-8 w-auto text-blue-400",
  },

  {
    label: "Tailwind",
    icon: SiTailwindcss,
    iconStyle: "h-8 w-auto text-blue-400",
  },
  {
    label: "ReduxJS",
    icon: SiRedux,
    iconStyle: "h-8 w-auto text-purple-400",
  },
  {
    label: "Jotai",
    icon: TbGhost2,
    iconStyle: "h-8 w-auto text-blue-400",
  },
  {
    label: "React Query",
    icon: SiReactquery,
    iconStyle: "h-8 w-auto text-blue-400",
  },
  {
    label: "Golang",
    icon: FaGolang,
    iconStyle: "h-8 w-auto text-blue-400",
  },
  {
    label: "Source Tree",
    icon: FaSourcetree,
    iconStyle: "h-8 w-auto text-blue-400",
  },
  {
    label: "Jira",
    icon: FaJira,
    iconStyle: "h-8 w-auto text-blue-400",
  },
  {
    label: "Git",
    icon: FaGitAlt,
    iconStyle: "h-8 w-auto text-orange-500",
  },
  {
    label: "Axios",
    icon: SiAxios,
    iconStyle: "h-8 w-auto text-indigo-500",
  },
];

export { moreInfo, skillSets };
