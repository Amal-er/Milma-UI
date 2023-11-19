import React from "react";
import logo from "../../assets/logo.png";
import kutti from "../../assets/kutti.png";
import celebrate from "../../assets/celebrate.png";

const Home = () => {
  return (
    <div>
      <div className="w-full h-full bg-blue-700 backgroundimg px-9">
        <div className=" ">
          <div>
            <img
              className="fixed top-4 left-4 w-12 md:w-32"
              src={logo}
              alt=""
            />
          </div>
          <div className="flex justify-center  items-center">
            <div className=" p-18 ">
              <img src={kutti} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
