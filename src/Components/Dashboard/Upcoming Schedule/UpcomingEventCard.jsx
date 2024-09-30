// import React from "react";
// import pin_logo from "../../../Utils/Images/Cards/bi_pin-angle-fill.svg";
// import three_dot from "../../../Utils/Images/Cards/carbon_overflow-menu-horizontal.svg";

// const UpcomingCard = () => {
//   return (
//     <div className="flex justify-between items-center p-[12px] pr-[16px] pb-[12px] pl-[16px] bg-[#FAFAFA] border-[#E0E0E0] rounded-md"> 
//       {/* Main container with flex, padding, and background color */}
      
//       {/* Left section with text */}
//       <div className="flex flex-col mr-[95px]"> {/* Tailwind for margin-right */}
//         <h1 className="text-lg font-semibold ">Interview with candidates</h1>
//         <p className="text-sm text-gray-500">5 Minutes ago</p>
//       </div>

//       {/* Right section with icons */}
//       <div className="flex items-center space-x-2"> {/* Flex to align icons horizontally */}
       
//         <img src={three_dot} alt="menu icon" className="w-5 h-5" />
//       </div>
//     </div>
//   );
// };

// export default UpcomingCard;


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