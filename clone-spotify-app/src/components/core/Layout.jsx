import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar"

const Layout = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
