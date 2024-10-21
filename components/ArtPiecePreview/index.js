import Image from "next/image";
export default function ArtPiecePreview({ image, name, artist }) {
  return (
    <div>
      <Image src={image} alt={name} width="200" height={"200"} />
      <h3>{name}</h3>
      <p>{artist}</p>
    </div>
  );
}
