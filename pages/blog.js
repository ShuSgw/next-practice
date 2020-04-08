// blogs
import withLayout from "../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const DynamicpostLink = (props) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Blog = (props) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>Blog List</h2>
      <ul>
        <PostLink title="Hello World" />
        <PostLink title="Learn Next.js" />
      </ul>
      <h2>Blog List (Dynamic)</h2>
      <ul>
        <DynamicpostLink id="Hello World" />
        <DynamicpostLink id="Learn Next.js" />
      </ul>
      <h2>Fetching data</h2>
      <ul>
        {props.shows.map((show) => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Blog.getInitialProps = async function () {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    shows: data.map((entry) => entry.show),
  };
};

export default Blog;
