interface IPresentationProps {}

function Presentation(props: IPresentationProps) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="subtitle ">Hi<span className={"text-emerald-300"}>,</span></h1>
        <h1 className="title">
          I&apos;m <span className="underline decoration-sky-600">Jorge</span>
        </h1>
        <h4 className="text-center mt-14 text-blue-300">
          And this is my {" "}
          <span className="">personal webpage</span>
        </h4>
      </div>
    </>
  );
}

export default Presentation;
