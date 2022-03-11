import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="max-w-[1728px] w-full relative center px-8 xl:px-32">
      {children}
    </div>
  );
};
