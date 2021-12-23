import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
interface IFullPageElementProps {
  children?: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;

  markAsActive: () => void;
}

const variants = {
  open: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
  closed: {
    opacity: 0,
  },
};

const FullPageElement = React.forwardRef<HTMLDivElement, IFullPageElementProps>(
  function Fpe({ children, style, markAsActive }, ref): JSX.Element {
    const [wasOpen, setWasOpen] = useState(false);

    const [inViewTopRef, inViewTop] = useInView({
      threshold: 0,
      rootMargin: "0px",
    });

    useEffect(() => {
      inViewTop && markAsActive();
      inViewTop && setWasOpen(true);
    }, [inViewTop, markAsActive]);

    return (
      <div>
        <div
          className="height[0] relative w-full top-[50vh] bg-red-300"
          ref={inViewTopRef}
        ></div>
        <div ref={ref}>
          {children}
          <div />
        </div>
      </div>
    );
  }
);

export default FullPageElement;
