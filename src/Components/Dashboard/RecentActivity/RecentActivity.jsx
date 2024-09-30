

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
      <div className="flex md:flex-row flex-col justify-between gap-2">
        <p className="font-medium text-sm">Today you made 12 activities</p>
        <div className=" flex justify-end">
        <button className="bg-[#FF5151] text-white py-2 px-4 rounded text-sm whitespace-nowrap lg:gap-x-4">
          See All Activity
        </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;