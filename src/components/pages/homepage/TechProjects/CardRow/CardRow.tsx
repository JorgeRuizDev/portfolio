import React from "react";
import { createRef, ReactNode } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
interface ICardRowProps {
  children: ReactNode[];
}

function CardRow({ children }: ICardRowProps) {
  const rowRef = createRef<HTMLDivElement>();

  const { ref: startRef, inView: startInView } = useInView();
  const { ref: endRef, inView: endInView } = useInView();

  return (
    <div className="flex flex-row justify-around w-full ">
      <button
        className="z-10 btn-transparent"
        disabled={startInView}
        onClick={() => {
          rowRef.current?.scrollTo({
            left: rowRef.current.scrollLeft - 0.8 * rowRef.current?.clientWidth,
          });
        }}
      >
        <h2>
          <AiOutlineArrowLeft />
        </h2>
      </button>

      <div
        ref={rowRef}
        className="w-full z-10 scroll-hidden overflow-y-auto 
        snap-mandatory snap-x scroll-smooth
        flex flex-row flex-nowrap  gap-x-5 items-start"
      >
        <div ref={startRef} className="h-auto [width:1px]" />
        {children.map((c, i) => (
          <div key={i} className="snap-center">
            {c}
          </div>
        ))}
        <div ref={endRef} className="h-auto [width:1px]" />
      </div>
      <button
        className="rotate-180 btn btn-transparent"
        disabled={endInView}
        onClick={() => {
          rowRef.current?.scrollTo({
            left: rowRef.current.scrollLeft + 0.8 * rowRef.current?.clientWidth,
          });
        }}
      >
        <h2>
          <AiOutlineArrowLeft />
        </h2>
      </button>
    </div>
  );
}

export default React.memo(CardRow);
