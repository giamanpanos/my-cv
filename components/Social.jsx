import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/giamanpanos" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/panagiotisgiaman",
  },
  // { icon: <FaFacebookF />, path: "https://www.facebook.com/panos.giaman" },
];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            rel="noopener noreferrer"
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
