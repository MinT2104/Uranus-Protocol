"use client";

import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { JobApplication } from "@/components/JobApplication";
import { RootState, useAppSelector } from "@/context/store";
import { selectAccountId, selectWallet } from "@/features/walletSlice";
import Person3Icon from "@mui/icons-material/Person3";
import { useSelector } from "react-redux";

const JobDetail = () => {
  const router = useRouter();
  const [isApplication, setIsApplication] = useState<boolean>(false);

  // const [dataaa, setData] = useState<any>([]);
  const wallet = useAppSelector(selectWallet);
  const account = useAppSelector(selectAccountId);
  const currentJob = useSelector((state: RootState) => state.job);

  const handleCompleteJob = async (isBoolean: boolean) => {
    if (currentJob?.job_creators === account) {
      if (wallet) {
        await wallet
          .callMethod({
            contractId: "dev-1693163400881-11970999828083",
            method: "complete_job",
            args: {
              job_id: currentJob?.job_id,
              approve: isBoolean,
            },
            gas: "50000000000000",
          })
          .then((res) => {
            router.push("/jobs");
          });
      }
    } else {
      alert("ok");
    }
  };
  console.log(currentJob);
  const [isTrueFalse, setIsTrueFalse] = useState(false);
  return (
    <section className="relative w-full scrollbar bg-primary h-fit text-black pt-40 pb-20 flex flex-col gap-4">
      {isApplication && (
        <JobApplication
          id={currentJob?.job_id}
          setIsApplication={setIsApplication}
        />
      )}
      {isTrueFalse && (
        // <form className="animate-opacity fixed top-0 overflow-auto w-full h-full flex items-center justify-center z-50 py-10">
        //   <div
        //     onClick={() => setIsTrueFalse(false)}
        //     className="absolute bg-black opacity-60 w-full h-full"
        //   />
        //   <div className=" z-50 w-fit py-6 h-fit overflow-auto bg-white rounded-[12px] text-black flex flex-col gap-2 px-4">
        //     <button
        //       onClick={() => handleCompleteJob(true)}
        //       className="py-4 w-40 bg-blue-500 text-white mx-auto rounded"
        //     >
        //       true
        //     </button>
        //     <button
        //       onClick={() => handleCompleteJob(false)}
        //       className="py-4 w-40 primaryBgHomeBtn text-white  mx-auto rounded"
        //     >
        //       false
        //     </button>
        //   </div>
        // </form>
        <div
          // onSubmit={handleSubmit}
          className="animate-opacity fixed top-0 overflow-auto w-full h-full flex items-center justify-center z-50 py-10"
        >
          <div
            onClick={() => setIsTrueFalse(false)}
            className="absolute bg-black opacity-60 w-full h-full"
          />
          <div className=" z-50 w-2/5 py-6 h-fit overflow-auto bg-white rounded-[12px] text-black flex flex-col">
            <h1 className="text-[24px] text-black font-bold text-center">
              Complete Job?
            </h1>
            {/* <h1 className="text-[24px] text-pink-600 font-bold text-center">
              PHP Developer Thu Nhập Đến 22 Triệu
            </h1> */}
            {/* <div className="w-2/3 mt-10 mx-auto flex flex-col gap-2">
              <span className="font-bold text-noSelected">
                Your Developer Account
              </span>
              <input
                className="w-full p-2 rounded-[6px] bg-slate-200 text-slate-500 border-slate-500 outline-none px-4 border-[1px]"
                placeholder="Address"
                type="text"
                value={account}
                disabled
              />
            </div> */}
            <div className="w-2/3 mt-10 mx-auto flex flex-col gap-2">
              <span className="font-bold text-noSelected">Job ID</span>
              <input
                className="w-full p-2 rounded-[6px] bg-slate-200 text-slate-500 border-slate-500 outline-none px-4 border-[1px]"
                placeholder="Address"
                type="text"
                value={currentJob?.job_id}
                disabled
              />
            </div>
            {/* <div className=" my-5 p-10 flex items-center justify-center border border-black rounded w-1/2 mx-auto">
        <div className="flex flex-col">
        <label
          htmlFor="file-CV"
          className=" flex justify-center w-1/2 mx-auto mt-10 cursor-pointer border border-slate-500 gap-2 py-9 rounded text-center text-slate-500"
        >
          <CloudUploadIcon />
          <span>Upload your CV</span>
        </label>
        <span className="w-1/2 mx-auto text-center bg-pink-500 text-white py-4 rounded-br">
          no file chosen
        </span>
        <input className="hidden" id="file-CV" type="file" />
        </div>
        </div>
        <div className="w-2/3 mt-10 mx-auto flex flex-col gap-2">
          <span className="font-bold text-noSelected">Your Address</span>
          <input
            className="w-full p-2 rounded-[6px] bg-slate-200 text-slate-500 border-slate-500 outline-none px-4 border-[1px]"
            placeholder="Address"
            type="text"
            value="1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"
            disabled
          />
        </div>
        <div className="w-2/3 mt-4 mx-auto flex flex-col gap-2">
          <span className="font-bold text-noSelected">Discription</span>
          <textarea
            className="h-40 resize-none w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
            placeholder="Write a brief introduction about yourself (strengths, weaknesses) and clearly state your desire and reason to work at this company. Here's how to impress a recruiter if you have no work experience (or a bad CV)."
          />
        </div> */}
            <div className="flex gap-2 justify-end w-2/3 mx-auto mt-6">
              <button
                onClick={() => handleCompleteJob(true)}
                className="py-4 w-40 bg-blue-500 text-white mx-auto rounded"
              >
                true
              </button>
              <button
                onClick={() => handleCompleteJob(false)}
                className="py-4 w-40 bg-red-500 text-white  mx-auto rounded"
              >
                false
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-1/2 h-fit bg-white rounded-[12px] border mx-auto p-4">
        <div
          onClick={() => router.push("/jobs")}
          className="flex gap-2 py-2 items-center cursor-pointer hover:bg-slate-200 p-1 px-4 w-fit rounded"
        >
          <ArrowBackRoundedIcon
            sx={{ fontSize: 30 }}
            className=" rounded-full cursor-pointer"
          />
          <span>Back</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="font-medium text-[32px]">
              {currentJob?.name_job}
            </span>
            <button
              onClick={() => setIsTrueFalse(true)}
              className="relative px-4 p-2 rounded primaryBg text-white"
            >
              Complete Job
            </button>
          </div>
          <span className="text-noSelected">{currentJob?.status}</span>
          <button
            onClick={() => setIsApplication(true)}
            className="w-1/3 p-3 px-6 rounded primaryBg text-white my-4"
          >
            Apply now
          </button>
        </div>
        <hr />
        <div className="flex gap-10">
          <div className="w-full py-4 flex gap-4 items-center">
            <Person3Icon
              sx={{ fontSize: 40 }}
              className="bg-blue-300 bg-pink-200 p-2 rounded-full"
            />
            <span className="font-bold text-[20px]">
              {currentJob?.job_creators}
            </span>
          </div>
          <div className="w-full py-4 flex gap-4 items-center">
            <Person3Icon
              sx={{ fontSize: 40 }}
              className="bg-blue-300 bg-pink-200 p-2 rounded-full"
            />
            <span className="font-bold text-[20px]">
              {currentJob?.dev_account}
            </span>
          </div>
        </div>
        <hr />
        <div>
          <div className="w-full py-4 flex gap-4 items-center">
            <PaidRoundedIcon
              sx={{ fontSize: 40 }}
              className="bg-blue-300 p-2 rounded-full"
            />
            <span className="font-bold text-[20px]">
              {currentJob?.token_amount}
            </span>
          </div>
        </div>
        <hr />
        <div className="py-4">
          <h1 className="font-bold text-[20px]">Description</h1>
          <p className=" px-4 text-slate-500">{currentJob?.description}</p>
        </div>
        <button className="p-3 mt-10 text-white rounded primaryBg w-full">
          Apply now
        </button>
      </div>
    </section>
  );
};
export default JobDetail;
