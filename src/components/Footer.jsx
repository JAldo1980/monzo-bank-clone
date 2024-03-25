import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      {/* top div */}
      <div className="relative z-10 md:px-24">
        <div className="mx-4 p-8 bg-red-500 text-white flex flex-col justify-center items-center text-center rounded-lg">
          <h2 className="pt-8 text-6xl">
            Help us build the kind of bank you want to use
          </h2>
          <p className="text-xl mt-8">
            Download the Monzo app on iOS or Android and join more than 9
            million people who've changed the way they bank.
          </p>
          <Button
            className="bg-blue-300 font-bold text-white cursor-pointer w-4/6 my-6 py-4 px-4 rounded-md hover:bg-blue-400 md:w-2/6"
            type="button"
            label="Apply for a Monzo Account"
          />
        </div>
      </div>

      {/* mid div */}
      <div
        className="pt-32 pb-12 px-2 bg-black text-white md:grid-cols-3 relative z-0"
        style={{ marginTop: "-4rem" }}
      >
        {/* grid 1 */}
        <img
          src="/monzo-logo-on-dark.svg"
          className="h-14 "
          alt="monzo-logo-footer"
        />
        <div className="px-4">
          <div className="py-4 grid grid-cols-2 md:grid-cols-3 grid">
            <p className="pt-4 hover:text-yellow-300">About us</p>
            <p className="pt-4 hover:text-yellow-300">Monzo US</p>
            <p className="pt-4 hover:text-yellow-300">Blog</p>
            <p className="pt-4 hover:text-yellow-300">Press</p>
            <p className="pt-4 hover:text-yellow-300">Careers</p>
            <p className="pt-4 hover:text-yellow-300">Our social programme</p>
            <p className="pt-4 hover:text-yellow-300">Accessibility</p>
            <p className="pt-4 hover:text-yellow-300">
              Lost your phone and card?
            </p>
            <p className="pt-4 hover:text-yellow-300">Investor Information</p>
            <p className="pt-4 hover:text-yellow-300">
              Supporting all our customers
            </p>
            <p className="pt-4 hover:text-yellow-300">
              How we can support with money worries
            </p>
            <p className="pt-4 hover:text-yellow-300">
              Helping everyone belong at Monzo
            </p>
            <p className="pt-4 hover:text-yellow-300">How we protect you</p>
            <p className="pt-4 hover:text-yellow-300">Our tone of voice</p>
            <p className="pt-4 hover:text-yellow-300">Business Accounts</p>
            <p className="pt-4 hover:text-yellow-300">
              Modern Slavery Statement
            </p>
            <p className="pt-4 hover:text-yellow-300">FAQ</p>
            <p className="pt-4 hover:text-yellow-300">Terms and Conditions</p>
            <p className="pt-4 hover:text-yellow-300">FSCS information</p>
            <p className="pt-4 hover:text-yellow-300">Privacy Notice</p>
            <p className="pt-4 hover:text-yellow-300">Cookie Notice</p>
            <p className="pt-4 hover:text-yellow-300">Browser Support Policy</p>
            <p className="pt-4 hover:text-yellow-300">
              Mobile Operating System Support Policy
            </p>
            <p className="pt-4 hover:text-yellow-300">
              Information about our Personal Current Account Services
            </p>
            <p className="pt-4">App and Open Banking Performance</p>
          </div>
        </div>

        {/* grid 2 */}
        <div className="flex justify-center gap-4">
          <img
            src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
            className="w-36 cursor-pointer"
            alt="apple-store-icon"
          />
          <img
            src="/google-play-badge.png"
            className="w-44 cursor-pointer"
            alt="google-play-icon"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
