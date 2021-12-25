import Feature from "components/core/Feature";
import ProjectHeader from "components/core/ProjectHeader";
import React from "react";

export default function SpotMyFM() {
  return (
    <div>
      <ProjectHeader
        title="SpotMyFM"
        web={{
          title: "Visit Now!",
          link: "https://myspotifyfm.jorgeruizdev.com",
        }}
        source={{
          title: "Check on Github!",
          link: "https://github.com/JorgeRuizDev/SpotMyFM",
        }}
        description={
          <div className="text-lg">
            <p>
              Explore, organize and tag your Spotify music and album library!
            </p>
            <ul className="ml-6 list-disc">
              <li>Tag your albums</li>
              <li>Create playlists from filter selections</li>
              <li>Find new music</li>
              <li>Explore any track details</li>
            </ul>
          </div>
        }
      >
        <img src="/demo/spotmyfm/intro.png" className="rounded-lg" />
      </ProjectHeader>

      <hr />

      <div className="relative grid grid-cols-1 space-x-0 space-y-3 sm:grid-cols-2 sm:space-x-3 md:grid-cols-3 md:space-y-0">
        <div className="flex flex-col space-y-3 items-center justify-center">
          <h3>Frontend</h3>
          <button className="pill bg-sky-400">TailwindCSS</button>
          <button className="pill bg-orange-600">NextJS</button>
          <button className="pill bg-green-600">Typescript</button>
          <button className="pill bg-red-500">DexieDB</button>
          <button className="pill bg-gray-600">Zustand</button>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <h3>Backend</h3>
          <button className="pill bg-lime-600">NextJS</button>
          <button className="pill bg-green-600">JWT</button>
          <button className="pill bg-orange-600">OpenAPI</button>
          <button className="pill bg-yellow-500">DynamoDB (AWS)</button>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <h3>Other</h3>
          <button className="pill bg-rose-700">Cypress</button>
          <button className="pill bg-orange-600">Jest</button>
          <button className="pill bg-green-600">Typescript</button>
          <button className="pill bg-teal-900">TensorFlow</button>
        </div>
      </div>
      <div className="space-y-10">
        <Feature
          title="Mobile First"
          description={
            <p className="text-lg">
              SpotMyFM provides a great experience in mobile phones
            </p>
          }
        >
          <video
            src="/demo/spotmyfm/responsive.mp4"
            autoPlay={true}
            loop={true}
            muted={true}
            className="rounded-xl"
          ></video>
        </Feature>

        <Feature
          title="Dark Theme"
          description={
            <p className="text-lg">
              SpotMyFM has a persistent theme selection.
            </p>
          }
        >
          <video
            src="/demo/spotmyfm/dark_mode.mp4"
            loop={true}
            autoPlay={true}
            muted={true}
            className="rounded-xl"
          ></video>
        </Feature>

        <Feature
          title="Filter your library"
          description={
            <p className="text-lg">
              SpotMyFM includes multiple filters to check
            </p>
          }
        >
          <div className="space-y-2">
            <video
              src="/demo/spotmyfm/filter_date.mp4"
              autoPlay={true}
              muted={true}
              loop={true}
              className="rounded-xl"
            ></video>
            <video
              src="/demo/spotmyfm/filter_genre.mp4"
              autoPlay={true}
              loop={true}
              muted={true}
              className="rounded-xl"
            ></video>
          </div>
        </Feature>

        <Feature
          title="Create Playlists"
          description={
            <p className="text-lg">
              Create of Replaces an existing playlist with your track selection
              / filtered results.
            </p>
          }
        >
          <video
            src="/demo/spotmyfm/create_playlist.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
            className="rounded-xl"
          ></video>
        </Feature>
      </div>
    </div>
  );
}
