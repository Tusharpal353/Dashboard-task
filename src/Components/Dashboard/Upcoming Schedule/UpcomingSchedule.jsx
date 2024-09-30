
import React from "react";
import UpcomingCard from "./UpcomingEventCard";

const UpcomingSchedule = () => {
  return (
    <div className="border border-[#E0E0E0] p-4 w-[374px] h-[319px] rounded-md flex flex-col lg:w-[442px]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Upcoming Schedule</h1>
        <div className="flex items-center space-x-2">
          <label htmlFor="announcement-date" className="text-sm">Today</label>
          <input
            type="date"
            id="announcement-date"
            name="announcement-date"
            className="border rounded p-1 text-sm"
          />
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        <p className="font-medium mb-2">Priority</p>
        <UpcomingCard />
        <p className="font-medium mt-4 mb-2">Other</p>
        <UpcomingCard />
        <UpcomingCard />
      </div>

      <div className=" flex justify-center font-body font-medium text-[#FF5151] pt-2">
        <p >Upcoming Schedule</p>
      </div>
    </div>
  );
};

export default UpcomingSchedule;