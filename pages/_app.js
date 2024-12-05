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
      //   (prevInfo) => {
      //   console.log("Previous Info:", prevInfo);
      //   console.log("Type of Previous Info:", typeof prevInfo);
      //   console.log("Is Previous Info an Array?", Array.isArray(prevInfo));
      //   if (Array.isArray(updatedData)) {
      //     if (
      //       Array.isArray(prevInfo) &&
      //       JSON.stringify(prevInfo) !== JSON.stringify(updatedData)
      //     ) {
      //       return updatedData;
      //     }
      //   } else {
      //     console.error("Updated data is not an array:", updatedData);
      //   }
      //   return prevInfo;
      // });
      // console.log(
      //   "Current artPiecesInfo after setting:",
      //   useArtPiecesStore.getState().artPiecesInfo
      // );
      setLoading(false);
    }
  }, [data, setArtPiecesInfo]);

  // useEffect(() => {
  //   const currentArtPiecesInfo = useArtPiecesStore.getState().artPiecesInfo;
  //   console.log("Current artPiecesInfo after setting:", currentArtPiecesInfo);
  // }, [artPiecesInfo]);

  if (error) {
    console.error("Failed to fetch data:", error);
    return <div>Failed to load</div>;
  }

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading art pieces...</div>;

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
