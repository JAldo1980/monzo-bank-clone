import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-red-500 text-white flex flex-col">
          <h2 className="text-4xl">
            Help us build the kind of bank you want to use
          </h2>
          <p className="text-xl">
            Download the Monzo app on iOS or Android and join more than 9
            million people who've changed the way they bank.
          </p>
          <Button
            className=" bg-blue-300 font-bold text-white cursor-pointer w-4/6 my-6 py-4 px-4 rounded-md hover:bg-blue-400"
            type="button"
            label="Apply for a Monzo Account"
          />
        </div>
        <div className="bg-black text-white">
          <img
            src="/public/images/monzo-logo-on-dark.svg"
            alt="monzo-logo"
            className="h-14 "
          />
          {/* grid 1 */}
          <div>
            <p>About us</p>
            <p>Monzo US</p>
            <p>Blog</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Our social programme</p>
            <p>Accessibility</p>
            <p>Lost your phone and card?</p>
            <p>Investor Information</p>
            <p>Supporting all our customers</p>
            <p>How we can support with money worries</p>
            <p>Helping everyone belong at Monzo</p>
            <p>How we protect you</p>
            <p>Our tone of voice</p>
            <p>Business Accounts</p>
            <p>Modern Slavery Statement</p>
            <p>FAQ</p>
            <p>Terms and Conditions</p>
            <p>FSCS information</p>
            <p>Privacy Notice</p>
            <p>Cookie Notice</p>
            <p>Browser Support Policy</p>
            <p>Mobile Operating System Support Policy</p>
            <p>Information about our Personal Current Account Services</p>
            <p>App and Open Banking Performance</p>
          </div>

          {/* grid 2 */}
          <div>
            <img src="" alt="" />
            <img
              src="/public/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
              className="w-36"
              alt="apple-store-icon"
            />
            <img
              src="/public/images/google-play-badge.png"
              className="w-44"
              alt="google-play-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
