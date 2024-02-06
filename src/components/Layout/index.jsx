import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>{/* any static compoents in the web */}</header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
