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

const Page = () => <p>This is the about page</p>;

export default withLayout(Page);
