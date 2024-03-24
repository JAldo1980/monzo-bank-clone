import React from "react";
import Button from "./Button";

const SaveSpendManage = () => {
  return (
    <div>
      <div className="mt-24 p-2 flex flex-col mx-auto container lg">
        <div className="bg-green-300 rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/public/save-img-1.avif"
              alt="save-icon"
              className="h-5/4 w-5/4" // Adjusted size here
            />
          </div>
          <div>
            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">Save</h3>
            <p className="text-lg md:text-xl">
              Earn up to 4.90% (AER/Gross fixed) interest on your savings.
              That’s on a 6-month Fixed Pot with a £500 minimum deposit to open.
              (Fixed means the money will be locked away for 6 months while you
              earn interest on it.)
            </p>
            <p className="text-lg md:text-xl">
              We offer Easy Access Savings too, which let you get your money the
              next working day!
            </p>
            <Button
              className="bg-blue-300 font-bold text-white cursor-pointer w-4/6 mt-6 py-4 px-4 rounded-md hover:bg-blue-400"
              type="button"
              label="Saving with Monzo"
            ></Button>
          </div>
        </div>
        {/* card 2 */}
        <div className="mt-12 bg-white rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">Spend</h3>
            <p className="text-lg md:text-xl">
              Get instant notifications the second you pay. Set budgets for
              things like groceries and going out, and get warnings if you’re
              spending too fast (if you want them).
            </p>
          </div>
          <div>
            <img
              src="/public/spend-img-1.avif"
              alt="spend-icon"
              className="h-5/4 w-5/4" // Adjusted size here
            />
          </div>
        </div>
        {/* card 3 */}
        <div className="mt-12 bg-pink-200 rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/public/manage-img-1.avif"
              alt="manage-icon"
              className="h-5/4 w-5/4" // Adjusted size here
            />
          </div>
          <div>
            <h3 className="mt-6 text-3xl md:text-4xl font-extrabold">Manage</h3>
            <p className="text-lg md:text-xl">
              Pay Direct Debits through Monzo and we’ll tell you if they’re
              higher for the upcoming month. So no nasty surprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveSpendManage;
