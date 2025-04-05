"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "The Wild Oasis CMS",
    description: `A CMS tool for a hotel to handle customer's bookings, the cabins they display on site, create new users, update settings and view stats through line and pie charts. To log in, add the following credentials, as it uses authentication and authorization to ensure data safety. Username: maxap80758@nozamas.com | Password: 12345678`,
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "React.JS" }],
    image: "/assets/work/thumb1.png",
    live: "https://the-wild-oasis-new-site.vercel.app",
    github: "https://github.com/giamanpanos/the-wild-oasis",
  },
  {
    num: "02",
    category: "frontend",
    title: "The Wild Oasis Website",
    description:
      "The Hotel Site for the Project 1 CMS, where users can log in, see all cabins and their availability, make a reservation, see and handle their future reservations and their profile.",
    stack: [{ name: "HTML 5" }, { name: "Tailwind.CSS" }, { name: "Next.JS" }],
    image: "/assets/work/thumb2.png",
    live: "https://the-wild-oasis-website-project.vercel.app",
    github: "https://github.com/giamanpanos/the-wild-oasis-website",
  },
    {
    num: "03",
    category: "frontend",
    title: "Manchester City",
    description:
      "Football team Website, in which users can check the players and matches of their favorite team, see the English Premier League Leaderboard and upcoming matches. Also after logging in, they can create or edit any player or match. Username: test@test.com | Password: test123!!",
    stack: [
      { name: "HTML 5" },
      { name: "CSS3" },
      { name: "React.JS" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://manchester-city-site.netlify.app",
    github: "https://github.com/giamanpanos/manchester_city",
  },
  {
    num: "04",
    category: "frontend",
    title: "Socially",
    description:
      "Social Media Site, in which user can manage their profile, make a post, like or comment on an existing post, receive notifications, see recommended accounts to follow and dark mode.",
    stack: [
      { name: "HTML 5" },
      { name: "Tailwind.CSS" },
      { name: "Typescript" },
      { name: "Next.JS" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://socially-social-media.vercel.app",
    github: "https://github.com/giamanpanos/socially",
  },
  {
    num: "05",
    category: "frontend",
    title: "Fast React Pizza Co.",
    description:
      "Pizza Ordering Site, in which users need to put their name, then select the available pizzas from the menu that will be added to cart. Also they can edit their order, place it and be able to track it by using the code provide without the # in the search field.",
    stack: [{ name: "HTML 5" }, { name: "Tailwind.CSS" }, { name: "Next.JS" }],
    image: "/assets/work/thumb5.png",
    live: "https://fast-react-pizza-co-site.netlify.app",
    github: "https://github.com/giamanpanos/Fast-React-Pizza-Co.",
  },
  {
    num: "06",
    category: "frontend",
    title: "The React Quiz",
    description:
      "A Quiz Site about React with 15 questions, timer, progress bar and high score to check how much you know about React.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "React.JS" }],
    image: "/assets/work/thumb6.png",
    live: "https://the-react-quiz-site.netlify.app",
    github: "https://github.com/giamanpanos/TheReactQuiz",
  },
    {
    num: "07",
    category: "frontend",
    title: "The Venue",
    description:
      "A One-Page Musical Events Website, which is dedicated on displaying the most upcoming popular music event. It has a countdown timer, a slider, google maps i-frame and also many effects and animations.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS3" },
      { name: "React.JS" },
    ],
    image: "/assets/work/thumb7.png",
    live: "https://the-venue-website.netlify.app",
    github: "https://github.com/giamanpanos/the-venue",
  },
  {
    num: "08",
    category: "frontend",
    title: "Gym Website",
    description:
      "A One-Page Gym Website with dark mode, effects and animations that also includes a registration form.",
    stack: [{ name: "HTML 5" }, { name: "Sass" }, { name: "Javascript" }],
    image: "/assets/work/thumb8.png",
    live: "https://gym-site-2022.netlify.app/up",
    github: "https://github.com/giamanpanos/gym",
  },
  {
    num: "09",
    category: "frontend",
    title: "Vision Luxury Villas Website",
    description:
      "A One-Page Hotel Website with effects, animations and a slider.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb9.png",
    live: "https://vlv-site.netlify.app",
    github: "https://github.com/giamanpanos/VLV",
  },
  {
    num: "10",
    category: "frontend",
    title: "Scarlett CV Website",
    description:
      "A One-Page CV Website with effects, animations and a contact form.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb10.png",
    live: "https://scarlett-cv.netlify.app",
    github: "https://github.com/giamanpanos/Scarlett-CV/tree/master",
  },
  {
    num: "11",
    category: "wordpress",
    title: "Akrokeramo",
    description:
      "A Wordpress Site about handmade ceramics with products, effects, 2 languages, map and a contact form.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb11.png",
    live: "https://akrokeramo.com/en/home/",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);
  const numProjects = projects.length - 1;

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] group">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              {/* <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.category} project
              </h2> */}
              {/* project title */}
              <h3 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h3>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"> </div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link
                  href={project.live}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                {project.github && (
                  <Link
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          quality={100}
                          className="object-cover"
                          alt={`project ${index}`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                numProjects={numProjects}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
