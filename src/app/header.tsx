'use client'
import Sidebar from "./sidebar";
import React, { useState } from "react";


export default function Pheader() {
  const [showSidebar, setShowSidebar] = useState(false); 

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="sticky bg-white top-0 w-[100%] border-b-[1px] border-gray-400 pb-2 h-[64px] ">
        <div className="w-[100%] flex justify-between">
           <div className="min-[881px]:hidden border-r-[1px] border-gray-400 pr-[10px] absolute h-[64px]" >
           <img
            src="img/hamburger.png"
            className="min-[881px]:hidden w-[30px] my-[15px] ml-[10px]"
            onClick={toggleSidebar} 
          />

            </div>
            <div className="flex min-[881px]:w-[30%] max-[880px]:w-[70%]">
                <img src="IMG/logo.png" className="min-[881px]:hidden w-[60px] mb-[16px] mt-[14px] ml-[70px]"></img>
                <img src="IMG/wide-logo.png" className="max-[880px]:hidden w-[150px] px-[10px] pt-[3px]"></img>
            </div>
            <div className="min-[880px]:w-[70%] max-[880px]:w-[50%] max-[470px]:w-[70%] flex justify-end pt-[10px] items-center px-[30px] ">
                <a href="#" className="max-[880px]:hidden px-[10px] flex"><img src="IMG/plus-icon.png" className="w-[27px]"></img> Add site</a>
                <a href="#" className="max-[880px]:hidden  px-[10px] my-[-2px]"><img src="IMG/mglass.png" className="w-[30px]"></img></a>
                <a href="#" className="px-[10px] flex">Support <img src="IMG/arrow.png" className="w-[20px] "></img></a>
                <a href="#" className="max-[880px]:hidden px-[10px] flex">English <img src="IMG/arrow.png" className="w-[20px] "></img></a>
                <a href="#" className="px-[10px] mt-[-5px] flex"><img src="IMG/user.png" className="w-[30px]"></img><img src="IMG/arrow.png" className="w-[20px] mt-[5px]"></img></a>
            </div>
        </div>
        <Sidebar show={showSidebar} />
       
    </header>
  );
}
