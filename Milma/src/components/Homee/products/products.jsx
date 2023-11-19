import React from "react";

import productData from "../../../Data.json";

const Products = () => {
  return (
    <div>
      <div className="bg-blue-600  flex  items-center  justify-center w-full h-[160px] md:h-[150px]">
        <h1 className="text-white  font-bold text-3xl">Products</h1>
      </div>

      <div className="w-full h-20 flex justify-center py-12">
        <div className="w-[70%] md:w-96   bg-red-900 flex justify-center items-center rounded-full p-5 ">
          <h1 className="text-yellow-300 font-extrabold text-lg">Chocolate</h1>
        </div>
      </div>

      <div className="w-full  flex flex-wrap justify-center mt-8">
        {productData.items.map((item) => (
          <div className="flex gap-5 p-5 rounded">
            <div className=" h-96 flex flex-col justify-center border-[6px] border-red-900 rounded-[25px] p-4">
              <img className="w-80 h-80 rounded" src={item.image} alt="" />
              <div className="flex justify-between">
                <div className="flex flex-col ">
                  <h3 className="font-bold">{item.name}</h3>
                  <span className="font-300 text-gray-300">{item.weight}</span>
                </div>
                <span className="items-end font-bold">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  */}

      <div className="w-full h-20 flex justify-center py-12">
        <div className="w-[70%] md:w-96   bg-yellow-500 flex justify-center items-center rounded-full p-5 ">
          <h1 className="text-amber-900 font-extrabold text-lg">Vannilla</h1>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center mt-8">
        {productData.vanilla.map((item) => (
          <div className="flex gap-5 p-5 rounded">
            <div className=" h-96 flex flex-col justify-center border-[6px] border-yellow-500  rounded-[25px] p-4">
              <img className="w-80 h-80 rounded" src={item.image} alt="" />
              <div className="flex justify-between">
                <div className="flex flex-col ">
                  <h3 className="font-bold"> {item.name}</h3>
                  <span className="font-300 text-gray-300">{item.weight}</span>
                </div>
                <span className="items-end font-bold">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*  */}

      <div className="w-full h-20 flex justify-center py-12">
        <div className="w-[70%] md:w-96   bg-[#A5e313] flex justify-center items-center rounded-full p-5 ">
          <h1 className="text-black font-extrabold text-lg">Pista</h1>
        </div>
      </div>

      <div className="w-full  flex flex-wrap justify-center mt-8">
        {productData.pista.map((item) => (
          <div className="flex gap-5 p-5 rounded">
            <div className=" h-96  flex flex-col justify-center border-[6px] border-[#A5e313] rounded-[25px] p-4">
              <img className="w-80 h-80 rounded" src={item.image} alt="" />
              <div className="flex justify-between">
                <div className="flex flex-col ">
                  <h3 className=" font-bold">{item.name}</h3>
                  <span className="text-gray-300 font-300">{item.weight}</span>
                </div>
                <span className="items-end font-bold">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  */}
    </div>
  );
};

export default Products;
