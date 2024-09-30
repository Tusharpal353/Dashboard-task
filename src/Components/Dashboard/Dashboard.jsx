import React from "react";
import { useSelector } from "react-redux";
import Cards from "./cards/jobsCard";
import CardTwo from "./cards/EmployeGraphCard";
import Announcement from "./Announcement/Announcement";
import RecentActivity from "./RecentActivity/RecentActivity";
import UpcomingSchedule from "./Upcoming Schedule/UpcomingSchedule";
import JobsCardGroup from "./cards/MainJobsCard";
import MainEmployeGraph from "./cards/MainEmployeGraph";

const Dashboard = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`
        transition-all duration-300 
        ${isMenuOpen ? "ml-[242px] md:ml-[90px] lg:ml-[242px]" : "ml-0"}
        p-4 md:p-6 lg:p-8
      `}
    >
      <h1 className="font-body font-medium text-2xl mb-6">Dashboard</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 space-y-6">
          <div className="flex flex-col">
            {/* Three Cards in one line /
          JOBS CARD */}
            <div>
              <JobsCardGroup />
            </div>
            {/* Two CardTwo components */}
            <div className="w-full justify-around pt-4">
              <MainEmployeGraph />
            </div>
          </div>
          {/* Announcement */}
          <div className="w-full">
            <Announcement />
          </div>
        </div>
        {/* RecentActivity and UpcomingSchedule */}
        <div className="lg:w-1/3 space-y-6 md:space-y-0 lg:space-y-6">
          <div className="md:flex md:space-x-16 lg:space-x-0 lg:flex-col ">
            <div className="w-full md:w-[250px] lg:w-full mb-6 md:mb-0 lg:mb-6">
              <RecentActivity />
            </div>
            <div className="w-full md:w-[374px] lg:w-full over">
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
