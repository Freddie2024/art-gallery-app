import GlobalStyle from "../styles";
import useSWR from "swr";
import useArtPiecesStore, {
  useLoadFavorites,
} from "@/stores/useArtPiecesStore";
import Layout from "@/components/Layout";
import { useEffect } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  useLoadFavorites();

  const setArtPiecesInfo = useArtPiecesStore((state) => state.setArtPiecesInfo);

  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  useEffect(() => {
    if (data) {
      setArtPiecesInfo(data);
    }
  }, [data, setArtPiecesInfo]);

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
