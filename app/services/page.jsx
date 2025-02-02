"use client";

// import { BsArrowDownRight } from "react-icons/bs";
// import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "With more than 3 years of experience thought work, online seminars and courses as well as building many projects, I can assist at the frontend development of a site, e-shop or app, which will include a standard CMS or custom, or will be just pure code.",
    href: "",
  },
  {
    num: "02",
    title: "Customer Relationship Management",
    description:
      "With more than 4 years of experience through work in managing Wordpress, Magento, Shopify and custom CMS platforms as well as building promotional campaigns, I can assist in managing existing sites and e-shops and promote them.",
    href: "",
  },
  {
    num: "03",
    title: "WordPress Development",
    description:
      "With more than 2 years of experience through work, online courses and the creation of the site 'akrokeramo.com', I can assist in building and maintaining a Wordpress site or e-shop.",
    href: "",
  },
  {
    num: "04",
    title: "SEO Management",
    description:
      "With more than 3 years of experience through work, my Master degree and Digital Marketing Diploma as well as the 6-month internship, I can assist in the SEO strategy for any site, app or e-shop.",
    href: "",
  },
];

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  {/* <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link> */}
                </div>
                {/* title */}
                <h2 className="text-[28px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
