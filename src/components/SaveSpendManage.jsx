import React from "react";
import Button from "./Button";

const SaveSpendManage = () => {
  return (
    <>
      <div className="mt-24 p-2 flex flex-col">
        <div className="bg-green-300 rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/public/save-img-1.avif"
              alt="save-icon"
              className="h-full"
            />
          </div>
          <div>
            <h3 className="mt-6 text-xl font-bold">Save</h3>
            <p className="text-lg">
              Earn up to 4.90% (AER/Gross fixed) interest on your savings.
              That’s on a 6-month Fixed Pot with a £500 minimum deposit to open.
              (Fixed means the money will be locked away for 6 months while you
              earn interest on it.)
            </p>
            <p className="text-lg">
              We offer Easy Access Savings too, which let you get your money the
              next working day!
            </p>
            <Button
              className="bg-blue-300 font-bold text-white cursor-pointer w-4/6 mt-6 py-4 px-4 rounded-md"
              type="button"
              label="Saving with Monzo"
            ></Button>
          </div>
        </div>
        {/* card 2 */}
        <div className="mt-12 bg-white rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/public/spend-img-1.avif"
              alt="spend-icon"
              className="h-full"
            />
          </div>
          <div>
            <h3 className="mt-6 text-xl font-bold">Spend</h3>
            <p className="text-lg">
              Get instant notifications the second you pay. Set budgets for
              things like groceries and going out, and get warnings if you’re
              spending too fast (if you want them).
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="mt-12 bg-pink-200 rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center">
          <div>
            <img
              src="/public/manage-img-1.avif"
              alt="manage-icon"
              className="h-full"
            />
          </div>
          <div>
            <h3 className="mt-6 text-xl font-bold">Manage</h3>
            <p className="text-lg">
              Pay Direct Debits through Monzo and we’ll tell you if they’re
              higher for the upcoming month. So no nasty surprises.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveSpendManage;
