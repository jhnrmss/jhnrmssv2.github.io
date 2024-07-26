import { moreInfo, skillSets } from "@/assets/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components";
import { myImage } from "@/theme/images";

export function About() {
  return (
    <section id="about">
      <div>
        <div className="relative isolate py-14 ">
          <div className="mx-auto max-w-2xl space-y-8 py-6 sm:py-10 lg:py-12">
            <div className="text-center ">
              <h2 className=" font-bold text-2xl text-default-text sm:text-4xl">
                About Me!
              </h2>
              <h4 className="text-default-text text-base">Introduction</h4>
            </div>

            <div className="flex flex-col w-full lg:flex-row items-center gap-20 my-20">
              <div className="max-w-max mx-auto">
                <img
                  src={myImage}
                  alt="My Photo"
                  className="h-96 w-auto rounded-lg  opacity-80 hover:bg-none hover:opacity-100 duration-500 shadow"
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
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {moreInfo.map((item, index) => (
                <Card
                  key={"info_item_" + index}
                  className="border border-default-text/30 cursor-pointer rounded-lg hover:-translate-y-1 hover:shadow-[4px_4px_0_#334155] duration-500 -space-y-4 shadow-none"
                >
                  <CardHeader>
                    <CardTitle className="flex flex-col items-center px-4">
                      <item.icon className=" h-6 w-auto text-default-text" />
                      <h3 className="text-lg text-default-text font-medium">
                        {item.title}
                      </h3>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-center px-4">
                    <p className="text-base text-default-text">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <h4 className="text-base text-default-text">Tech stack I used:</h4>
            <div className="grid grid-cols-1 min-[280px]:grid-cols-2 min-[320px]:grid-cols-3 min-[420px]:grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
              {skillSets.map((item, index) => (
                <Card
                  key={"info_item_" + index}
                  className="shadow-none border border-default-text/30 cursor-pointer rounded-lg hover:-translate-y-1 hover:shadow-[4px_4px_0_#334155] duration-500"
                >
                  <CardContent className="flex justify-center p-4">
                    <item.icon className={item.iconStyle} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
