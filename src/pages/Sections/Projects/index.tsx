import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export function Projects() {
  const [currentTab, setCurrentTab] = useState("all");
  console.log(currentTab);
  return (
    <section id="projects">
      <div>
        <div className="relative isolate py-14 ">
          <div className="mx-auto max-w-2xl space-y-8 py-6 sm:py-10 lg:py-12">
            <div className="text-center ">
              <h2 className=" font-bold text-2xl text-default-text sm:text-4xl">
                My latest work!
              </h2>
              <h4 className="text-default-text text-base">My Portfolio</h4>
              <p className="mt-6 text-base leading-8 text-default-text">
                Welcome to my web development portfolio! explore a collection of
                projects showcasing my expertise in web development.
              </p>
            </div>
            <Tabs
              defaultValue="account"
              className="flex justify-center w-full"
              onValueChange={(val) => setCurrentTab(val)}
            >
              <TabsList className="bg-transparent">
                <TabsTrigger
                  value="all"
                  className="text-default-text data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full"
                >
                  All
                </TabsTrigger>

                <TabsTrigger
                  value="account"
                  className="text-default-text data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full"
                >
                  Fullstack
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  className="text-default-text data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:rounded-full"
                >
                  Backend
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, index) => (
                <Card
                  key={item + " proj " + index}
                  className="p-5 space-y-3 border border-default-text/30 cursor-pointer rounded-lg hover:-translate-y-1 hover:shadow-[4px_4px_0_#334155] duration-500 shadow-none"
                >
                  <CardContent className="flex justify-center items-center p-0 ">
                    <img
                      src={""}
                      alt="My Work Image"
                      className="h-40 w-40 rounded-lg bg-primary"
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col p-0 items-start space-y-1">
                    <h4 className="font-medium text-default-text">
                      Sample Web
                    </h4>
                    <a href="" className="flex items-center space-x-2">
                      <p>Demo</p>
                      <IoIosArrowRoundForward className="h-5 w-auto mt-1" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <Button>Show More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
