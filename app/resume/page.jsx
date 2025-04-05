"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaSass } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";

import { BsCheckSquareFill, BsCheckSquare } from "react-icons/bs";

// about data
const about = {
  title: "About Me",
  description:
    "Below you can find some more general information about me and also communication channels to get in touch with me.",
  info: [
    {
      fieldName: "Name",
      fiedValue: "Panos Giaman",
    },
    {
      fieldName: "Phone",
      fiedValue: "+35795961001",
    },
    {
      fieldName: "Experience",
      fiedValue: "3+ Years",
    },
    {
      fieldName: "Skype",
      fiedValue: "live:gpanos321992",
    },
    {
      fieldName: "Nationality",
      fiedValue: "Greek",
    },
    {
      fieldName: "Email",
      fiedValue: "gpanos321992@gmail.com",
    },
    {
      fieldName: "Languages",
      fiedValue: "English, Greek",
    },
    {
      fieldName: "Computer Certificate",
      fiedValue: "ECDL",
    },
    {
      fieldName: "Driving License",
      fiedValue: "Category B",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "My work experience includes the Senior WebMaster and WebMaster position in Progressplay, in which I create landing pages, emails, push and pop ups with code and also handle procedures with custom programming tools. It also consists of my experience as Junior Frontend Developer in DigitalUp, where I was creating sites and e-shops with standard CMS tools like Wordpress and Shopify and adjusting them with custom code and also managing them. Finally, it contains jobs in enterprise customer service, sales and banking legal department.",
  items: [
    {
      company: "ProgressPlay LTD",
      position: "Senior WebMaster",
      duration: "05/2024 - Present",
    },
    {
      company: "ProgressPlay LTD",
      position: "WebMaster",
      duration: "05/2022 - 04/2024",
    },
    {
      company: "DigitalUp S.A.",
      position: "Junior Frontend Developer",
      duration: "01/2020 – 04/2022                                     ",
    },
    {
      company: "Vodafone S.A.",
      position: "Enterprise Customer Care Agent",
      duration: "10/2016 – 12/2019",
    },
    {
      company: "Forthnet S.A.",
      position: "Telemarketer",
      duration: "06/2016 – 09/2016",
    },
    {
      company: "GenM",
      position: "SEO Internship",
      duration: "11/2015 - 05/2016",
    },
    {
      company: "Pleasure Cruises S.A.",
      position: "Transport Department Employee (Seasonal)",
      duration: "06/2014 – 10/2014",
    },
    {
      company: "Eurobank S.A.",
      position: "Legal Department Employee (Internship)",
      duration: "12/2013 – 03/2014",
    },
    {
      company: "Pleasure Cruises S.A.",
      position: "Sales Assistant (Seasonal)",
      duration: "06/2013 – 10/2013",
    },
  ],
};

// eduation data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "My education began with my Bachelor Degree in Economic Science and then continued with my Master Degree in Internation Marketing, the Diploma in Digital Marketing & Social Media and an intership in SEO. Through a job opportunity, I found out my passion in programming and started my online education regarding Frontend Development in Udemy, Team Treahouse and Codecademy, which I still continue simultaneously with the creation of multiple projects.",
  items: [
    {
      institution: "Udemy",
      degree: "Tailwind CSS 3",
      duration: "01/2025 - 04/2025",
    },
    {
      institution: "Udemy",
      degree: "Unlock WordPress Power",
      duration: "04/2024 - 07/2024",
    },
    {
      institution: "Udemy",
      degree: "Next.js 14 & React - The Complete Guide",
      duration: "11/2023 - 01/2024",
    },
    {
      institution: "Udemy",
      degree: "Understanding TypeScript",
      duration: "10/2023 - 11/2023",
    },
    {
      institution: "Udemy",
      degree: "The Ultimate React Course",
      duration: "05/2023 - 09/2023",
    },
    {
      institution: "CodeCademy",
      degree: "Front-End Engineer",
      duration: "11/2022 - 04/2023",
    },
    {
      institution: "Team Treehouse",
      degree: "Front End Web Development",
      duration: "05/2022 - 10/2022",
    },
    {
      institution: "Udemy",
      degree: "The Complete JavaScript Course",
      duration: "01/2022 - 04/2022",
    },
    {
      institution: "Udemy",
      degree: "The Modern Flexbox, Grid, Sass & Animations",
      duration: "09/2021 - 11/2021",
    },
    {
      institution: "Udemy",
      degree: "Master Modern JavaScript by Building 50 Projects",
      duration: "01/2021 - 04/2021",
    },
    {
      institution: "Udemy",
      degree: "50 Projects In 50 Days - HTML, CSS & JavaScript",
      duration: "08/2020 - 11/2020",
    },
    {
      institution: "Udemy",
      degree: "JavaScript Developer Bootcamp",
      duration: "03/2020 - 07/2020",
    },
    {
      institution: "Udemy",
      degree: "Become a WordPress Developer",
      duration: "10/2019 - 02/2020",
    },
    {
      institution: "Udemy",
      degree: "Advanced CSS and Sass",
      duration: "06/2019 - 09/2019",
    },
    {
      institution: "Udemy",
      degree: "The Complete Web Development Course",
      duration: "12/2018 - 05/2019",
    },
    {
      institution: "Growthrocks",
      degree: "Growth Hacking Academy Certificate",
      duration: "09/2017 - 02/2018",
    },
    {
      institution: "University of Athens",
      degree: "Master in Marketing & Communications",
      duration: "09/2015 - 02/2017",
    },
    {
      institution: "Knowcrunch & Deree",
      degree: "Professional Diploma in Digital Marketing",
      duration: "09/2016 - 12/2016",
    },
    {
      institution: "University of Piraeus",
      degree: "Bachelor in Economic Science",
      duration: "09/2010 – 02/2015",
    },
  ],
};

// frontend skills data
const frontendSkills = {
  title: "My Frontend Skills",
  description:
    "I have a really good knowledge and experience in the folowing frontend languages, libraries and frameworks through my work and online education.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.CSS",
    },
    {
      icon: <FaSass />,
      name: "Sass",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  // description:
  //   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi dolorem omnis expedita at quo possimus pariatur.",
  skillList: [
    {
      name: "Multitasking",
      numChecked: 9,
      numUnchecked: 1,
    },
    {
      name: "Hard-working",
      numChecked: 9,
      numUnchecked: 1,
    },
    {
      name: "Problem Solving",
      numChecked: 8,
      numUnchecked: 2,
    },
    {
      name: "Communication Skills",
      numChecked: 8,
      numUnchecked: 2,
    },
    {
      name: "Team player",
      numChecked: 9,
      numUnchecked: 1,
    },
    {
      name: "Critical Thinking",
      numChecked: 8,
      numUnchecked: 2,
    },
    {
      name: "Resilience",
      numChecked: 9,
      numUnchecked: 1,
    },
    {
      name: "Decision Making",
      numChecked: 8,
      numUnchecked: 2,
    },
    {
      name: "Adaptability",
      numChecked: 9,
      numUnchecked: 1,
    },
    {
      name: "Cognitive Flexibility",
      numChecked: 8,
      numUnchecked: 2,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:pb-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="frontend-skills">Frontend Skills</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] p-6 px-2 lg:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] p-6 px-2 lg:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Frontend Skills */}
            <TabsContent value="frontend-skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{frontendSkills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {frontendSkills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {frontendSkills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p /*className="capitalize"*/>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p> */}
                </div>
                <div className="bg-[#232329] px-4 py-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row gap-2 text-lg justify-between items-center [&:not(:first-child)]:mt-5 sm:[&:not(:last-child)]:mb-2 group"
                      >
                        <p>{skill.name}</p>
                        <div className="flex gap-1.5">
                          <div className="flex gap-1.5 text-xl group-hover:text-accent">
                            {Array.from({
                              length: skill.numChecked,
                            }).map((_, index) => (
                              <BsCheckSquareFill key={Math.random() + index} />
                            ))}
                          </div>
                          <div className="flex gap-1.5 text-xl">
                            {Array.from({
                              length: skill.numUnchecked,
                            }).map((_, index) => (
                              <BsCheckSquare key={Math.random() - index} />
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fiedValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
