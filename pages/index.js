import Layout from "../components/MyLayout";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
const Index = () => {
  const { data, error } = useSWR("/api/randomQuote", fetcher);
  // const author = data.author;
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = "Loading...";
  if (error) quote = "Failed to fetch the quote.";

  return (
    <Layout>
      <p>Index Page</p>
    </Layout>
  );
};

export default Index;
