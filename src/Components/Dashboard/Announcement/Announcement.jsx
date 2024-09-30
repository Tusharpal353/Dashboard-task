import React from "react";
import EventCard from "./EventCard";

const Announcement = () => {
  return (
    <div className="border border-[#E0E0E0] rounded-md gap-4 p-4 ">
      <div className="flex justify-between items-center mb-4"> {/* Flex container with spacing and alignment */}
        <h1 className="text-lg font-semibold">Announcement</h1> {/* Announcement aligned to the start */}
        
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
      <EventCard />
      <EventCard />
      <EventCard />
      </div>

      <div className=" flex justify-center font-body font-medium text-[#FF5151] pt-2">
        <p >See All Announcement</p>
      </div>
    
    </div>
  );
};

export default Announcement;
