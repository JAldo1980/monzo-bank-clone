import React from "react";
import NavData from "./NavData";

const MobileNav = () => {
  return (
    <div className="bg-gray-700 absolute top-0 right-0 w-5/6 h-screen lg:hidden">
      <div>
        <img
          src="/public/monzo-logo-on-light.svg"
          className="mt-2 h-14"
          alt="monzo-mobile-menu-logo"
        />
      </div>
      <div>
        <div className="w-full text-white font-extrabold px-4 flex-col justify-between items-center">
          <div className="flex flex-col  gap-4 ">
            {NavData.map((data) => (
              <div
                key={data.id}
                id={data.id}
                className="cursor-pointer hover:text-yellow-300"
              >
                {data.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
