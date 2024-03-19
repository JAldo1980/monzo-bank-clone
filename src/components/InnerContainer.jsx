import React from "react";

const InnerContainer = ({ children }) => {
  return (
    <>
      <div className="w-lg border-box">{children}</div>
    </>
  );
};

export default InnerContainer;
