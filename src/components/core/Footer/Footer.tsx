interface IFooterProps {}

function Footer(props: IFooterProps) {
  return (
    <footer className="relative flex items-center min-h-[150px] bg-primary-base/[.6]">
      <div className="w-full flex flex-col items-center space-y-4">
        <p className="relative z-30 text-white">
          Handcrafted With NextJS and TailwindCSS ♥
        </p>
        <div className="flex flex-row space-x-6">
          <p>
            <a className="link" href="mailto:contact@jorgeruizdev.com">
              contact@jorgeruizdev.com
            </a>
          </p>
          <p>•</p>
          <p>
            <a className="link" href="https://www.linkedin.com/in/jorge-ruiz-g%C3%B3mez-44223b184/">
              Linkedin
            </a>
          </p>
        </div>
        <p>2022</p>
      </div>
    </footer>
  );
}

export default Footer;
