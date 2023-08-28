import React, { useRef } from "react";

export const CategoryCreation = ({
  setIsCategoryCreation,
}: {
  setIsCategoryCreation: any;
}) => {
  const category = useRef<any>(null);
  const handleSubmitCategory = () => {
    console.log(category.current.value);
  };
  return (
    <section className="animate-opacity w-full h-full flex items-center justify-center fixed top-0 z-50  py-10">
      <div
        onClick={() => setIsCategoryCreation(false)}
        className="absolute bg-black opacity-60 w-full h-full"
      />
      <div className="static z-50 w-1/3 py-6 h-fit bg-white rounded-[12px] text-black flex flex-col">
        <h1 className="text-[24px] text-black font-bold text-center">
          Create a Category
        </h1>
        <h3 className="font-light text-[16px] text-slate-600 text-center">
          Create category quickly and efficiently
        </h3>
        <div className="w-2/3 mt-10 mx-auto flex flex-col gap-2">
          <span className="font-bold text-noSelected">Category's Name</span>
          <input
            ref={category}
            className="w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
            placeholder="Enter your job's name"
            type="text"
          />
        </div>
        <div className="flex gap-2 justify-end w-2/3 mx-auto mt-6">
          <button
            onClick={() => setIsCategoryCreation(false)}
            className="border-[1px] border-black rounded text-black px-6 p-2 font-bold"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmitCategory}
            className="primaryBg rounded text-white font-bold px-6 p-2"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
