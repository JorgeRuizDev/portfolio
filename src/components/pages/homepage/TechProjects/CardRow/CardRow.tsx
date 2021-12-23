import { createRef, ReactNode } from "react";

interface ICardRowProps {
  children: ReactNode[];
}

function CardRow({ children }: ICardRowProps) {
  const rowRef = createRef<HTMLDivElement>();

  return (
    <div className="flex flex-row space-x-4">
      <button
        onClick={() => {
          rowRef.current?.scrollTo({
            left: rowRef.current.scrollLeft - 0.8 * rowRef.current?.clientWidth,
          });
        }}
      >
        left
      </button>
      <div
        ref={rowRef}
        className="snap-x scroll-smooth snap-mandatory overflow-y-hidden  flex flex-row flex-nowrap space-x-4"
      >
        {children.map((c, i) => (
          <div key={i} className="snap-center">
            {c}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          rowRef.current?.scrollTo({
            left: rowRef.current.scrollLeft + 0.8 * rowRef.current?.clientWidth,
          });
        }}
      >
        right
      </button>
    </div>
  );
}

export default CardRow;
