// NavItem.js
import React from "react";
import NavData from "./NavData";
import NavDataTwo from "./NavDataTwo";
import Button from "./Button";

const NavItem = () => {
  const handleSignUp = () => {
    console.log("signup clicked and opened!");
  };

  return (
    <div className="w-full text-white font-extrabold px-4 hidden lg:flex justify-between items-center">
      <div className="flex gap-4 ">
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
      <div className="flex gap-4 items-center">
        {NavDataTwo.map((data) => (
          <div
            key={data.id}
            id={data.id}
            className="cursor-pointer hover:text-yellow-300"
          >
            {data.text}
          </div>
        ))}
        <Button
          className="bg-green-400 rounded-md py-4 px-1 cursor-pointer hover:bg-green-500"
          type="button"
          label="Sign up"
          onClick={handleSignUp}
        />
      </div>
    </div>
  );
};

export default NavItem;
