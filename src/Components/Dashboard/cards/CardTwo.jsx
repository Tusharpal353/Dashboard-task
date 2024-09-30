import React from "react";
import graph_logo from "../../../Utils/Images/Cards/Group 4.svg";
const CardTwo = ({ heading, number, description, className }) => {
  return (
    <div className=" w-[332px] h-[190px] border border-[#E0E0E0] rounded-md pl-4 pt-4 p-[20px]  ">
      <h1 className="text-lg font-medium w-[166px] leading-7 h-[28px] gap: 0px opacity: 0px ">
        Total Employees{" "}
      </h1>

      <div className="grid grid-flow-col grid-cols-2">
        <div className="gap-[32px] grid grid-flow-col  col-span-1">
          <div>
          <h2 className="text-5xl font-medium p-2">216</h2>
          <div className="py-4">
          <p className="text-xs font-normal p-1 ">120 Men</p>
          <p className="text-xs font-normal p-1">69 Men </p>
          </div>

          </div>
       
        </div>
        <div className="col-span-1">
          <img src={graph_logo} alt="" />
          
            <p className=" bg-[#ffefe7]  m-2 rounded-md  text-xs text-center">+2% Past month  </p>
            
        </div>

      </div>
    </div>
  );
};

export default CardTwo;
