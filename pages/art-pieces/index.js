import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

const fetcher = (...pieces) => fetch(...pieces).then((res) => res.json());

export default function ArtPiecesPage({ pieces }) {
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to laod</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
