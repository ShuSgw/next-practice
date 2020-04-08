// import Layout from "../components/MyLayout";

// const About = () => {
//   return (
//     <Layout>
//       <p>About Page</p>
//     </Layout>
//   );
// };

// export default About;

import withLayout from "../components/MyLayout";

const Page = () => (
  <div>
    <h1>About</h1>
    <p>This is about page</p>
  </div>
);

export default withLayout(Page);
