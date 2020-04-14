import Layout from "../components/MyLayout";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());
const Index = () => {
  const { data, error } = useSWR("/api/allQuote", fetcher);
  let lists = "";
  if (!data) {
    lists = "Loading";
  } else {
    lists = data.map((list, key) => {
      return <li key={key}>{list.author}</li>;
    });
  }

  return (
    <Layout>
      <p>Index Page</p>
      {lists}
    </Layout>
  );
};

export default Index;
