"use client";
import CarouselComponent from "./components/CarouselComponent";
import Card from "./components/Card";
import cardData from "./store/cardData.json";
import React ,{useState} from "react";
export default function Home() {
  // console.log(cardData);
  let categories = new Set<string>();
  let foodData: any[] = [];
  let categoryArray;
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
      <div className="container mx-auto">

        {categoryArray.map((category) => {
          return (
            <>
              <div
                key={category}
                className="text-4xl mt-10 mb-3 uppercase font-bold"
              >
                {category}
              </div>
              <hr />
              <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {foodData
                    .filter((foodData) => category === foodData.category)
                    .map((data) => {
                      return <Card key={data.name} foodData={data} />;
                    })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

