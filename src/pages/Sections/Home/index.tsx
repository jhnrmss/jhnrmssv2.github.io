import React from "react";
import meImage from "../../../assets/me.jpg";
import { Button } from "@/components";

export function Home() {
  return (
    <section id="home">
      <div>
        <div className="relative isolate pt-14 ">
          <div className="mx-auto max-w-2xl py-6 sm:py-10 lg:py-12">
            <div className="mb-2 flex justify-center">
              <div className="flex flex-col justify-center items-center px-3 space-y-3 text-gray-600">
                <img
                  src={meImage}
                  alt="My Photo"
                  className="h-32 w-auto rounded-full"
                />
                <p className="font-medium text-base text-default-text">
                  {" "}
                  Hi, I&apos;m John Romie Reyes.
                </p>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-default-text sm:text-6xl">
                I create web-based projects.
              </h1>
              <p className="mt-6 text-base leading-8 text-default-text">
                I&apos;m a Software Engineer living in the Philippines.
                specializing in building Web Applications that leads to the
                success of the overall product.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-6">
                <Button className="text-white">Contact Me</Button>
                <Button variant={"outline"} className="px-8">
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
