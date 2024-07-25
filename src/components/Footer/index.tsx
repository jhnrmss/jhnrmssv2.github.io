import { socials } from "@/assets/constants";
import MainLogo from "../../assets/main-logo.png";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center px-3 space-y-4 text-gray-600">
          <img src={MainLogo} alt="My Photo" className="h-6 w-auto" />
          <a
            href="mailto:johnromie37@gmail.com"
            className="inline-flex space-x-2 items-center text-sm text-default-text cursor-pointer hover:font-medium"
          >
            <HiOutlineMail className="h-5 w-auto" />

            <p className=" pb-1 ">{"johnromie37@gmail.com "}</p>
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6 text-primary" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-primary">
            &copy; 2024 John Romie Reyes. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
