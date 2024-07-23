import React from "react";

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
            <div className=" flex flex-col space-y-4 ">
              <p className="text-base  text-gray-600">
                Hi there! I&apos;m John Romie, and I love creating stuff for the
                internet. Back in 2021, my college instructor challenged us to
                build a website using templates. Turns out, learning from a pro
                taught me a ton about HTML & CSS!
              </p>
              <p className="text-base  text-gray-600">
                Fast-forward to 2022, and I&apos;ve been lucky enough to work at
                Hooli Software, where I focus on making user-friendly web apps
                for various clients.
              </p>
              <p className="text-base  text-gray-600">
                I&apos;m open to Job opportunities where I can contribute, learn
                and grow. If you have a good opportunity that matches my skills
                and experience then don&apos;t hesitate to contact me.
              </p>
              <p className="text-base  text-gray-600">
                Here are a few technologies I&apos;ve been working with
                recently:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
