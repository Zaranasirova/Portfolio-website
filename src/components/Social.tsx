import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import path from "path";

const Social = () => {
  interface SocialItem {
    icon: JSX.Element;
    path: string;
  }

  const socials: SocialItem[] = [
    {
      icon: <FaGithub />,
      path: "https://github.com/",
    },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/z%C9%99rif%C9%99-n%C9%99sirova-34a551309/",
    },
    {
      icon: <FaFacebook />,
      path: "https://www.facebook.com/profile.php?id=61564042628039",
    },
    {
      icon: <FaWhatsappSquare />,
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
