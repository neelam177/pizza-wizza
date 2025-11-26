"use client";
import CarouselComponent from "./components/CarouselComponent";
import Card from "./components/Card";
import cardData from "./store/cardData.json";
import React, { useState } from "react";
export default function Home() {
  // console.log(cardData);
  let categories = new Set<string>();
  let foodData: any[] = [];
  let categoryArray;
  const [typeFilter, setTypeFilter] = useState<string | false>(false)
  const handleData = () => {
    cardData.map((data) => {
      return foodData.push(data), categories.add(data.category!);
    });
    console.log(categories);
  };

  handleData();
  categoryArray = [...categories];
  return (
    <>
      <CarouselComponent />
      <div className="max-w-7xl mx-auto px-4">
        <div className="my-6 space-x-4">

          <button
            className={`border-2 py-1 px-3 border-black rounded-full ${!typeFilter && "bg-slate-500"
              }`}
            onClick={() => setTypeFilter(false)}>All</button>
          <button
            className={`border-2 py-1 px-3 border-black rounded-full ${typeFilter === "Veg" && "bg-slate-500"
              }`}
            onClick={() => {
              setTypeFilter("Veg")
            }}><span
              className="font-thin bg-white border-amber-500 border text-green-500 px-1 mr-2 ">⬤</span> Veg</button>
          <button
            className={`border-2 py-1 px-3 border-black rounded-full ${typeFilter === "Non-Veg" && "bg-slate-500"
              }`}
            onClick={() => {
              setTypeFilter("Non-Veg")
            }}><span className="font-thin bg-white border-amber-500 border text-red-500 px-1 mr-2 ">⬤</span>Non Veg</button>
        </div>
        {categoryArray.map((category) => {
          return (
            <React.Fragment key={category}>
              <div

                className="text-4xl mt-10 mb-3 uppercase font-bold"
              >
                {category}
              </div>
              <hr />
              <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {foodData
                    .filter((foodData) => category === foodData.category)
                    .filter((foodData) => typeFilter ? typeFilter === foodData.foodType : foodData)
                    .map((data) => {
                      return <Card key={data.name} foodData={data} />;
                    })}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

