import Image from "next/image";
export default function ArtPiecesPreview({ image, title, artist }) {
  return (
    <div>
      <Image src={image} alt={title} width="200" height={"200"} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
}
