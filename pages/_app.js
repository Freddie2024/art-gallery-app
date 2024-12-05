import GlobalStyle from "../styles";
import useSWR from "swr";
import useArtPiecesStore from "@/stores/useArtPiecesStore";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const setArtPiecesInfo = useArtPiecesStore((state) => state.setArtPiecesInfo);
  const artPiecesInfo = useArtPiecesStore((state) => state.artPiecesInfo);
  const [loading, setLoading] = useState(true);

  "Art Pieces Info before passing:", artPiecesInfo;

  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const storedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

      const updatedData = data.map((piece) => ({
        ...piece,
        isFavorite: storedFavorites.includes(piece.slug),
        comments: [],
      }));

      setArtPiecesInfo(updatedData);

      setLoading(false);
    }
  }, [data, setArtPiecesInfo]);

  if (error) {
    console.error("Failed to fetch data:", error);
    return <div>Failed to load</div>;
  }

  if (loading) {
    return <div>Loading art pieces...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} pieces={artPiecesInfo} />
      </Layout>
    </>
  );
}
