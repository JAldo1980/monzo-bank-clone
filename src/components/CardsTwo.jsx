import React from "react";
import Button from "./Button";

const CardsTwo = () => {
  return (
    <div>
      <div className="mt-24 p-2 flex flex-col mx-auto container lg">
        {/* Card 1 */}
        <div className="bg-blue-100 rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/public/cardImages/credit-img.avif"
              alt="credit-icon"
              className="h-5/4 w-5/4" // Adjusted size here
            />
          </div>
          <div>
            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">
              Credit with a dash of Monzo magic
            </h3>
            <p className="text-lg md:text-xl">
              Use Monzo Flex to get more time to pay for pretty much anything.
              It’s 0% interest when you pay in full on your next payment date or
              in 3 monthly payments. For more wiggle room it’s 29% APR
              representative (variable) when you pay in up to 24 monthly
              payments.
            </p>
            <Button
              className=" bg-blue-300 font-bold text-white cursor-pointer w-4/6 my-6 py-4 px-4 rounded-md hover:bg-blue-400"
              type="button"
              label="Explore Monzo Flex"
            ></Button>
            <p className="text-lg md:text-xl">
              Representative example: 29% APR representative (variable), with an
              assumed credit limit of £1,200 and an annual interest rate of 29%
              (variable). Eligibility criteria and Ts&Cs apply. 18+ year olds
              only. Missed payments can negatively impact credit scores and you
              may lose the interest-free rate on existing plans.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="mt-12 bg-blue-100 rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">
              Credit with a dash of Monzo magic
            </h3>
            <p className="text-lg md:text-xl">
              Use Monzo Flex to get more time to pay for pretty much anything.
              It’s 0% interest when you pay in full on your next payment date or
              in 3 monthly payments. For more wiggle room it’s 29% APR
              representative (variable) when you pay in up to 24 monthly
              payments.
            </p>
            <Button
              className="bg-blue-300 font-bold text-white cursor-pointer w-4/6 my-6 py-4 px-4 rounded-md hover:bg-blue-400"
              type="button"
              label="Explore Monzo Flex"
            ></Button>
            <p className="text-lg md:text-xl">
              Representative example: 29% APR representative (variable), with an
              assumed credit limit of £1,200 and an annual interest rate of 29%
              (variable). Eligibility criteria and Ts&Cs apply. 18+ year olds
              only. Missed payments can negatively impact credit scores and you
              may lose the interest-free rate on existing plans.
            </p>
          </div>
          <div>
            <img
              src="/public/cardImages/borrowing-img.avif"
              alt="borrowing-icon"
              className="h-5/4 w-5/4" // Adjusted size here
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="mt-12 bg-blue-100 rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/public/cardImages/fraud-lock-icons-img.png"
              alt="fraud-icon"
              className="h-5/4 w-5/4" // Adjusted size here
            />
          </div>
          <div>
            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">
              Protect yourself from fraud
            </h3>
            <p className="text-lg md:text-xl">
              Don’t make payments or share your data if something seems unusual
              or unexpected - stop and challenge. Take a look at some common
              scams and learn how they work so you can keep your money safe.
              Fraudsters are clever and use sophisticated tactics, so knowing
              what to look out for can help stop them.
            </p>
            <Button
              className="bg-blue-300 font-bold text-white cursor-pointer w-4/6 my-6 py-4 px-4 rounded-md hover:bg-blue-400"
              type="button"
              label="Protect yourself from fraud"
            ></Button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="mt-12 bg-blue-100 rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">
              Keep your money safe
            </h3>
            <p className="text-lg md:text-xl">
              Cutting-edge technology, FSCS protection and 24/7 support if you
              need us urgently. Just a few of the reasons over 9 million
              customers trust us to keep their money safe.
            </p>
            <Button
              className="my-12 bg-blue-300 font-bold text-white cursor-pointer w-4/6 mt-6 py-4 px-4 rounded-md hover:bg-blue-400"
              type="button"
              label="Find out more"
            ></Button>
          </div>
          <div>
            <img
              src="/public/cardImages/illus_safe@2x-img.png"
              alt="safe-icon"
              className="h-5/4 w-5/4" // Adjusted size here
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsTwo;
