
  import React from "react";
  import logo from "../../Utils/Images/Vasitum Logo (1) 1.svg";
  import Dashboard_logo from "../../Utils/Images/Sidebar/ic_dashboard copy.svg";
  import Recruitment_logo from "../../Utils/Images/Sidebar/ic_recruitment.svg";
  import Schedule_logo from "../../Utils/Images/Sidebar/ic_calendar.svg";
  import Employee_logo from "../../Utils/Images/Sidebar/ic_employee.svg";
  import Department_logo from "../../Utils/Images/Sidebar/ic_department.svg";
  import support_logo from "../../Utils/Images/ic_support.svg";
  import setting_logo from "../../Utils/Images/ic_settings.svg";
  import responsive_logo from "../../Utils/Images/mdlogo.svg";
  import { useSelector } from "react-redux";
  
  const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
    if (!isMenuOpen) return null;
  
    return (
      <div className="h-full w-[242px] md:w-[90px] lg:w-[242px] fixed top-0 left-0 bg-gray-100 border-r shadow-lg overflow-y-auto">
        {/* LOGO */}
        <div className="p-8 md:p-4 md:flex md:justify-center lg:block">
          <img
            src={logo}
            alt="Logo"
            className="hidden md:hidden lg:block w-full h-auto cursor-pointer lg:p-[20px]"
          />
          <img
            src={responsive_logo}
            alt="Responsive Logo"
            className="w-full h-auto md:block lg:hidden cursor-pointer"
          />
        </div>
  
        {/* MAIN MENU */}
        <div className="px-8 md:px-2 lg:px-8">
          <h1 className="text-[#686868] mb-4 text-xs text-left md:text-center lg:text-left">MAIN MENU</h1>
          <ul className="space-y-4 text-[#686868] font-medium text-base">
            {[
              { src: Dashboard_logo, alt: "Dashboard" },
              { src: Recruitment_logo, alt: "Recruitment" },
              { src: Schedule_logo, alt: "Schedule" },
              { src: Employee_logo, alt: "Employee" },
              { src: Department_logo, alt: "Department" },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4 hover:text-[#ff5151] cursor-pointer lg:py-2 ">
                <div className="md:w-full md:flex md:justify-center lg:w-auto lg:block">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="hover:filter hover:brightness-0 hover:invert"
                  />
                </div>
                <span className="hidden md:hidden lg:inline-block">{item.alt}</span>
              </li>
            ))}
          </ul>
        </div>
  
        {/* OTHER MENU */}
        <div className="px-8 md:px-2 lg:px-8 mt-8">
          <h1 className="text-[#686868] mb-4 text-xs text-left md:text-center lg:text-left">OTHER</h1>
          <ul className="space-y-8 text-[#686868] font-medium text-base cursor-pointer">
            {[
              { src: support_logo, alt: "Support" },
              { src: setting_logo, alt: "Settings" },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4 hover:text-[#ff5151] cursor-pointer">
                <div className="md:w-full md:flex md:justify-center lg:w-auto lg:block">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="hover:filter hover:brightness-0 hover:invert"
                  />
                </div>
                <span className="hidden md:hidden lg:inline-block">{item.alt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;