import React from "react";


const Layout = ({ children }) => {
  return (
    <div className="bg-[url(/images/bg-image.png)] bg-[#212529] min-h-[100vh] bg-no-repeat bg-cover">
      <div className="z-30 w-full h-full">
        <main className="w-full h-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
