import React from "react";

const Hero = () => {
  return (
    <div className="bg-black ">
      <div className="bg-black grid grid-cols-1 gap-4 py-2 mx-auto container lg sm:grid-cols-2  sm:items-center sm:py-8 sm:gap-4 ">
        <div className="flex flex-col gap-4 p-8 ">
          <div>
            <h1 className="text-red-500 text-3xl font-extrabold xl:text-9xl">
              Banking made easy
            </h1>
            <p className="text-white font-bold text-xl mt-4 xl:text-2xl">
              Spend, save and manage your money, all in one place. Open a full
              UK bank account from your phone, for free.
            </p>
          </div>
          <button className="bg-green-600 mt-4 p-2 rounded text-white text-xl font-bold xl:w-6/12 rounded hover:bg-green-700">
            Open a Monzo account
          </button>
          <p className="text-white font-bold mt-4">
            UK residents only Ts &amp; Cs apply.
          </p>
          <img
            src="/public/BBA_Winner_White_300dpi_Best_banking_app.png"
            className="w-8/12 h-auto mt-4 xl:w-6/12 "
            alt="winner-best-banking-app"
          />
        </div>

        <div>
          <img src="/public/Home_Hero.png" className="p-8" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
