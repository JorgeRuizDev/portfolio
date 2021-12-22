import Image from "next/image"

interface ICardItemProps {
  href?: string;
  img: string;
  text: string;
}

function CardItem({ href, img, text }: ICardItemProps) {
  return (
    <a
      href={href}
      className={`rounded-xl border border-white/[.5] p-3 flex flex-col items-center justify-center w-fit transition duration-500 hover:bg-slate-100/[.2] ${
        href && "cursor-pointer"
      }`}
    >
      <Image alt={text} src={img} width="150px" height="150px" />
      <span className="text-center">{text}</span>
    </a>
  );
}

export default CardItem;
