import React from "react";
import EventCard from "../Announcement/EventCard";
import UpcomingCard from "./UpcomingEventCard";

const UpcomingSchedule = () => {
  return (
    <div className="border border-[#E0E0E0] gap-4 p-4 w-[427px] h-[424px]  rounded-md">
      <div className="flex justify-between items-center mb-4"> {/* Flex container with spacing and alignment */}
        <h1 className="text-lg font-semibold">Upcoming Schedule</h1> {/* Announcement aligned to the start */}
        
        <div className="flex items-center space-x-2"> {/* Date input aligned to the end */}
          <label htmlFor="announcement-date" className="text-sm">Today</label>
          <input
            type="date"
            id="announcement-date"
            name="announcement-date"
            className="border rounded p-1"
          />
        </div>
      </div>

      {/* Render EventCard components */}
      <div className="grid gap-y-2">
        <p>
            Priority
        </p>
     <UpcomingCard/>
      <p>other</p>
     <UpcomingCard/>
     <UpcomingCard/>
      </div>
    
    </div>
  );
};

export default UpcomingSchedule;
