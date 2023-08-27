import React from "react";

const page = () => {
  return (
    <div className="bg-primary w-full h-full flex justify-center pt-32 overflow-auto pb-10">
      <div className="w-2/3 h-full flex  gap-4">
        <div className="w-3/5 h-full flex flex-col gap-2 ">
          <div className="w-full h-5/6 flex flex-col gap-2 bg-white border-[1px] poolShadow rounded-tl-[6px] p-2 px-4">
            <span className="font-[600] text-[24px] inline-block text-center w-full">
              Your Projects
            </span>
            <div className="flex flex-col items-start">
              <span className="text-black font-[600]">Name:</span>
              <span className="text-slate-500 text-sm font-[400]">
                Looking for Website Developer and UX/UILooking for Website
                Developer and UX/UI
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-black font-[600]">Discription:</span>
              <span className="text-slate-500 text-sm font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-black font-[600]">EXP:</span>
              <span className="text-slate-500 text-sm font-[400]">
                21/08/2023
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-black font-[600]">Related Job:</span>
              <span className="text-slate-500 text-sm font-[400]">2</span>
            </div>
          </div>
          <div className="w-full h-1/6 bg-white border-[1px] poolShadow rounded-bl-[6px]"></div>
        </div>
        <div className="w-2/5 h-full bg-white border-[1px] poolShadow rounded-tr-[6px] rounded-br-[6px]"></div>
      </div>
    </div>
  );
};
export default page;
