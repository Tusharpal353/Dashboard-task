// import React from "react";

// const RecentActivity = () => {
//   return (
//     <div className="bg-[#1B204A] py-[10px] pr-[10px] pl-[24px] w-[427px] h-[258px] text-white mt-16 rounded-lg">
//       <div>
//         <h1 className="font-medium text-lg h-[48px]">Recent Activity</h1>
//       </div>
//       <div className="pt-2">
//         <p className="font-roboto text-white font-medium text-[10px] opacity-80 h-[12px] py-3">
//           10:40 AM, Fri 10 Sept 2021
//         </p>
//         <h2 className="font-medium text-lg h-[28px] py-2">You posted a new job</h2>
//         <p className="opacity-80 font-roboto font-normal text-sm h-[40px] py-4">
//           Kindly check the requirements and terms of work and make sure
//           everything is right.
//         </p>
//         {/* Two-column layout for the activity count and button */}
//         <div className="grid grid-cols-3 items-center gap-2 mt-4 h-[38px] pr-4">
//           <p className="font-medium text-sm col-span-2">Today you made 12 activities</p>
//           <button className="bg-[#FF5151] text-white py-1 px-4 rounded   whitespace-nowrap">
//             See All Activity
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentActivity;


import React from "react";

const RecentActivity = () => {
  return (
    <div className="bg-[#1B204A] p-4 md:w-[250px] md:h-[319px] lg:h-[258px] lg:w-[427px] text-white rounded-lg flex flex-col justify-between">
      <div>
        <h1 className="font-medium text-lg mb-4">Recent Activity</h1>
        <p className="font-roboto text-white font-medium text-xs opacity-80 mb-2">
          10:40 AM, Fri 10 Sept 2021
        </p>
        <h2 className="font-medium text-lg mb-2">You posted a new job</h2>
        <p className="opacity-80 font-roboto font-normal text-sm mb-4">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-start gap-2">
        <p className="font-medium text-sm">Today you made 12 activities</p>
        <button className="bg-[#FF5151] text-white py-1 px-4 rounded text-sm whitespace-nowrap">
          See All Activity
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;