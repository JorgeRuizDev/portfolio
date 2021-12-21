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
        <div className="slide">
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default Home;
