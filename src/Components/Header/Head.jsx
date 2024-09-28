/* import React from "react";
import logo from "../../Utils/Images/Vasitum Logo (1) 1.png";
import hamburger_logo from "../../Utils/Images/ic_burgermenu.svg";
import search_logo from "../../Utils/Images/Union.svg";
import notification from "../../Utils/Images/ic_round-notifications.svg";
import message from "../../Utils/Images/bi_chat-left-dots-fill.svg";
import profile from "../../Utils/Images/Frame 12.svg";
import { useDispatch } from "react-redux";
import {toggleMenu} from '../../Utils/Reudx-store/appSlice'
const Head = () => {
  const dispatch = useDispatch()

  const toogleMenuHandler=()=>{
    dispatch(toggleMenu())

  }

  return (
    <div className=" relative grid grid-flow-col border-b-4 py-4 justify-around z-1 ml-64" >
      <div className="col-span-5"> 
            <img className="cursor-pointer" src={hamburger_logo} alt="logo" onClick={()=>toogleMenuHandler() } />
            <img src="" alt="" />
        </div>
      <div className="flex col-span-1 justify-start">
        <div className="flex">
           

          <input className="h-6  border w-80 " type="text" placeholder="search" />
          <button className="border  border-gray-400 p-2 w-6 h-6"><img className="" src={search_logo} alt="" /></button>
            
        </div>
      </div>

      <div className="flex space-x-8 col-span-6 justify-end">
        <button>
          <img src={notification} alt="notification" />
        </button>
        <button>
          <img src={message} alt="message" />
        </button>
        <button>
          <img src={profile} alt="profile" />
        </button>
      </div>
    </div>
  );
};

export default Head;
 */
import React from "react";
import logo from "../../Utils/Images/Vasitum Logo (1) 1.png";
import hamburger_logo from "../../Utils/Images/ic_burgermenu.svg";
import search_logo from "../../Utils/Images/Union.svg";
import notification from "../../Utils/Images/ic_round-notifications.svg";
import message from "../../Utils/Images/bi_chat-left-dots-fill.svg";
import profile from "../../Utils/Images/Frame 12.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from '../../Utils/Reudx-store/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={`width-[1198px]  h-[81px] pl-[50px] relative grid grid-flow-col  py-4 justify-around z-1 ${isMenuOpen ? "ml-64" : "ml-0"}`}>
    {/* 
    TOOOGLE
    
    <div className="col-span-5">
        <img className="cursor-pointer" src={hamburger_logo} alt="logo" onClick={toogleMenuHandler} />
        <img src="" alt="" />
      </div> */}
      <div className="flex col-span-1 justify-start">
      <div className="flex items-center w-[343px]">
        <input
          className="w-full h-[44px] border border-gray-300 rounded-l-md px-4 outline-none focus:border-blue-400"
          type="text"
          placeholder="Search"
        />
        <button className="h-[44px] w-[44px] bg-gray-200 border-l border-gray-300 flex items-center justify-center rounded-r-md">
          <img src={search_logo} alt="Search" className="w-4 h-4" />
        </button>
      </div>
      </div>
      <div className="flex space-x-8 col-span-6 justify-end">
        <button><img src={notification} alt="notification" /></button>
        <button><img src={message} alt="message" /></button>
        <button><img src={profile} alt="profile" /></button>
      </div>
    </div>
  );
};

export default Head;
