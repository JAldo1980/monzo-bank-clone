import React from "react";
import Button from "./Button";

const CardsOne = () => {
  return (
    <div>
      <div className="mt-24 p-2 flex flex-col mx-auto container lg">
        <div className="bg-green-300 rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">
              Online banking that makes a statement
            </h3>
            <p className="text-lg md:text-xl">
              Turn heads with our white metal card, made from steel. Enjoy peace
              of mind with phone and travel insurance, interest and much more.
              Monzo Premium is £15 per month • 6 month minimum • Must be aged
              18-69 • TsCs apply
            </p>

            <Button
              className="bg-blue-300 font-bold text-white cursor-pointer w-4/6 mt-6 py-4 px-4 rounded-md hover:bg-blue-400"
              type="button"
              label="Explore Monzo Premium"
            ></Button>
          </div>
          <div>
            <img
              src="/public/cardImages/premium-img-1.avif"
              alt="save-icon"
              className="h-5/4 w-5/4" // Adjusted size here
            />
          </div>
        </div>
        {/* card 2 */}
        <div className="mt-12 bg-white rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/public/cardImages/plus-img.avif"
              alt="spend-icon"
              className="h-5/4 w-5/4" // Adjusted size here
            />
          </div>
          <div>
            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">
              Put money in your hands
            </h3>
            <p className="text-lg md:text-xl">
              Full financial visibility, with your other bank accounts and
              credit cards all in one place. Get interest on your money,
              personalised budgeting and much more. Monzo Plus is £5 per month •
              3 month minimum • Must be aged 18+ • TsCs apply",
            </p>
            <Button
              className="bg-blue-300 font-bold text-white cursor-pointer w-4/6 mt-6 py-4 px-4 rounded-md hover:bg-blue-400"
              type="button"
              label="Explore Monzo Plus"
            ></Button>
          </div>
        </div>
        {/* card 3 */}
        <div className="mt-12 bg-pink-200 rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">
              Using Monzo abroad
            </h3>
            <p className="text-lg md:text-xl">
              Use Monzo anywhere in the world that accepts Mastercard. We don't
              charge any fees for paying abroad and we pass Mastercard's
              exchange ratedirectly onto you, without sneaky fees or extra
              charges.
            </p>
            <Button
              className="bg-blue-300 font-bold text-white cursor-pointer w-4/6 mt-6 py-4 px-4 rounded-md hover:bg-blue-400"
              type="button"
              label="Travelling with Monzo"
            ></Button>
          </div>
          <div>
            <img
              src="/public/cardImages/travelling-img.avif"
              alt="manage-icon"
              className="h-5/4 w-5/4" // Adjusted size here
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsOne;
