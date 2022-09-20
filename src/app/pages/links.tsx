import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/CruzNadin",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://www.linkedin.com/in/kadir-barcin/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mailto:contact@thekadir.com",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Download my CV",
    href: "https://thekadir.net/wp-content/uploads/2021/11/kadir-barcin-cv.pdf",
    icon: <FaFileDownload />,
  },
];
