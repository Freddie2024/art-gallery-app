import Image from "next/image";

export default function Spotlight({ image, artist, dimensions }) {
    console.log("Dimensions:", dimensions);
    return (
        <div>
            <Image
                src={image}
                alt={`Spotlight: ${artist}`}
                layout="responsive"
                width={dimensions.width}
                height={dimensions.height}
            />
            <h2>{artist}</h2>
        </div>
    );
}
