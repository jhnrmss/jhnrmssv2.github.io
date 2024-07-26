import { Input, Button, Textarea } from "@/components";
import { useRef } from "react";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
export function Contact() {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const formElement = useRef<HTMLFormElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    console.log(serviceId, templateId, publicKey);
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, formElement.current as HTMLFormElement, {
        publicKey: publicKey,
      })
      .then(
        () => {
          toast.success("Message sent!");
        },
        (error) => {
          toast.error("Message not sent!");
          console.log(error);
        }
      );
  };
  return (
    <section id="contact">
      <div>
        <div className="relative isolate py-14 ">
          <div className="mx-auto max-w-2xl space-y-8 py-6 sm:py-10 lg:py-12">
            <div className="text-center ">
              <h2 className=" font-bold text-2xl text-default-text sm:text-4xl">
                Get in touch!
              </h2>
              <h4 className="text-default-text text-base">Connect with me</h4>
              <p className="mt-6 text-base leading-8 text-default-text">
                I&apos;d love to hear from you! if you have any questions,
                comments or feedback, please use the form below.
              </p>
            </div>
            <form ref={formElement} onSubmit={onSubmit} className="space-y-4">
              <div className="flex w-full gap-6">
                <div className="basis-1/2 space-y-2">
                  <label htmlFor="#name" className="text-gray-700 font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    name="user_name"
                    placeholder="Enter your name "
                    className="placeholder:text-gray-400 border-gray-400"
                  />
                </div>
                <div className="basis-1/2 space-y-2">
                  <label
                    htmlFor="#Email"
                    className="text-gray-700 font-medium "
                  >
                    Email
                  </label>

                  <Input
                    id="Email"
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    className="placeholder:text-gray-400 border-gray-400 outline-none ring-0"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="#Message" className="text-gray-700 font-medium">
                  Message
                </label>

                <Textarea
                  id="Message"
                  name="message"
                  placeholder="Enter your message"
                  className="min-h-[120px] placeholder:text-gray-400 border-gray-400 outline-none ring-0"
                />
              </div>
              <div className="flex justify-center ">
                <Button
                  className="inline-flex mt-2 items-center space-x-2"
                  type="submit"
                >
                  <p>Send Message</p>
                  <IoIosSend />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
