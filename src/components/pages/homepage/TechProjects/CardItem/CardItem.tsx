import ActiveLink from "components/core/ActiveLink/ActiveLink";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdTouchApp } from "react-icons/md";
interface ICardItemProps {
  href?: string;
  img: string;
  text: string;
  tag?: string;
}

function CardItem({ href, img, text, tag }: ICardItemProps) {
  return (
    <ActiveLink href={href}>
      <a
        className={` min-w-[150px] h-full rounded-xl  p-3 flex flex-col items-center justify-center w-fit transition duration-500 hover:bg-slate-100/[.2] ${
          href && "cursor-pointer"
        }`}
      >
        <div className="relative">
          <Image alt={text} src={img} width="150px" height="150px" />
          {href !== undefined && (
            <span className="text-white text-xl absolute right-0 bottom-0">
              <MdTouchApp />
            </span>
          )}

          {tag && (
            <span className="absolute left-0 bottom-0 bg-primary-base rounded-full  text-sm text-white p-1">
              {tag}
            </span>
          )}
        </div>

        <span className="text-center">{text}</span>
      </a>
    </ActiveLink>
  );
}

export default CardItem;
