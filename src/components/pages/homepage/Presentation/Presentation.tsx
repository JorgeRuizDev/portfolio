import React from "react";
import {AiOutlineArrowDown} from "react-icons/ai"
interface IPresentationProps {}

function Presentation(props: IPresentationProps) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center  ">
        <h1 className="subtitle">Hi<span className={"text-emerald-300"}>,</span></h1>
        <h1 className="title">
          I&apos;m <span className="underline decoration-primary-base">Jorge</span>
        </h1>
        <h4 className="z-10 text-center mt-14 text-blue-300">
          <span>And I build software</span>
        </h4>
        <h1 className="z-10 absolute bottom-3 left-3 animate-bounce"><AiOutlineArrowDown/></h1>
      </div>
    </>
  );
}

export default Presentation;
