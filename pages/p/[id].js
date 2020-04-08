import { useRouter } from "next/router";
import Link from "next/link";

const Post = (props) => {
  const router = useRouter();
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      /
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <h5>{router.query.id}</h5>
      <h1>Title:{props.show.name}</h1>
      {console.log(props.show)}
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      {props.show.image ? <img src={props.show.image.medium} /> : null}
    </div>
  );
};
Post.getInitialProps = async function (context) {
  const { id } = context.query;
  console.log(context.query);

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  // console.log(`Fetched show: ${show.name}`);

  return { show };
};
export default Post;
