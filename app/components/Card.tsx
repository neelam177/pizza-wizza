"use client";
import { useState } from "react";
import Image from "next/image";
type FoodDataType = {
  name: string;
  category: string;
  description?: string;
  image?: string;
  price: { [key: string]: number }; // 👈 this line fixes your error
};

type CardProps = {
  foodData: FoodDataType;
};

const Card = ({ foodData }: CardProps) => {
  // const priceOption = ["regular", "medium", "large"];
  const data = foodData;
  const priceOption = data.price ? Object.keys(data.price) : [];
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOption[0]);
  const handleQty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQty(Number(e.target.value));
  };
  const handleSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
  };
  const handleAddToCart = () => {
    
  };
  let finalPrice = qty * data.price[size];
  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-black  border-gradient overflow-hidden text-white border-white">
        <div className="relative w-full h-80">
          <Image
            src="https://www.dominos.co.in/files/items/Farmhouse.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="font-bold mb-2 text-xl uppercase text-white">
            {data.name}
          </div>
          <p className="short_description  text-base">{data.description}</p>
        </div>
        <div className="flex px-4 justify-between">
          <select
            className="
            p-1
            text-white
            hover:font-bold
            font-semibold
            cursor-pointer
            border
            rounded"
            onChange={handleQty}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="p-1 hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border  border-gray-400 dark:border-gray-400 rounded
          "
            onChange={handleSize}
          >
            {priceOption.map((options) => {
              return (
                <option className="" value={options}>
                  {options}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex p-4 font-bold  justify-between">
          <button
            className="border dark:border-gray-400 border-white rounded p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <p className="p-2 text-xl">₹{finalPrice}/-</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
