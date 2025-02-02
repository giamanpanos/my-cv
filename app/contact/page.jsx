"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+35795961001",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gpanos321992@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Kafkasou, Nicosia, Cyprus",
  },
];

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern =
      /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

    setSuccess("");
    if (!firstName) {
      setError("Please enter your first name");
      return;
    }
    if (!lastName) {
      setError("Please enter your last name");
      return;
    }
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    if (phone && !phonePattern.test(phone)) {
      setError("Please enter a valid phone number");
      return;
    }
    if (!service) {
      setError("Please select a service");
      return;
    }
    if (!message) {
      setError("Please enter your message");
      return;
    }

    const templateParams = {
      to_name: "Giaman Panagiotis",
      from_firstName: firstName,
      from_lastName: lastName,
      from_email: email,
      from_phone: phone,
      from_service: service,
      message,
    };

    setError("");
    setIsLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "",
        }
      )
      .then(
        function () {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setService("");
          setMessage("");
          setIsLoading(false);
          setSuccess(
            "Your message has been sent successfully. I will get back to you asap."
          );
        },
        function () {
          setError(
            "Some error occured. Please send me a direct email to my email address."
          );
          setIsLoading(false);
        }
      );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                If you are interested, send me a message.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number (optional)"
                />
              </div>
              {/* select */}
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="frontend">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="crm">
                      Customer Relationship Management
                    </SelectItem>
                    <SelectItem value="wordpress">
                      WordPress Development
                    </SelectItem>
                    <SelectItem value="seo">SEO Management</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here"
                required
              />
              {error && (
                <div className="p-2 w-full text-center text-red-600 text-sm">
                  {error}
                </div>
              )}
              {success && (
                <div className="p-2 w-full text-center text-accent text-sm">
                  {success}
                </div>
              )}
              {/* btn */}
              <Button
                size="md"
                onClick={sendEmail}
                disabled={isLoading}
                className="max-w-40 py-2"
              >
                {isLoading ? (
                  <div className="animate-spin h-5 w-5 border-t-2 border-gray-200 border-solid rounded-full mx-1"></div>
                ) : success ? (
                  "Sent"
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
