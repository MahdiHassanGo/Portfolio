import { FaGithub, FaLinkedin, FaFacebook, FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-primaryBg text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <FaCode className="text-white text-center text-3xl ml-1 sm:ml-40" />
        <p>Copyright © {new Date().getFullYear()} - All rights reserved to Mahdi Hassan Noor</p>
      </aside>
      <nav className="grid-flow-col gap-4 justify-self-center md:place-self-center md:justify-self-center">
        <a
          href="https://github.com/MahdiHassanGo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-white text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/MahdiHassanNoor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-white text-3xl" />
        </a>
        <a
          href="https://www.facebook.com/MahdiHassanNoor"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook className="text-white text-3xl" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
