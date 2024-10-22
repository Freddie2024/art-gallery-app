import Image from "next/image";

export default function ArtPiecePreview({ image, name, artist, dimensions }) {
  return (
    <div>
      <Image 
        src={image} 
        alt={name} 
        layout="responsive"
        width={dimensions.width} 
        height={dimensions.height} 
      />
      <h3>{name}</h3>
      <p>{artist}</p>
    </div>
  );
}
