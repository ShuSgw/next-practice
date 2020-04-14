import Layout from "../components/MyLayout";
<<<<<<< HEAD
import Link from "next/link";

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
  ];
}
const Index = () => {
  return (
    <Layout>
      <p>Blog</p>
      <ul>
        {getPosts().map((post) => (
          <li key={post.id}>
            <Link href="/p/[id]" as={`/p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
=======
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
<<<<<<< HEAD
>>>>>>> 3d09bf74e863ba6122db5ee98fbe0d597034e919
=======
      {lists}
>>>>>>> f20fa06621dca169e8ea0b7beb021ae8431da4da
    </Layout>
  );
};

export default Index;
