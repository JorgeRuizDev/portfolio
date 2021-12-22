import Presentation from "components/pages/homepage/Presentation";
import Timeline from "components/pages/homepage/Timeline";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-screen flex flex-col">
        <div className="slide">
          <Presentation />
        </div>
        <h1 className="z-10 text-center">Timeline</h1>
        <div className="slide flex flex-col items-center justify-start gap-y-52">
          
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default Home;
