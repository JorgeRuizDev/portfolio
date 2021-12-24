import ProjectHeader from "components/core/ProjectHeader";

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

      <div className="relative grid grid-cols-1 space-x-0 space-y-3 md:grid-cols-2 md:space-x-3 lg:grid-cols-3 lg:space-y-0">
        <div className="flex flex-col space-y-3 items-center justify-center">
          <h3>Frontend</h3>
          <button className="pill bg-sky-400">TailwindCSS</button>
          <button className="pill bg-orange-600">NextJS</button>
        </div>
        <div className="flex flex-col space-y-3">
          <h3>Backend</h3>
        </div>
        <div className="flex flex-col space-y-3">
          <h3>Other</h3>
        </div>
      </div>
    </div>
  );
}
