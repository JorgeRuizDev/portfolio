import CardItem from "./CardItem";
import CardRow from "./CardRow";

interface ITechProjectsProps {}

function TechProjects(props: ITechProjectsProps) {
  return (
    <div className="z-10">
      <CardRow>
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/python.png" text="Python" />
      </CardRow>
    </div>
  );
}

export default TechProjects;
