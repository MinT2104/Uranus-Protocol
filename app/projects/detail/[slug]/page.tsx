"use client";
import { ProjectData } from "@/constants/ProjectData";
import React from "react";

const page = () => {
  const dataProject = localStorage.getItem("projectData");
  const detailProject = dataProject === "0" ? ProjectData[0] : ProjectData[1];
  return (
    <div className="bg-primary w-full h-screen flex justify-center pt-32 overflow-auto pb-10 ">
      <div className="w-3/5 h-full flex  gap-4 bg-white text-black border flex-col">
        <h1 className="text-[32px] font-bold">{detailProject.name}</h1>
        <h2>{detailProject.github}</h2>
        <h2>{detailProject.twitter}</h2>
        <h2>{detailProject.money}</h2>
        <p>{detailProject.description}</p>
        <h2>{detailProject.location}</h2>
        <h2>{detailProject.category}</h2>
      </div>
    </div>
  );
};
export default page;
