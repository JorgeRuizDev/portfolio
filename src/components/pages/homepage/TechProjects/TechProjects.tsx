import CardItem from "./CardItem";

interface ITechProjectsProps {}

function TechProjects(props: ITechProjectsProps) {
  return (
    <div className="z-10">
      <CardItem img="/img/technologies/python.png" text="Python" />
    </div>
  );
}

export default TechProjects;
