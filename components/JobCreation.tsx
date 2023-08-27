import { useAppSelector } from "@/context/store";
import { selectWallet } from "@/features/walletSlice";
import { utils } from "near-api-js";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export const JobCreation = ({ setIsCreation }: { setIsCreation: any }) => {
  const nameRef = useRef<any>(null);
  const moneyRef = useRef<any>(null);
  const wallet = useAppSelector(selectWallet);
  const desc = useRef<any>(null);
  const router = useRouter();
  const handleSubmit = async () => {
    // console.log({
    //   name: nameRef.current?.value,
    //   desc: desc.current?.value,
    // });
    const deposit = utils.format.parseNearAmount(moneyRef.current?.value);
    if (wallet) {
      const result = await wallet
        .callMethod({
          contractId: process.env.NEXT_PUBLIC_CONTRACT_NAME || "",
          method: "create_job",
          args: {
            name_job: nameRef.current?.value,
            description: desc.current?.value,
          },
          gas: "50000000000000",
          deposit: deposit || undefined,
        })
        .then((res) => router.push("/jobs"));
    }
  };

  return (
    <section className="animate-opacity w-full h-full flex items-center justify-center fixed top-0 z-50  py-10">
      <div
        onClick={() => setIsCreation(false)}
        className="absolute bg-black opacity-60 w-full h-full"
      />
      <div className="static z-50 w-1/2 py-6 h-fit bg-white rounded-[12px] text-black flex flex-col">
        <h1 className="text-[24px] text-black font-bold text-center">
          Create a Job
        </h1>
        <h3 className="font-light text-[16px] text-slate-600 text-center">
          Create contracts quickly and efficiently
        </h3>
        <div className="w-2/3 mt-10 mx-auto flex flex-col gap-2">
          <span className="font-bold text-noSelected">Job's Name</span>
          <input
            ref={nameRef}
            className="w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
            placeholder="Enter your job's name"
            type="text"
          />
        </div>
        {/* <div className="w-2/3 mt-4 mx-auto flex flex-col gap-2">
          <span className="font-bold text-noSelected">Project's ID</span>
          <input
            className="w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
            placeholder="Paste your Project's ID here"
            type="text"
          />
        </div> */}
        <div className="w-2/3 mt-4 mx-auto flex flex-col gap-2">
          <span className="font-bold text-noSelected">Description</span>
          <textarea
            ref={desc}
            className="scrollbar w-full h-40 resize-none p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
            placeholder="Write a brief introduction about this job and clearly state your desire and reason to create this job."
          />
        </div>
        <div className="w-2/3 mt-4 mx-auto flex flex-col gap-2">
          <span className="font-bold text-noSelected">Money amount</span>
          <input
            ref={moneyRef}
            className="w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
            placeholder="Money amount"
            type="text"
          />
        </div>
        <div className="flex gap-2 justify-end w-2/3 mx-auto mt-6">
          <button
            onClick={() => setIsCreation(false)}
            className="border-[1px] border-black rounded text-black px-6 p-2 font-bold"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-pink-600 rounded text-white font-bold px-6 p-2"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
