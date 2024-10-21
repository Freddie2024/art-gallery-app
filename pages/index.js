import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const fetcher = (...pieces) => fetch(...pieces).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}

/* <div>
      <h1>Art Pieces</h1>
      <ul>
        {data.map((artPiece) => (
          <li key={artPiece.slug}>
            <h2>{artPiece.name}</h2>
            <p>Artist: {artPiece.artist}</p>
            <p>Year: {artPiece.year}</p>
            <p>Genre: {artPiece.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}*/
