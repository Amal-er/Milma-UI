import React from "react";
import shake from "../../../assets/milkshake.png";

const Shake = () => {
  return (
    <div className="w-full h-[520px] flex flex-col md:flex md:flex-row ">
      <div className="md:w-[40%]  flex justify-center p-10">
        <img className="w-[2/3]  h-[2/3]" src={shake} alt="" />
      </div>
      <div className="md:w-[60%]  h-full px-8 lg:px-8 flex flex-col  justify-center  items-center  ">
        <p className="lg:w-[600px] lg:leading-10 font-thin lg:text-[20px]   ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Illum possimus cum, ea fugit <br />
          dolorum a! Alias molestias pariatur quas
          <br /> ab modi incidunt sapiente dolore.
          <br /> Sed sequi maxime illo minus nisi?
        </p>
      </div>
    </div>
  );
};

export default Shake;
