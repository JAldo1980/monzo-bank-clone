import React from "react";

const SocialProof = () => {
  return (
    <div className="bg-red-50 ">
      <div className="py-12 px-4 bg-red-50 flex flex-col justify-center gap-12 mx-auto container lg">
        <div className=" flex justify-center gap-4">
          <img src="/cass-logo.png" className="h-12" alt="cass-logo" />
          <img
            src="/direct-debit.png"
            className="h-12"
            alt="direct-debit-logo"
          />
          <img src="/fscs.png" className="h-12" alt="fscs-logo" />
        </div>
        <div className="flex flex justify-center items-center gap-4">
          <img
            src="/images/trustpilot.png"
            className="w-36"
            alt="trust-pilot-icon"
          />
          <p>Trustpilot</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="pt-4 font-extrabold text-2xl text-center lg:text-6xl">
            Join more than 9 million people with a Monzo bank account
          </h2>
        </div>
        <div className="flex justify-center gap-4">
          <img
            src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            className="w-36"
            alt="apple-store-icon"
          />
          <img
            src="/google-play-badge.png"
            className="w-44"
            alt="google-play-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
