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
    <ul>
      <PostLink title="Hello World" />
    </ul>
  );
};

export default withLayout(Blog);
