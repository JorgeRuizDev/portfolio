import React, { ReactNode } from "react";
import Image from "next/image";
import { ImLocation } from "react-icons/im";
interface ITimelineItemProps {
  since: ReactNode;
  to?: ReactNode;
  duration?: ReactNode;
  location?: ReactNode;
  img?: { h?: number; w?: number; url: string };
  title: ReactNode;
  description: ReactNode;
}

function TimelineItem({
  since,
  to,
  duration,
  img,
  location,
  title,
  description,
}: ITimelineItemProps) {
  return (
    <div className="flex flex-col items-center md:flex-row md:space-x-2 ">
      <div className="flex items-center justify-center rounded-xl bg-slate-800/[.5] p-4 [max-width:100px] [min-width:100px] [max-height:100px]">
        {img && (
          <img src={img.url} alt="Timeline Image" className={"rounded-xl"} />
        )}
      </div>

      <div className="flex flex-col space-y-2">
        <section className="w-full">
          <span className="text-gray-400">
            {since} {to && "- "} {to}{" "}
            {duration && (
              <>
                {"• "}
                {duration}
              </>
            )}
          </span>
        </section>
        <section>
          {location && (
            <span className="flex flex-row items-center  space-y-4 text-gay-400">
              <ImLocation /> {location}
            </span>
          )}
        </section>
        <section>
          <span className="md:text-xl text-lg">{title}</span>
        </section>
        
        <section>{description}</section>
      </div>
    </div>
  );
}

export default TimelineItem;
