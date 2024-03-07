import Image from "next/image";

export default function Home() {


  return (
    <main  className=" border-b-[1px] border-gray-400 ">
      <div className="max-[1220px]:pl-[280px] max-[880px]:pl-[40px] pl-[23%] pt-[24px] w-[80%] pb-[50px]">
        <div className="grid">
          <a className="text-[31px] font-bold">Cloudflare Developer Platform</a>
          <a className="text-[15px] w-[120%]">Deploy fast and secure websites or applications to Region: Earth, leaving infrastructure hassles to Cloudflare.</a>

          <a className="text-[22px] font-bold pt-[30px]">Pick a task to try</a>
          <a>We'll quickly guide you through set-up and how the service works.</a>
          <div className="grid grid-rows-2 grid-flow-col gap-2 pt-[12px] w-[120%] max-[595px]:grid-rows-4">
            <div className="grid border-[1px] border-blue-400 pt-4 pl-4  rounded-[7px] hover:text-blue-500 cursor-pointer">
              <a className="font-bold text-[19px]">Build an application</a>
              <a className="pt-[30px] text-[15px]">Create a static site, full stack application, or a serverless function in record time.</a>
              <div className="flex justify-between pt-[10px] items-center pb-[10px]">
                <a className="pt-[20px]">Workers & Pages</a>
                <img src="IMG/arrow.png" className="-rotate-90 w-[50px] pr-[20px]"></img>
              </div>
          </div>
          <div className="grid border-[1px] border-blue-400 pt-4 pl-4  rounded-[7px] hover:text-blue-500 cursor-pointer">
              <a className="font-bold text-[19px]">Stream video</a>
              <a className="pt-[30px] text-[15px]">Upload, store, encode, and deliver live and on-demand video with one API.</a>
              <div className="flex justify-between pt-[10px] items-center pb-[10px]">
                <a className="pt-[20px]">Streams</a>
                <img src="IMG/arrow.png" className="-rotate-90 w-[50px] pr-[20px]"></img>
              </div>
          </div>
          <div className="grid border-[1px] border-blue-400 pt-4 pl-4  rounded-[7px] hover:text-blue-500 cursor-pointer">
              <a className="font-bold text-[19px]">Store filesn</a>
              <a className="pt-[30px] text-[15px]">Store and access objects without egress fees.</a>
              <div className="flex justify-between pt-[10px] items-center pb-[10px]">
                <a className="pt-[20px]">R2</a>
                <img src="IMG/arrow.png" className="-rotate-90 w-[50px] pr-[20px]"></img>
              </div>
          </div>
          <div className="grid border-[1px] border-blue-400 pt-4 pl-4  rounded-[7px] hover:text-blue-500 cursor-pointer">
              <a className="font-bold text-[19px]">Upload images</a>
              <a className="pt-[30px] text-[15px]">Build a scalable image pipeline to store, resize, optimize, and deliver images fast.</a>
              <div className="flex justify-between pt-[10px] items-center pb-[10px]">
                <a className="pt-[20px]">Images</a>
                <img src="IMG/arrow.png" className="-rotate-90 w-[50px] pr-[20px]"></img>
              </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}
