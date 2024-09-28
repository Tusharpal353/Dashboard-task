import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import CardTwo from "./CardTwo";
import Announcement from "./Announcement/Announcement";
import RecentActivity from "./RecentActivity/RecentActivity";
import UpcomingSchedule from "./Upcoming Schedule/UpcomingSchedule";

const Dashboard = () => {
  // Get the sidebar state from Redux
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${
        isMenuOpen ? "ml-64" : "ml-0"
      } h-screen w-full transition-all duration-300 overflow-hidden grid grid-flow-col space-x-4 col-span-3`}
    >
      <div className=" cards-with-3cards pl-8 col-span-0">
        <h1 className="font-body font-medium text-2xl w-[640px] h-[48px] border-[#E0E0E0]">
          Dashboard
        </h1>

        {/* Reduce the gap between the Cards components */}
        <div className="grid grid-flow-col grid-cols-3 py-4 gap-1 justify-between"> {/* Adjusted the gap here */}
          <Cards
            className="bg-[#ffefe7] w-[204px] h-[136px] rounded-lg col-span-1"
            heading="Available Position"
            number={24}
            description="4 Urgently needed"
            paraColor="text-red-800" // Change number color
          />
          <Cards
            className="bg-[#e8f0fb] p-10 w-[204px] h-[136px] rounded-lg col-span-1"
            heading="Jobs Open"
            number={10}
            description="4 active hiring"
            paraColor="text-[#3786F1]" // Change number color
          />
          <Cards
            className="bg-[#fdebf9] p-10 w-[204px] h-[136px] rounded-lg col-span-1  "
            heading="New Employees"
            number={24}
            description="4 Department"
            paraColor="text-[#EE61CF]" // Change number color
          />
        </div>

        <div className="grid grid-flow-col grid-cols-2">
          <CardTwo className="grid-col-1" />
          <CardTwo className="grid-col-1" />
        </div>
        <div className="py-4 ">
          <Announcement />
        </div>
      </div>

      {/* Right section */}
      <div className="col-span-1">
        <RecentActivity />
        <div className="py-4">

        <UpcomingSchedule/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

