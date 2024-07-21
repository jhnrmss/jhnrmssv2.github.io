import {
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../Button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../Sheet";

const NavigationBar = () => {
  return (
    <Sheet>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}

            <SheetTrigger className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-slate-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </SheetTrigger>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center ">
              <img
                alt="Application Main Logo"
                src="./src/assets/main-logo.png"
                className="h-5 w-auto"
              />
            </div>
            <div className="hidden sm:flex p-2 px-10 sm:mt-2">
              <div className="px-10 sm:border sm:flex sm:border-slate-100 sm:shadow-md sm:rounded-full sm:space-x-8 ">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-900"
                >
                  Home
                </a>
              </div>
            </div>
            <div className="hidden sm:mt-2 sm:ml-6 sm:flex sm:justify-center sm:items-center sm:space-x-8 ">
              <Button variant={"outline"} className="space-x-2">
                <p>Contact</p>
                <ArrowUpRightIcon className="h-4 w-auto" />
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
        </SheetHeader>
        <div className="flex flex-col justify-center items-center m-10">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-900"
          >
            Home
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default NavigationBar;