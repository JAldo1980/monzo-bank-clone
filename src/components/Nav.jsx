import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isMobileButtonVisible, setIsMobileButtonVisible] = useState(false);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileButtonVisible(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleMobileNav() {
    setIsMobileNavVisible(!isMobileNavVisible);
  }

  return (
    <div className="bg-black">
      <div className="bg-black relative mx-auto container lg">
        <div className="flex items-center p-2 ">
          <img
            src="/monzo-logo-on-dark.svg"
            className="h-14 border-r border-green-900 border-opacity-90"
            alt="monzo logo"
          />
          <NavItem />
        </div>
        {isMobileButtonVisible && (
          <button
            className="text-white font-bold py-2 px-4 rounded absolute top-4 right-2 z-10"
            onClick={handleMobileNav}
          >
            {isMobileNavVisible ? "X" : "Menu"}{" "}
          </button>
        )}
        {isMobileNavVisible && <MobileNav />}
      </div>
    </div>
  );
};

export default Nav;
