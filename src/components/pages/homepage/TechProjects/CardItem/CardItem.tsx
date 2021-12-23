import Image from "next/image";
import React from "react";
import { MdTouchApp } from "react-icons/md";
interface ICardItemProps {
  href?: string;
  img: string;
  text: string;
}

function CardItem({ href, img, text }: ICardItemProps) {
  return (
    <a
      href={href}
      className={` min-w-[150px] h-full rounded-xl  p-3 flex flex-col items-center justify-center w-fit transition duration-500 hover:bg-slate-100/[.2] ${
        href && "cursor-pointer"
      }`}
    >
      <div className="relative">
        <img alt={text} src={img} width="150px" height="150px" />
        {href !== undefined && (
          <span className="text-white text-xl absolute right-0 bottom-0">
            <MdTouchApp />
          </span>
        )}
      </div>

      <span className="text-center">{text}</span>
    </a>
  );
}

export default CardItem;
