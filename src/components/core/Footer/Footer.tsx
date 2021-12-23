interface IFooterProps {}

function Footer(props: IFooterProps) {
  return (
    <footer className="flex flex-row blur-2xl z-10 min-h-[100px] bg-primary-base">
      <div className="w-full flex justify-center">
        <p className="z-20 text-white">Handcrafted With NextJS and TailwindCSS</p>
      </div>
    </footer>
  );
}

export default Footer;
