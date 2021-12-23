import CardItem from "./CardItem";
import CardRow from "./CardRow";

interface ITechProjectsProps {}

function TechProjects(props: ITechProjectsProps) {
  return (
    <div className="z-10">
      <h1>Technologies</h1>
      <CardRow>
        <CardItem img="/img/technologies/python.png" text="Python" />
        <CardItem img="/img/technologies/typescript.png" text="Typescript" />
        <CardItem img="/img/technologies/javascript.png" text="Javascript" />
        <CardItem img="/img/technologies/nextjs.png" text="NextJS" />
        <CardItem img="/img/technologies/react.png" text="ReactJS" />
        <CardItem img="/img/technologies/sql.png" text="SQL DB"/>
        <CardItem img="/img/technologies/nosql.png" text="Document DB" />
        <CardItem img="/img/technologies/tailwind.png" text="TailwindCSS" />
        <CardItem img="/img/technologies/html.png" text="HTML5" />
        <CardItem img="/img/technologies/css.png" text="CSS3" />
        <CardItem img="/img/technologies/firebase.png" text="Google Firebase" />
        
      </CardRow>

      <h1>Projects</h1>
      <CardRow>
        <CardItem img="/img/projects/spotify.png" text="SpotMyFM" href=""/>
        <CardItem img="/img/projects/dms.png" text="Questionnaire Platform" href=""/>
        
      </CardRow>
    </div>
  );
}

export default TechProjects;
