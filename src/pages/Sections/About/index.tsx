import React from "react";
import meImage from "../../../assets/my-photo.jpg";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import {
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaGolang,
  FaHtml5,
  FaJira,
  FaReact,
  FaSourcetree,
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

export function About() {
  return (
    <section id="about">
      <div className="bg-white">
        <div className="relative isolate py-14 ">
          <div className="mx-auto max-w-2xl space-y-12 py-6 sm:py-10 lg:py-12">
            <div className="text-center ">
              <h2 className=" font-bold  text-default-text sm:text-4xl">
                About Me!
              </h2>
              <h4 className="text-default-text text-base">Introduction</h4>
            </div>

            <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
              <div className="max-w-max mx-auto">
                <img
                  src={meImage}
                  alt="My Photo"
                  className="h-96 w-auto rounded-md  opacity-80 hover:bg-none hover:opacity-100 duration-500"
                />
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-base  text-gray-600">
                  Hi there! I&apos;m John Romie, and I love creating stuff for
                  the internet. Back in 2021, my college instructor challenged
                  us to build a website using templates. Turns out, learning
                  from a pro taught me a ton about HTML & CSS!
                </p>
                <p className="text-base  text-gray-600">
                  Fast-forward to 2022, and I&apos;ve been lucky enough to work
                  at Hooli Software, where I focus on making user-friendly web
                  apps for various clients.
                </p>
                <p className="text-base  text-gray-600">
                  I&apos;m open to Job opportunities where I can contribute,
                  learn and grow. If you have a good opportunity that matches my
                  skills and experience then don&apos;t hesitate to contact me.
                </p>
                <p className="text-base  text-gray-600">
                  Here are a few technologies I&apos;ve been working with
                  recently:
                </p>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {moreInfo.map((item, index) => (
                <li
                  key={"info_item_" + index}
                  className="border border-default-text/40 cursor-pointer rounded-md p-4 hover:-translate-y-1 hover:shadow-[4px_4px_0_#334155] duration-500 "
                >
                  <item.icon className="h-6 w-auto text-default-text" />
                  <h3 className="text-lg text-default-text font-medium">
                    {item.title}
                  </h3>
                  <p className="text-base text-default-text">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
            <h4 className="text-base text-default-text">Tech stack I used:</h4>
            <ul className="grid grid-cols-6 min-[320px]:grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-4">
              {skillSets.map((item, index) => (
                <li
                  key={"info_item_" + index}
                  className="flex justify-center border border-default-text/40 cursor-pointer rounded-md p-4 hover:-translate-y-1 hover:shadow-[4px_4px_0_#334155] duration-500 "
                >
                  <item.icon className={item.iconStyle} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
