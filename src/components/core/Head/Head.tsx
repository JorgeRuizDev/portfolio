import NextHead from "next/head";

interface IHeadProps {
  title?: string;
  subtitle?: string;
}

export default function Head({
  title = "Jorge Ruiz Gómez",
  subtitle,
}: IHeadProps) {
  return (
    <>
      <NextHead>
        <title>
          {subtitle == null ? "" : `${subtitle}  - `}{title}
        </title>
        <meta name="description" content="Jorge Ruiz Gómez Personal Webpage" />

        <meta property="og:title" content="Jorge Ruiz Gómez Personal Webpage" />
        <meta
          property="og:description"
          content="jorgeruizdev.com is my personal portfolio, feel free to explore some of my work and contact me if you have an interesting inquire!"
        />
        <meta name="author" content="Jorge Ruiz Gómez" />

        <meta property="og:image" content="/img/preview.png" />
        <meta property="og:image:width" content="978" />
        <meta property="og:image:height" content="549" />
        <meta
          name="google-site-verification"
          content="-RJWFeQ1me1m_Il5D7IREO1To0OrutTPVKz50ZnUo8Y"
        />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
    </>
  );
}
