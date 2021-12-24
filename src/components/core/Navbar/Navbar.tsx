import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FcAbout } from "react-icons/fc";
import { BsFillCollectionFill } from "react-icons/bs";
import ActiveLink from "../ActiveLink/ActiveLink";
interface INavbarProps {}

function Navbar(props: INavbarProps) {
  return (
    <nav className="p-2 [z-index:35] sticky top-0 left-0 bg-sky-700 rounded-b-md h-12 flex flex-row items-center justify-between">
      <Link href="/" passHref={true}>
        <a>
          <span className="text-2xl md:block hidden">JorgeRuizDev</span>
        </a>
      </Link>

      <div className="w-full md:max-w-[500px] flex flex-row justify-around">
        <ActiveLink href="/#projects">
          <a className="nav-links">
            <span>
              <BsFillCollectionFill />
            </span>
            <span className="">Portfolio</span>
          </a>
        </ActiveLink>
        <ActiveLink href="/#about">
          <a className="nav-links" >
            <span className="text-white">
              <FaEnvelope />
            </span>
            <span className="">About</span>
          </a>
        </ActiveLink>

        <a
          className="nav-links"
          href="https://www.linkedin.com/in/jorge-ruiz-g%C3%B3mez-44223b184/"
        >
          <span>
            <FaLinkedin />
          </span>
          <span className="md:block hidden">LinkedIn</span>
        </a>
        <a className="nav-links" href="https://github.com/JorgeRuizDev">
          <span>
            <FaGithub />
          </span>
          <span className="md:block hidden">Github</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
