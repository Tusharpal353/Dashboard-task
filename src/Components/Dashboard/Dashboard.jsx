
import React from "react";
import { useSelector } from "react-redux";
import Cards from "./cards/Cards";
import CardTwo from "./cards/CardTwo";
import Announcement from "./Announcement/Announcement";
import RecentActivity from "./RecentActivity/RecentActivity";
import UpcomingSchedule from "./Upcoming Schedule/UpcomingSchedule";

const Dashboard = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`
        transition-all duration-300 
        ${isMenuOpen ? 'ml-[242px] md:ml-[90px] lg:ml-[242px]' : 'ml-0'}
        p-4 md:p-6 lg:p-8
      `}
    >
      <h1 className="font-body font-medium text-2xl mb-6">Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 space-y-6">
          {/* Three Cards in one line */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Cards
              className="bg-[#ffefe7] w-full h-[136px] rounded-lg"
              heading="Available Position"
              number={24}
              description="4 Urgently needed"
              paraColor=""
            />
            <Cards
              className="bg-[#e8f0fb] w-full h-[136px] rounded-lg"
              heading="Jobs Open"
              number={10}
              description="4 active hiring"
              paraColor="text-[#3786F1]"
            />
            <Cards
              className="bg-[#fdebf9] w-full h-[136px] rounded-lg"
              heading="New Employees"
              number={24}
              description="4 Department"
              paraColor="text-[#EE61CF]"
            />
          </div>
          {/* Two CardTwo components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <CardTwo />
            <CardTwo />
          </div>
          {/* Announcement */}
          <div className="w-full">
            <Announcement />
          </div>
        </div>
        {/* RecentActivity and UpcomingSchedule */}
        <div className="lg:w-1/3 space-y-6 md:space-y-0 lg:space-y-6">
          <div className="md:flex md:space-x-6 lg:space-x-0 lg:flex-col">
            <div className="w-full md:w-[250px] lg:w-full mb-6 md:mb-0 lg:mb-6">
              <RecentActivity />
            </div>
            <div className="w-full md:w-[374px] lg:w-full">
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;