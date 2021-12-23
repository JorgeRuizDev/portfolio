import { createRef, ReactNode } from "react";
import {AiOutlineArrowLeft} from "react-icons/ai"
interface ICardRowProps {
  children: ReactNode[];
}

function CardRow({ children }: ICardRowProps) {
  const rowRef = createRef<HTMLDivElement>();

  return (
    <div className="flex flex-row justify-around w-full z-0 ">
      <button
        onClick={() => {
          rowRef.current?.scrollTo({
            left: rowRef.current.scrollLeft - 0.8 * rowRef.current?.clientWidth,
          });
        }}
      >
        <h2><AiOutlineArrowLeft/></h2>
      </button>
      <div
        ref={rowRef}
        className="w-full snap-x scroll-smooth snap-mandatory overflow-y-auto  flex flex-row flex-nowrap justify-center gap-x-5"
      >
        {children.map((c, i) => (
          <div key={i} className="snap-center">
            {c}
          </div>
        ))}
      </div>
      <button
        className="rotate-180"
        onClick={() => {
          rowRef.current?.scrollTo({
            left: rowRef.current.scrollLeft + 0.8 * rowRef.current?.clientWidth,
          });
        }}
      >
        <h2><AiOutlineArrowLeft/></h2>
      </button>
    </div>
  );
}

export default CardRow;
