import CardItem from "./CardItem";
import CardRow from "./CardRow";

interface ITechProjectsProps {}

function TechProjects(props: ITechProjectsProps) {
  return (
    <div className="z-10 space-y-10 relative">
      <div className="space-y-4">
        <h3 className="z-10">
          Technologies I{" "}
          <span className="decoration-primary-base underline">
            enjoy working
          </span>{" "}
          with
        </h3>
        <CardRow>
          <CardItem img="/img/technologies/python.png" text="Python" />
          <CardItem img="/img/technologies/typescript.png" text="Typescript" />
          <CardItem img="/img/technologies/javascript.png" text="Javascript" />
          <CardItem img="/img/technologies/nextjs.png" text="NextJS" />
          <CardItem img="/img/technologies/tailwind.png" text="TailwindCSS" />
          <CardItem img="/img/technologies/react.png" text="ReactJS" />
          <CardItem img="/img/technologies/docker.png" text="Docker" />
          <CardItem
            img="/img/technologies/sql.png"
            text="Relational Databases (SQL)"
          />
          <CardItem
            img="/img/technologies/nosql.png"
            text="Document Databases (NOSQL)"
          />
          <CardItem img="/img/technologies/jest.png" text="Jest" />
          <CardItem img="/img/technologies/cypress.svg" text="Cypress" />
          <CardItem img="/img/technologies/html.png" text="HTML5" />
          <CardItem img="/img/technologies/css.png" text="CSS3" />
          <CardItem
            img="/img/technologies/firebase.png"
            text="Google Firebase"
          />
          <CardItem img="/img/technologies/java.png" text="Java" />
        </CardRow>
      </div>

      <div className="space-y-4" id="projects">
        <h3 className="z-10">
          <span className="decoration-primary-base underline">Projects</span>
        </h3>

        <CardRow>
          <CardItem
            img="/img/projects/spotify.png"
            text="SpotMyFM"
            href="/portfolio/spotmyfm"
            tag="Web"
          />
          <CardItem
            img="/img/projects/dms.png"
            text="Questionnaire Platform"
            href="/portfolio/questionnaire"
            tag="Web"
          />
          <CardItem
            img="/img/projects/prototype.svg"
            text="Prototypes"
            tag="Misc"
          />
        </CardRow>
      </div>
    </div>
  );
}

export default TechProjects;
