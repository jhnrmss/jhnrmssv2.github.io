import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../Button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../Sheet";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { navigation } from "@/assets/constants";
import { mainLogo } from "@/theme/images";

const NavigationBar = () => {
  return (
    <Sheet>
      <div className="container mx-auto px-4 pt-4 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}

            <SheetTrigger className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
              <FaBarsStaggered
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <FaXmark
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </SheetTrigger>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between mx-auto max-w-4xl">
            <div className="flex flex-shrink-0 items-center ">
              <img
                alt="Application Main Logo"
                src={mainLogo}
                className="h-5 w-auto"
              />
            </div>
            <div className="hidden sm:flex p-1 px-10 sm:mt-2">
              <ul className="px-10  bg-white sm:border sm:flex sm:border-slate-100 sm:shadow-md sm:rounded-full sm:space-x-8 ">
                {" "}
                {navigation.map((link, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center text-sm font-medium text-default-text"
                  >
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden sm:mt-2 sm:ml-6 sm:flex sm:justify-center sm:items-center sm:space-x-8 ">
              <Button
                variant={"outline"}
                className="space-x-1  hover:text-white"
              >
                <p>Contact</p>
                <GoArrowUpRight className="h-4 mt-0.5 w-auto " />
              </Button>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="h-6 w-6" />
          </button>

          Profile dropdown
          <Button variant={"outline"} className="space-x-2">
            <p>Contact</p>
            <ArrowUpRightIcon className="h-4 w-auto" />
          </Button>
        </div> */}
          </div>
        </div>
      </div>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            {" "}
            <img
              alt="Application Main Logo"
              src="./src/assets/main-logo.png"
              className="h-5 w-auto"
            />
          </SheetTitle>
          <SheetDescription className="sr-only">Main Logo</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col justify-center space-y-4 items-center m-10">
          {navigation.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="inline-flex items-center text-sm font-medium text-gray-900"
            >
              {link.name}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default NavigationBar;
