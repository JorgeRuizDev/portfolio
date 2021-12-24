import FullPage from "components/pages/homepage/FullPage";
import Presentation from "components/pages/homepage/Presentation";
import TechProjects from "components/pages/homepage/TechProjects";
import Timeline from "components/pages/homepage/Timeline";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <FullPage>
      <div className="slide">
        <Presentation />
      </div>

      <div className="slide">
        <TechProjects />
      </div>

      <div
        id="about"
        className="slide w-full flex flex-col items-center justify-start gap-y-10"
      >
        <h1 className="relative">About Me</h1>

        <div className="max-w-[500px] text-center space-y-3">
          <p className="relative text-lg">
            Hi! I&apos;m Jorge and I&apos;m a Computer Science Student at
            Burgos&apos; University
          </p>
          <p className="relative text-lg">
            I have a great passion for the fields of{" "}
            <span className="underline-me">web development</span> and{" "} 
            <span className="underline-me">machine learning,</span>{" "}
            and some of my qualities are <span className="underline-me">teamwork</span>
            {" "}and a great{" "}
            <span className="underline-me">attention to detail.</span>
          </p>
          <p className="relative text-lg">
            You can contact me via email{" "}
            <a className="link" href="mailto:contact@jorgeruizdev.com">
              contact@jorgeruizdev.com
            </a>{" "}
            or{" "}
            <a
              className="link"
              href="https://www.linkedin.com/in/jorge-ruiz-g%C3%B3mez-44223b184/"
            >
              Linkedin
            </a>
          </p>
        </div>

        <Timeline />
      </div>
    </FullPage>
  );
};

export default Home;
