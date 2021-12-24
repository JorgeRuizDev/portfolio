import React from "react";
import TimelineItem from "./TimelineItem";

interface ITimelineProps {}

function Timeline(props: ITimelineProps) {
  return (
    <>
      <ul className="z-10 md:p-10 p-2 border-2 border-white/[.5] w-fit timeline-wrap backdrop-blur-lg rounded-xl bg-transparent/[.5] ">
        <h3 className="z-10 text-center mb-10">Timeline</h3>
        <li className="timeline">
          <TimelineItem
            since="2018"
            to="2022"
            duration="4 years"
            location="Burgos"
            description="Computational Branch"
            title="Computer Science at University of Burgos"
            img={{
              url: "/img/timeline/ubu.png",
            }}
          />
        </li>
        <li className="timeline">
          <TimelineItem
            since="2020"
            description=""
            title="Cambridge C1 Advanced – CEFR"
            img={{
              url: "/img/timeline/cae.png",
            }}
          />
        </li>
      </ul>
    </>
  );
}

export default Timeline;
