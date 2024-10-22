import GlobalStyle from "../styles";
import useSWR from "swr";
import useArtPiecesStore from "@/stores/useArtPiecesStore";
import Layout from "@/components/Layout";

const fetcher = (...pieces) => fetch(...pieces).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const setArtPieces = useArtPiecesStore((state) => state.setArtPieces);
  // accesses the global state to get the current list of art pieces.
  // We use the useArtPiecesStore hook to retrieve the artPieces from the shared state.
  const { data, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading art pieces...</div>;

  console.log(data);

  setArtPieces(data);
  // updates the 'artPieces' state in the Zustand store with the newly fetched data.

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} artPieces={data} />
      </Layout>
    </>
  );
}
