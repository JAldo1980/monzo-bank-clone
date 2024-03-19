import React from "react";
import Button from "./Button";

const USP = () => {
  return (
    <div className="">
      <div className="mt-24 flex flex-col gap-20 items-center text-center mx-auto container lg md:grid md:grid-cols-2 lg:grid-cols-3 ">
        <div className="flex flex-col gap-4 items-center text-center">
          <img
            src="https://images.ctfassets.net/ro61k101ee59/4Ah1IQN3qLznNZHzDsMNOW/44fffa72954be7b467e1d944969cf229/Account_Snippet.png?w=600"
            className="h-72"
            alt="usp-image-1"
          />
          <p className="font-bold text-xl">
            Apply for a full UK current account in 15 minutes
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-center">
          <img
            src="https://images.ctfassets.net/ro61k101ee59/5P5nMwllGP8YPgaSoSwVmb/5b8d9433ba95a1a7f0db9be64110fcc0/Pots_Snippet.png?w=600"
            className="h-72"
            alt="usp-image-2"
          />
          <p className="font-bold text-xl">
            Organise your money however you like with Pots
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-center">
          <img
            src="https://images.ctfassets.net/ro61k101ee59/5cYhA6VrqhBct4EU9yVIRh/c5d10427d1676643e794d655d54dbef0/Trends_Snippet.png?w=600"
            className="h-72"
            alt="usp-image-3"
          />
          <p className="font-bold text-xl">
            See your money in a whole new light with Trends
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-4 items-center text-center">
        <Button
          className="bg-green-400 rounded-md py-4 px-12 cursor-pointer hover:bg-green-500 text-white font-extrabold text-xl "
          type="button"
          label="Open a Monzo account"
        />
      </div>
    </div>
  );
};

export default USP;
