'use client'
import Image from "next/image";
import Pheader from "./header";


const styles = ["relative w-[260px] border-[1px] border-gray-400 h-[875px] bg-white pt-[8px] z-30 max-[880px]:hidden ",
                "relative w-[260px] border-[1px] border-gray-400 h-[875px] bg-white pt-[5px] z-30  " ];
const styles2 = ["hidden ",
                "fixed w-[2000px] h-[2000px] z-20 bg-black opacity-50 min-[880px]:hidden min-[880px]:z-0 min-[880px]:w-[0px] min-[880px]:h-[0px]"];


 export default function Sidebar({ show }: { show: boolean }) {
  return (
    <div className="pt-[5px] z-0 min-[880px]:w-[0px]">
      <div className={show ? styles2[1] : styles2[0]} ></div>
    <div className={show ? styles[1] : styles[0]} >
       
        <div className="border-b-[1px] border-gray-400 px-10 py-5 ">
            <a>adressEmail@mail.com</a>
        </div>
        <div className="max-h-[180px]">
          <div className="grid mt-2 overflow-x-hidden max-[880px]:hover:overflow-y-scroll max-[880px]:max-h-[500px]">

              <a href="#" className=" flex px-4 py-2 text-[14px] "><img src="IMG/user.png" className="w-[30px] "></img><span className="pt-[3px] pl-[4px]">Websites</span></a>
              <a href="#" className=" flex px-4 py-2 text-[14px] "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Discover</span></a>
              <a href="#" className=" flex mx-4 py-2 text-[14px] justify-between"><span className="flex "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Domain Registration</span></span> <img src="IMG/arrow.png" className="w-[20px] "></img></a>
              <a href="#" className=" flex mx-4 py-2 text-[14px] justify-between"><span className="flex "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Analytics & Logs</span></span>  <img src="IMG/arrow.png" className="w-[20px] "></img></a>
              <a href="#" className=" flex mx-4 py-2 text-[14px] justify-between"><span className="flex "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Security Center</span></span>  <img src="IMG/arrow.png" className="w-[20px] "></img></a>
              <a href="#" className=" flex mx-4 py-2 text-[14px]  "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Trace</span><span className="bg-orange-300 rounded-[10px] px-2 text-[10px] align-center mt-[7px] h-[15px] ml-[5px]">beta</span></a>
              <div className="border-b-[1px] border-gray-400 w-[240px] ml-[10px]"><a> </a></div>
              
              <a href="#" className=" flex mx-2 px-2 py-2 text-[14px] "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Trunstile</span></a>
              <div className="border-b-[1px] border-gray-400 w-[240px] ml-[10px]"><a> </a></div>
              <a href="#" className=" flex px-4 py-2 text-[14px]"><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Zero trust</span></a>
              <a href="#" className=" flex mx-4 py-2 text-[14px] justify-between"><span className="flex "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Area 1</span></span>  <img src="IMG/arrow.png" className="w-[20px] "></img></a>
              <div className="border-b-[1px] border-gray-400 w-[240px] ml-[10px]"><a> </a></div>
              <a href="#" className=" flex mx-4 py-2 text-[14px] justify-between"><span className="flex "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Workes & Pages</span></span> <img src="IMG/arrow.png" className="w-[20px] "></img></a>
              <a href="#" className=" flex mx-4 py-2 text-[14px] justify-between"><span className="flex "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">AI</span><span className="bg-orange-300 rounded-[10px] px-2 text-[10px] align-center mt-[7px] h-[15px] ml-[5px]">beta</span></span> <img src="IMG/arrow.png" className="w-[20px] "></img></a>
              <a href="#" className=" flex mx-4 py-2 text-[14px] justify-between"><span className="flex "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">R2</span></span> <img src="IMG/arrow.png" className="w-[20px] "></img></a>
              <a href="#" className=" flex px-4 py-2 text-[14px]"><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Stream</span></a>
              <a href="#" className=" flex mx-4 py-2 text-[14px] justify-between "><span className="flex "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Images</span></span> <img src="IMG/arrow.png" className="w-[20px] "></img></a>
              <div className="border-b-[1px] border-gray-400 w-[240px] ml-[10px]"><a> </a></div>
              <a href="#" className=" flex mx-4 py-2 text-[14px] justify-between"><span className="flex "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Menage Accounts</span></span> <img src="IMG/arrow.png" className="w-[20px] "></img></a>
              <a href="#" className=" flex px-4 py-2 text-[14px]"><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Notifications</span></a>
              <a href="#" className=" flex mx-2 px-2 py-2 text-[14px] "><img src="IMG/user.png" className="w-[30px]  "></img><span className="pt-[3px] pl-[4px]">Bulk Redirects</span></a>
              <div className="border-b-[1px] border-gray-400 w-[240px] ml-[10px]"><a> </a></div>
          </div>
        </div>
    </div>
  </div>
  );
}
