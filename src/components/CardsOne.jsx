import React from "react";
import Button from "./Button";
import CardData from "./CardData";

const CardsOne = () => {
  return (
    <>
      {CardData.map((data, index) => (
        <div
          key={index}
          className={`bg-${data.background} rounded-3xl p-8 grid gap-6 md:grid md:grid-cols-2 md:items-center`}
        >
          <div>
            <img src={data.image} alt="save-icon" className="h-full" />
          </div>
          <div>
            <h3 className="mt-6 text-xl font-bold">{data.h3}</h3>
            <p className="text-lg">{data.text}</p>
            <Button
              className="bg-blue-300 font-bold text-white cursor-pointer w-4/6 mt-6 py-4 px-4 rounded-md"
              type="button"
              label={data.button}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CardsOne;
