interface ITimelineProps {}

function Timeline(props: ITimelineProps) {
  return (
    <>
      <ul className="z-10 timeline-wrap backdrop-blur-lg">
        <li className="timeline">
          <p>Hola</p>
        </li>
        <li className="timeline">
          hehe
        </li>
        <li className="timeline">
          hehe
        </li>
      </ul>
    </>
  );
}

export default Timeline;
