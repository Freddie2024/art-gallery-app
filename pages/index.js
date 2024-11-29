import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  const randomArtPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h1>Spotlight</h1>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
    </>
  );
}
