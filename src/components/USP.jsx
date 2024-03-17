import React from "react";
import Button from "./Button";

const USP = () => {
  return (
    <>
      <div>
        <div>
          <img
            src="https://images.ctfassets.net/ro61k101ee59/4Ah1IQN3qLznNZHzDsMNOW/44fffa72954be7b467e1d944969cf229/Account_Snippet.png?w=600"
            alt="usp-image-1"
          />
          <p>Apply for a full UK current account in 15 minutes</p>
        </div>
        <div>
          <img
            src="https://images.ctfassets.net/ro61k101ee59/5P5nMwllGP8YPgaSoSwVmb/5b8d9433ba95a1a7f0db9be64110fcc0/Pots_Snippet.png?w=600"
            alt="usp-image-2"
          />
          <p>Organise your money however you like with Pots</p>
        </div>
        <div>
          <img
            src="https://images.ctfassets.net/ro61k101ee59/5cYhA6VrqhBct4EU9yVIRh/c5d10427d1676643e794d655d54dbef0/Trends_Snippet.png?w=600"
            alt="usp-image-3"
          />
          <p>See your money in a whole new light with Trends</p>
        </div>
      </div>
      <Button
        className="bg-green-400 rounded-md py-4 px-1 cursor-pointer hover:bg-green-500"
        type="button"
        label="Open a Monzo account"
      />
    </>
  );
};

export default USP;
