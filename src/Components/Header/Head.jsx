import React from "react";
import logo from "../../Utils/Images/Vasitum Logo (1) 1.png";
import hamburger_logo from "../../Utils/Images/ic_burgermenu.svg";
import search_logo from "../../Utils/Images/Union.svg";
import notification from "../../Utils/Images/ic_round-notifications.svg";
import message from "../../Utils/Images/bi_chat-left-dots-fill.svg";
import profile from "../../Utils/Images/Frame 12.svg";
import profile_logo from "../../Utils/Images/womenlogo.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../Utils/Reudx-store/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className={`width-[1198px] h-[81px] pl-[50px] relative grid grid-flow-col py-4 justify-around z-1 md:ml-8 ${
        isMenuOpen ? "ml-64" : "ml-0"
      }`}
    >
      {/* TOGGLE BUTTON */}
      <div className="col-span-1 flex items-center">
        {/* Hamburger icon shown on md and smaller screens, hidden on large screens */}
        <img
          className="cursor-pointer md:block lg:hidden w-8 h-8" // Visible on medium and smaller screens, hidden on large screens
          src={hamburger_logo}
          alt="Hamburger Menu"
          onClick={toogleMenuHandler}
        />
      </div>

      {/* SEARCH BAR */}
      <div className="flex col-span-1 justify-start">
        <div className="flex items-center w-[343px] pl-12">
          <input
            className="w-full h-[44px] border-t-2 border-b-2 border-l-2    border-[#E0E0E0] bg-[#fafafa] rounded-l-md px-4 outline-none"
            type="text" 
            placeholder="Search"
          />
          <button className="h-[44px] w-[44px] bg-[#fafafa] border-r-2 border-t-2 border-b-2   border-gray-300 flex items-center justify-center rounded-r-md">
            <img src={search_logo} alt="Search" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ICONS */}
      <div className="flex space-x-8 col-span-6 justify-end">
        <button>
          <img
            src={notification}
            alt="notification"
            className="w-6 h-6 md:w-8 md:h-8" // Set size for notification icon
          />
        </button>
        <button>
          <img
            src={message}
            alt="message"
            className="w-6 h-6 md:w-8 md:h-8" // Set size for message icon
          />
        </button>
        <button >
          <img
            src={profile_logo }
            alt="profile"
            className="  " // Set size for profile icon
          />
        </button>
      </div>
    </div>
  );
};

export default Head;
