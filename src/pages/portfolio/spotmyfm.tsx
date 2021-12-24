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
    </div>
  );
}
