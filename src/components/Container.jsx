import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="w-full border-box">{children}</div>
    </>
  );
};

export default Container;
