import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  return (
    <div>
      <h1>Hello {data.name}</h1>
    </div>
  );
}
