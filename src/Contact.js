import { Fragment, useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./home/Footer";

const Contact = () => {
  const form = useRef();
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  const [name, setName] = useState("");
  const [isClicked, setIsClicked] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  } 
  const subjectHandler = (event) => {
    setSubject(event.target.value);
  }
  const emailHandler = (event) => {
    setEmail(event.target.value);
  }
  const messageHandler = (event) => {
    setMessage(event.target.value);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if (name.trim() === "" || subject.trim() === "" || email.trim() === "" || message.trim() === "") {
      setIsClicked(true);
      setIsClicked(false);
      alert("Please fill all the inputs!");
      return;
    }
    setIsClicked(true);
    emailjs
      .sendForm(
        "service_4k1rdf5",
        "template_a090ilm",
        form.current,
        "4u1noTDIqRLVcflU_"
      )
      .then(
        (result) => {
          setIsClicked(false);
          alert("Your message has been successfully sent.");
        },
        (error) => {
          setIsClicked(false);
          alert(
            "Sorry, we couldn't send your message. Please try again later."
          );
        }
      );
      setEmail("");
      setName("");
      setMessage("");
      setSubject("");
  };
  
  return (
    <Fragment>
      <section className="px-20 pt-20 pb-56">
        <div className="text-8xl font-bold pb-10">Contact.</div>
        <div className="grid grid-cols-12 text-2xl font-bold space-x-2 pb-20">
          <div className="col-span-7">
            Let's Connect! Feel free to reach out for inquiries.
          </div>
          <div className="col-span-5 text-base">
            Don't hesitate to send me an email or{" "}
            <a
              className="underline decoration-solid underline-offset-4 decoration-4"
              href="https://calendly.com/caraanralph/15min"
              target="_blank"
              rel="noreferrer"
            >
              schedule
            </a>{" "}
            a consultation.
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-7">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col items-start justify-around space-y-1 mb-5">
                <label className="block font-semibold" htmlFor="from_name">
                  Name:
                </label>
                <input
                  className="px-5 py-2 w-full rounded-sm bg-[#27272a] focus:outline-none focus:brightness-125"
                  type="text"
                  id="from_name"
                  name="from_name"
                  placeholder="Enter Name"
                  autoComplete="off"
                  onChange={nameHandler}
                  value={name}
                />
              </div>
              <div className="flex flex-col items-start justify-around space-y-1 mb-5">
                <label className="block font-semibold" htmlFor="subject">
                  Subject:
                </label>
                <input
                  className="px-5 py-2 w-full rounded-sm bg-[#27272a] focus:outline-none focus:brightness-125"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter Email Subject"
                  autoComplete="off"
                  onChange={subjectHandler}
                  value={subject}
                />
              </div>
              <div className="flex flex-col items-start justify-around space-y-1 mb-5">
                <label className="block font-semibold" htmlFor="email_id">
                  Email:
                </label>
                <input
                  className="px-5 py-2 w-full rounded-sm bg-[#27272a] focus:outline-none focus:brightness-125"
                  type="email"
                  id="email_id"
                  name="email_id"
                  placeholder="Enter your email"
                  autoComplete="off"
                  onChange={emailHandler}
                  value={email}
                />
              </div>
              <div className="flex flex-col items-start justify-around space-y-1 mb-5">
                <label className="block font-semibold" htmlFor="message">
                  Message:
                </label>
                <textarea
                  className="px-5 py-2 w-full rounded-sm bg-[#27272a] focus:outline-none focus:brightness-125 h-32"
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  onChange={messageHandler}
                  value={message}
                />
              </div>
              <div>
                <div>
                  <button
                    className="send-button flex items-start justify-between space-x-2 text-lg py-2 px-5 border-2 border-bluish text-bluish dark:text-lightBlue hover:text-darkest dark:hover:text-darkest hover:bg-gradient-to-r hover:from-bluish hover:to-lightBlue rounded-md font-medium hover:cursor-pointer duration-75"
                    type="submit"
                  >
                    <svg
                      className={`animate-spin ${
                        isClicked ? "block" : "hidden"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#00d4e6"
                    >
                      <circle cx="12" cy="20" r="2"></circle>
                      <circle cx="12" cy="4" r="2"></circle>
                      <circle cx="6.343" cy="17.657" r="2"></circle>
                      <circle cx="17.657" cy="6.343" r="2"></circle>
                      <circle cx="4" cy="12" r="2.001"></circle>
                      <circle cx="20" cy="12" r="2"></circle>
                      <circle cx="6.343" cy="6.344" r="2"></circle>
                      <circle cx="17.657" cy="17.658" r="2"></circle>
                    </svg>
                    <svg
                      className={`${isClicked ? "hidden" : "block"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#00d4e6"
                    >
                      <path d="m2.6 13.083 3.452 1.511L16 9.167l-6 7 8.6 3.916a1 1 0 0 0 1.399-.85l1-15a1.002 1.002 0 0 0-1.424-.972l-17 8a1.002 1.002 0 0 0 .025 1.822zM8 22.167l4.776-2.316L8 17.623z"></path>
                    </svg>
                    <div>Send</div>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-5"></div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Contact;
