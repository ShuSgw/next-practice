// import Layout from "../components/MyLayout";

// const Index = () => {
//   return (
//     <Layout>
//       <p>Index Page</p>
//     </Layout>
//   );
// };

// export default Index;

import withLayout from "../components/MyLayout";

const Page = () => {
  return <p>This is Index</p>;
};

export default withLayout(Page);
