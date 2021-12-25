import ActiveLink from "components/core/ActiveLink/ActiveLink";
import Feature from "components/core/Feature";
import ProjectHeader from "components/core/ProjectHeader";
import React from "react";

export default function Questionnaire() {
  return (
    <div>
      <ProjectHeader
        title="Teacher Evaluation Platform"
        source={{
          title: "Check on Github!",
          link: "https://github.com/JorgeRuizDev/practica-dms-2021-2022",
        }}
        description={
          <div className="text-lg space-y-2">
            <p>
              A multi-service evaluation web platform built with three Flask
              Docker Containers
            </p>
            <p className="text-xl">Teacher</p>
            <ul className="ml-6 list-disc">
              <li>Create Questions for your students</li>
              <li>Check an individual student progress</li>
              <li>Check the stats for an specific question</li>
            </ul>
            <p className="text-xl">Student</p>
            <ul className="ml-6 list-disc">
              <li>Check your stats</li>
              <li>Answer your questions one by one or with a question list</li>
              <li>Review your answered questions</li>
            </ul>
          </div>
        }
      >
        <img
          src="https://camo.githubusercontent.com/6238c2eba72536525dbcdfad80b24b5bf7592a2adaea661f3010980f87d734fc/68747470733a2f2f692e696d6775722e636f6d2f664e74737551442e676966"
          className="rounded-lg"
        />
      </ProjectHeader>

      <hr />

      <div className="relative grid grid-cols-1 space-x-0 space-y-3 sm:grid-cols-2 sm:space-x-3 md:grid-cols-3 md:space-y-0">
        <div className="flex flex-col space-y-3 items-center justify-center">
          <h3>Frontend</h3>
          <button className="pill bg-green-700">TailwindCSS</button>
          <button className="pill bg-orange-600">Flask</button>
          <button className="pill bg-sky-400">Docker</button>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <h3>Backend</h3>
          <button className="pill bg-lime-600">Flask</button>
          <button className="pill bg-green-600">SQLAlchemy</button>
          <button className="pill bg-orange-600">SQLite</button>
          <button className="pill bg-sky-400">Docker</button>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <h3>Auth Server</h3>
          <button className="pill bg-rose-700">JWT</button>
          <button className="pill bg-orange-600">Role System</button>
          <button className="pill bg-sky-400">Docker</button>
        </div>
      </div>
      <div className="space-y-10">
        <Feature
          title="Three Different Services"
          description={
            <div className="text-lg">
              <p>
                The platform is built with three different interconnected docker
                containers
              </p>
              <ul className="ml-6 list-disc">
                <li>Auth Service</li>
                <li>Frontend Service</li>
                <li>Backend Service</li>
              </ul>
              <p>This services are secured with JSON Signed Tokens</p>
            </div>
          }
        >
          <img
            src="https://camo.githubusercontent.com/2b5da52d124ea0a2a27740ad232d6c67e07adc27d8e08874f8b1d1672186c3ed/68747470733a2f2f692e696d6775722e636f6d2f5544696b6655372e706e67"
            alt="Achitecture"
            className="rounded-xl"
          ></img>
        </Feature>

        <Feature
          title="Extensive Architectural Details"
          description={
            <div className="flex flex-col items-start space-y-3">
              <p className="text-lg">
                The platform has been developed with different design patterns
                and strategies.
              </p>
              <ActiveLink
                href={
                  "https://github.com/irg1008/practica-dms-2021-2022#documentation"
                }
              >
                <a className="btn btn-primary">Check The Design</a>
              </ActiveLink>
            </div>
          }
        >
          <img
            alt="Desing Example"
            src="https://camo.githubusercontent.com/cf8c931437f21cbb67e7243863663362231a76213a10694ab5275d10a79477d1/68747470733a2f2f692e696d6775722e636f6d2f6d617833594b662e706e67"
          ></img>
        </Feature>
      </div>
    </div>
  );
}
