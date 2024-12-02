import GlobalStyle from "../styles";
import useSWR from "swr";
import useArtPiecesStore from "@/stores/useArtPiecesStore";
import Layout from "@/components/Layout";
import { useEffect } from "react";

const fetcher = (...pieces) => fetch(...pieces).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const setArtPieces = useArtPiecesStore((state) => state.setArtPieces);

  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  useEffect(() => {
    if (data) {
      setArtPieces(data);
    }
  }, [data, setArtPieces]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading art pieces...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} pieces={data} />
      </Layout>
    </>
  );
}
