import Presentation from "components/pages/homepage/Presentation";
import TechProjects from "components/pages/homepage/TechProjects";
import Timeline from "components/pages/homepage/Timeline";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div>
      <div className="max-w-screen flex flex-col">
        <div className="slide">
          <Presentation />
        </div>
        
        <div>
          <TechProjects />
        </div>

        <div className="slide w-full flex flex-col items-center justify-start md:gap-y-28 gap-y-10 xl:gap-y-52">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Home;
