import Header from "./Header";

// const Layout = (props) => (
//   <div>
//     <Header />
//     {props.children}
//   </div>
// );

// export default Layout;

const widhLayout = (Page) => {
  return () => {
    return (
      <div>
        {console.log(Page)}
        <Header />
        <Page />
      </div>
    );
  };
};

export default widhLayout;
