// blogs
import withLayout from "../components/MyLayout";
import Link from "next/link";

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Blog = () => {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        <PostLink title="Hello World" />
        <PostLink title="Learn Next.js" />
      </ul>
    </div>
  );
};

export default withLayout(Blog);
