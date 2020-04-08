import withLayout from "../components/MyLayout";
import { useRouter } from "next/router";

const Post = (props) => {
  const router = useRouter();
  return (
    <div>
      <h1>Title: {router.query.title}</h1>
      <div></div>
    </div>
  );
};

export default withLayout(Post);
