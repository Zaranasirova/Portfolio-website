import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";


const Social = () => {
  interface SocialItem {
    icon: JSX.Element;
    path: string;
  }

  const socials: SocialItem[] = [
    {
      icon: <FaGithub fill="#00ff99" />,
      path: "https://github.com/",
    },
    {
      icon: <FaLinkedinIn fill="#00ff99"/>,
      path: "https://www.linkedin.com/in/z%C9%99rif%C9%99-n%C9%99sirova-34a551309/",
    },
    {
      icon: <FaFacebookF fill="#00ff99" />,
      path: "https://www.facebook.com/profile.php?id=61564042628039",
    },
    {
      icon: <FaWhatsapp fill="#00ff99" />,
      path: "https://github.com/",
    },
  ];
  return (
    <ul className="social-links">
      {socials.map((item) => (
        <li>
          <Link to={item.path} target="_blank">{item.icon}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Social;
