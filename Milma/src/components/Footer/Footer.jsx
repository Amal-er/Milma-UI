import React from "react";
import logo from "../../assets/logo.png";
import footer from "../../assets/footer.png";

const Footer = () => {
  return (
    <div className="w-full  bg-blue-600 mt-8 flex justify-between px-10 py-10 lg:py-40 lg:px-28 items-center ">
      <div>
        <img className=" top-4  w-12 lg:w-32 " src={logo} alt="" />
      </div>
      <div>
        <img className="w-32 lg:w-72" src={footer} alt="" />
      </div>
    </div>
  );
};

export default Footer;
