import React from "react";
import Navbar from "../../components/layout/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="app">
        {props.children}
      </div>
    </>
  );
};

export default Layout;
