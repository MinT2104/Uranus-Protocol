"use client";
import { ProjectData } from "@/constants/ProjectData";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
const page = () => {
  const dataProject = localStorage.getItem("projectData");
  const detailProject = dataProject === "0" ? ProjectData[0] : ProjectData[1];
  const router = useRouter();
  return (
    <div className="bg-primary w-full h-screen flex justify-center pt-20 overflow-auto pb-10 ">
      <div className="w-3/5 h-fit flex  gap-4 bg-white text-black border flex-col p-4 rounded">
        <div
          onClick={() => router.push("projects")}
          className="flex gap-2 items-center cursor-pointer hover:bg-slate-200 w-fit px-4 p-2 rounded"
        >
          <ArrowBackIcon />
          <span>Back</span>
        </div>
        <h1 className="text-[32px] font-bold text-center">
          {detailProject.name}
        </h1>
        <div className="flex gap-10 items-center">
          <div className="flex items-center gap-2">
            <GitHubIcon />
            <span>{detailProject.github}</span>
          </div>
          <div className="flex items-center gap-2">
            <TwitterIcon sx={{ color: "blue" }} />
            <span>{detailProject.twitter}</span>
          </div>
        </div>
        <h2 className="text-[24px] font-bold">{detailProject.money}</h2>
        <p className="px-4 font-light text-slate-600">
          {detailProject.description}
        </p>
        <div className="flex items-center gap-2">
          <PlaceIcon sx={{ color: "black" }} />
          <span>{detailProject.location}</span>
        </div>
        <span className="px-6 py-3 rounded primaryBg text-white w-fit">
          Category: <span>{detailProject.category} </span>
        </span>
      </div>
    </div>
  );
};
export default page;
