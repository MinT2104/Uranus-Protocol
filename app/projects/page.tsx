"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CategoryCreation } from "@/components/CategoryCreation";
import { ProjectData } from "@/constants/ProjectData";
import Link from "next/link";
import { stringify } from "querystring";
const page = () => {
  const [isPosition, setIsPosition] = useState(false);
  const [isCategoryCreation, setIsCategoryCreation] = useState(false);
  const router = useRouter();
  // const data: any = localStorage.getItem("projectData");
  // console.log(JSON.parse(data));

  return (
    <section className=" h-screen bg-primary relative overflow-auto scrollbar pb-10">
      {isCategoryCreation && (
        <CategoryCreation setIsCategoryCreation={setIsCategoryCreation} />
      )}
      {!isPosition ? (
        <div className=" relative w-2/3 max-h-full mx-auto top-[128px] p-2 flex flex-col gap-4 pb-10">
          <div className="flex justify-between items-center">
            <span className="font-[600] text-[36px] text-black">Category</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsCategoryCreation(true)}
                type="button"
                className="py-1 px-4 gap-2 primaryBg text-white rounded-[12px] flex justify-center items-center"
              >
                <AddIcon />
                <span>New Category</span>
              </button>
            </div>
          </div>
          <hr className="text-black border-[1px] border-black" />
          <div className="flex justify-between items-center">
            <span className="font-[600] text-[36px] text-black">Projects</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPosition(true)}
                type="button"
                className="py-1 px-4 gap-2 primaryBg text-white rounded-[12px] flex justify-center items-center"
              >
                <AddIcon />
                <span>New Project</span>
              </button>
            </div>
          </div>
          {/* <div className="w-full h-80 bg-white rounded-[12px] border-[1px] poolShadow"></div> */}
          <div className="text-black flex w-full gap-4 justify-between ">
            <div className=" w-2/3 rounded outline-none flex bg-white  justify-start items-center px-4">
              <SearchOutlinedIcon className="text-slate-500" />
              <input
                className=" w-full px-4 p-2 outline-none text-noSelected bg-transparent"
                type="text"
                placeholder="Search your projects"
              />
            </div>
            <div className="flex gap-2 text-black">
              <button className="w-fit flex gap-2 px-4 p-2 rounded-[12px] border-[1px] border-noSelected">
                <SortOutlinedIcon />
                <span>Sort</span>
                <ExpandMoreOutlinedIcon />
              </button>
              <button className="w-fit flex gap-2 px-4 p-2 rounded-[12px] border-[1px] border-noSelected">
                <FilterListOutlinedIcon />
                <span>Filter</span>
                <ExpandMoreOutlinedIcon />
              </button>
            </div>
          </div>
          <section className="flex gap-1 w-full flex-wrap pb-10 bg-white rounded border overflow-auto scrollbar2">
            <table className="styled-table animate-opacity min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="animate-opacity">
                <tr className="text-slate-600 font-light text-left">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Money
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Github link
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Twitter link
                  </th>
                </tr>
              </thead>
              {/* <hr /> */}
              <tbody className="animate-opacity">
                {ProjectData?.map((data: any, index: any) => (
                  <tr key={index} className="text-black">
                    <td className="text-left px-6 py-3 truncate">
                      {index + 1}
                    </td>
                    <td
                      onClick={() => {
                        localStorage.setItem("projectData", index);
                      }}
                      className="text-left px-6 py-3 truncate cursor-pointer hover:underline"
                    >
                      <Link href={`/projects/detail/${data.id}`}>
                        {data.name}
                      </Link>
                    </td>
                    <td className="text-left px-6 py-3 truncate ">
                      {data.money}
                    </td>
                    <td className="text-left px-6 py-3 truncate ">
                      <button
                        onClick={() =>
                          localStorage.setItem("projectData", index)
                        }
                        className="px-4 py-2 primaryBg text-white rounded"
                      >
                        <Link href={`/projects/detail/${data.id}`}>
                          Read more
                        </Link>
                      </button>
                    </td>
                    <td className="text-left px-6 py-3 truncate">
                      {data.location}
                    </td>
                    <td className="text-left px-6 py-3 truncate">
                      {data.category}
                    </td>
                    <td className="text-left px-6 py-3 truncate">
                      <a href={data.github} className="text-blue-500">
                        {data.github}
                      </a>
                    </td>
                    <td className="text-left px-6 py-3 truncate">
                      <a href={data.github} className="text-blue-500">
                        {data.github}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      ) : (
        <div className="animate-opacity w-3/5 h-fit mb-10  mx-auto mt-[128px] p-2 flex flex-col gap-4 bg-white border-[1px] rounded-[12px] poolShadow">
          <div className="w-full p-6 py-4 flex justify-between text-black">
            <div
              onClick={() => setIsPosition(false)}
              className="w-1/3 cursor-pointer"
            >
              <ArrowBackIcon />
            </div>
            <div className="w-2/3 flex justify-start items-center">
              <span className="text-[20px] font-[500] w-1/2 block text-center">
                Create a new Project
              </span>
              {/* <div className="flex gap-4 items-center">
                <span className="cursor-pointer  text-[#FB118E] text-[12px] font-[600]">
                  Clear All
                </span>

                <SettingsIcon className="text-slate-400 cursor-pointer" />
              </div> */}
            </div>
          </div>
          <hr />
          {/* <div className="w-full h-full p-6 py-4 flex justify-between gap-6">
            <div className="w-1/2 h-full flex flex-col gap-4">
              <span className="text-[16px] font-[600] block text-left">
                Seclect Pair
              </span>
              <div className="flex gap-4">
                <button
                  // onClick={() =>
                  //   dispatch(setIsPopupSelectToken({ isPopup: true }))
                  // }
                  className="flex w-1/2 p-2 px-4 bg-[#D2D9EE] rounded-[12px] justify-between"
                >
                  <div className="flex gap-2">
                    <img className="w-[24px]" alt="" />
                    <span className="font-[600]">ETH</span>
                  </div>
                  <ExpandMoreIcon />
                </button>
                <button
                  // onClick={() =>
                  //   dispatch(setIsPopupSelectToken({ isPopup: true }))
                  // }
                  className="flex w-1/2 p-2 px-4 bg-[#FB118E] rounded-[12px] justify-between text-white"
                >
                  <div className="flex gap-2">
                    <span className="font-[600]">Select a token</span>
                  </div>
                  <ExpandMoreIcon />
                </button>
              </div>
              <div className="flex justify-between items-center w-full h-fit bg-white rounded-[12px] border-[1px] border-slate-300">
                <div className="w-fit h-fit p-4 flex flex-col gap-1 justify-center">
                  <span className="font-[600]">1% fee tier</span>
                  <span className="font-[400] text-[12px] p-1 rounded-[12px] bg-[#D2D9EE] text-center">
                    83% select
                  </span>
                </div>
                <div className="w-fit h-fit p-4">
                  <button className="rounded-[12px] bg-[#D2D9EE] p-2 text-sm ">
                    Edit
                  </button>
                </div>
              </div>
              <span className="text-[16px] font-[600] block text-left">
                Deposit Amounts
              </span>
              <div className="hover:border-slate-300 border-[1px] border-white p-[15px] py-[10px] rounded-[12px] w-full h-[100px] bg-[#F5F6FC] ">
                <div className="flex justify-between w-full">
                  <div className="">
                    <span className="text-[35px]">0</span>
                  </div>
                  <div>
                    <li className="cursor-pointer flex items-center gap-[10px] rounded-[19px] p-1 px-2 font-[600] w-fit bg-[#E8ECFB]">
                      <img src={"/src/assets/BNB.png"} className="w-5 h-5" />
                      <span className="text-[20px]">ETH</span>
                      <ExpandMoreIcon />
                    </li>
                  </div>
                </div>
                <div className="w-full justify-end flex">
                  <span className="text-[16px] text-noSelected">
                    Balance: 0
                  </span>
                </div>
              </div>
              <div className="hover:border-slate-300 border-[1px] border-white p-[15px] py-[10px] rounded-[12px] w-full h-[100px] bg-[#F5F6FC] ">
                <div className="flex justify-between w-full">
                  <div className="">
                    <span className="text-[35px]">0</span>
                  </div>
                  <div>
                    <li className="cursor-pointer flex items-center gap-[10px] rounded-[19px] p-1 px-2 font-[600] w-fit bg-[#E8ECFB]">
                      <img src={"/src/assets/BNB.png"} className="w-5 h-5" />
                      <span className="text-[20px]">ETH</span>
                      <ExpandMoreIcon />
                    </li>
                  </div>
                </div>
                <div className="w-full justify-end flex">
                  <span className="text-[16px] text-noSelected">
                    Balance: 0
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full bg-blue-500"></div>
          </div> */}
          <div className="w-2/3 mt-10 mx-auto flex flex-col gap-2">
            <span className="font-bold text-noSelected">Project's Name</span>
            <input
              className="w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
              placeholder="Enter your job's name"
              type="text"
            />
          </div>
          <div className="w-2/3 mt-4 mx-auto flex flex-col gap-2">
            <span className="font-bold text-noSelected">Link Github</span>
            <input
              className="w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
              placeholder="Paste your Github link here"
              type="text"
            />
          </div>
          <div className="w-2/3 mt-4 mx-auto flex flex-col gap-2">
            <span className="font-bold text-noSelected">Link Twitter</span>
            <input
              className="w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
              placeholder="Paste your twitter link here"
              type="text"
            />
          </div>
          <div className="w-2/3 mt-4 mx-auto flex flex-col gap-2">
            <span className="font-bold text-noSelected">Description</span>
            <textarea
              className="scrollbar w-full h-40 resize-none p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
              placeholder="Enter your project's description"
            />
          </div>
          <div className="w-2/3 mt-4 mx-auto flex flex-col gap-2">
            <span className="font-bold text-noSelected">Money amount</span>
            <input
              className="w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
              placeholder="Money amount"
              type="text"
            />
          </div>
          <div className="w-2/3 mt-4 mx-auto flex flex-col gap-2">
            <span className="font-bold text-noSelected">Location</span>
            <input
              className="w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
              placeholder="Enter the location"
              type="text"
            />
          </div>
          <div className="w-2/3 mt-4 mx-auto flex flex-col gap-2">
            <span className="font-bold text-noSelected">Category</span>
            <input
              className="w-full p-2 rounded-[6px] bg-transparent border-slate-500 outline-none px-4 border-[1px] text-black"
              placeholder="Enter the location"
              type="text"
            />
          </div>
          <div className="flex gap-2 justify-end w-2/3 mx-auto mt-6">
            <button
              // onClick={() => setIsCreation(false)}
              className="border-[1px] border-black rounded text-black px-6 p-2 font-bold"
            >
              Cancel
            </button>
            <button className="primaryBg rounded text-white font-bold px-6 p-2">
              Submit
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default page;
