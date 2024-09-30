
import React from "react";
import three_dot from "../../../Utils/Images/Cards/carbon_overflow-menu-horizontal.svg";

const UpcomingCard = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-[#FAFAFA] border border-[#E0E0E0] rounded-md mb-2 ">
      <div className="flex flex-col">
        <h2 className="text-sm font-semibold">Interview with candidates</h2>
        <p className="text-xs text-gray-500">5 Minutes ago</p>
      </div>
      <img src={three_dot} alt="menu icon" className="w-4 h-4" />
    </div>
  );
};

export default UpcomingCard;