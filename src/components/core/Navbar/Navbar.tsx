import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillCollectionFill } from "react-icons/bs";
interface INavbarProps {}

function Navbar(props: INavbarProps) {
  return (
    <nav className="[z-index:35] sticky top-0 left-0 bg-sky-700 rounded-b-md h-12 flex flex-row items-center">
      <span className="text-2xl md:block hidden">Jorge Ruiz Dev</span>

      <div className="w-full max-w-[650px] flex flex-row justify-around">
        <a className="nav-links">
          <span>
            <BsFillCollectionFill />
          </span>
          <span className="">Portfolio</span>
        </a>

        <a className="nav-links">
          <span>
            <IoIosMail />
          </span>
          <span className="">Contact</span>
        </a>

        <a className="nav-links">
          <span>
            <FaLinkedin />
          </span>
          <span className="md:block hidden">LinkedIn</span>
        </a>
        <a className="nav-links">
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
