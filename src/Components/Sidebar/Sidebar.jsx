  import React from "react";
  import logo from "../../Utils/Images/Vasitum Logo (1) 1.svg";
  import Dashboard_logo from "../../Utils/Images/Sidebar/ic_dashboard copy.svg";
  import Recruitment_logo from "../../Utils/Images/Sidebar/ic_recruitment.svg";
  import Schedule_logo from "../../Utils/Images/Sidebar/ic_calendar.svg";
  import Employee_logo from "../../Utils/Images/Sidebar/ic_employee.svg";
  import Department_logo from "../../Utils/Images/Sidebar/ic_department.svg";

  import support_logo from "../../Utils/Images/ic_support.svg";
  import setting_logo from "../../Utils/Images/ic_settings.svg";
  import { useSelector } from "react-redux";

  const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    // If menu is closed, don't render the sidebar
    if (!isMenuOpen) return null;

    return (
      <div className="h-full w-[242px] fixed top-0 left-0 bg-gray-100 border-r shadow-lg overflow-y-auto">
        {/* LOGO */}
        <div className="p-8">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* MAIN MENU */}
        <div className="px-8">
          <h1 className="text-[#686868] mb-4 text-xs text-left">MAIN MENU</h1>
          <ul className="space-y-4 text-[#686868] font-medium text-base">
            <li className="flex items-center gap-4">
              <img src={Dashboard_logo} alt="Dashboard" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center gap-4">
              <img src={Recruitment_logo} alt="Recruitment" />
              <span>Recruitment</span>
            </li>
            <li className="flex items-center gap-4">
              <img src={Schedule_logo} alt="Schedule" />
              <span>Schedule</span>
            </li>
            <li className="flex items-center gap-4">
              <img src={Employee_logo} alt="Employee" />
              <span>Employee</span>
            </li>
            <li className="flex items-center gap-4">
              <img src={Department_logo} alt="Department" />
              <span>Department</span>
            </li>
          </ul>
        </div>

        {/* OTHER MENU */}
        <div className="px-8 mt-8">
          <h1 className="text-[#686868] mb-4 text-xs text-left">OTHER</h1>
          <ul className="space-y-4 text-[#686868] font-medium text-base">
            <li className="flex items-center gap-4">
              <img src={support_logo} alt="support" />
              <span>Support</span>
            </li>
            <li className="flex items-center gap-4">
            <img src={setting_logo} alt="setting" />
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Sidebar;
