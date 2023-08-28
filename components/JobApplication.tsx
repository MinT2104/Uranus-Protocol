import React from "react";
import moment from "moment";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useAppSelector } from "@/context/store";
import { selectAccountId, selectWallet } from "@/features/walletSlice";
import { utils } from "near-api-js";
import { useRouter } from "next/navigation";
export const JobApplication = ({
  setIsApplication,
  id,
}: {
  setIsApplication: any;
  id: string;
}) => {
  const router = useRouter();
  const wallet = useAppSelector(selectWallet);
  const account = useAppSelector(selectAccountId);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      job_id: id,
    };

    if (wallet) {
      await wallet
        .callMethod({
          contractId: "dev-1693163400881-11970999828083",
          method: "take_job",
          args: formData,
          gas: "50000000000000",
        })
        .then((res) => {
          router.push("/jobs");
        });
    }
  };
  return (
    // <section className="w-full h-fit fixed overflow-auto top-0 z-50">
    <form
      onSubmit={handleSubmit}
      className="animate-opacity fixed top-0 overflow-auto w-full h-full flex items-center justify-center z-50 py-10"
    >
      <div
        onClick={() => setIsApplication(false)}
        className="absolute bg-black opacity-60 w-full h-full"
      />
      <div className=" z-50 w-2/5 py-6 h-fit overflow-auto bg-white rounded-[12px] text-black flex flex-col">
        <h1 className="text-[24px] text-black font-bold text-center">
          Tuyển dụng
        </h1>
        <h1 className="text-[24px] text-pink-600 font-bold text-center">
          PHP Developer Thu Nhập Đến 22 Triệu
        </h1>
        <div className="w-2/3 mt-10 mx-auto flex flex-col gap-2">
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
        </div>
        <div className="w-2/3 mt-10 mx-auto flex flex-col gap-2">
          <span className="font-bold text-noSelected">Job ID</span>
          <input
            className="w-full p-2 rounded-[6px] bg-slate-200 text-slate-500 border-slate-500 outline-none px-4 border-[1px]"
            placeholder="Address"
            type="text"
            value={id}
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
            onClick={() => setIsApplication(false)}
            className="border-[1px] border-black rounded text-black px-6 p-2 font-bold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="primaryBg rounded text-white font-bold px-6 p-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
    // </section>
  );
};
