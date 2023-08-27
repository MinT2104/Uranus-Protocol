"use client";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import ConnectButton from "./ConnectButton";
import LG from "../assets/LG.png";
import LoggedAvt from "../assets/LoggedAvt.png";
import { useEffect, useRef, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useAppSelector } from "@/context/store";
import { selectAccountId, selectWallet } from "@/features/walletSlice";

// interface IHeaderProps {}
const Page: any = [
  {
    to: "/",
    logo: LG,
  },
  {
    to: "/jobs",
    name: "Jobs",
  },
  {
    to: "/working",
    name: "Working",
  },
  {
    to: "/projects",
    name: "Projects",
  },
];
// const dropDownRef = useRef(null);
const Header = () => {
  const wallet = useAppSelector(selectWallet);
  const account = useAppSelector(selectAccountId);
  const [path, setPath] = useState("");
  useEffect(() => {
    const getData = async () => {
      if (wallet) {
        const result = await wallet.callMethod({
          contractId: process.env.NEXT_PUBLIC_CONTRACT_NAME || "",
          method: "create_job",
          args: {
            name_job: "PHP dev",
            description: "mô tả",
          },
        });
        console.log(result);
      }
    };
    getData();
    console.log("alo");
  }, []);

  // useEffect(() => {
  //   setPath(window.location.pathname);
  // }, [window.location.pathname]);
  return (
    // <header className="grid grid-cols-2 gap-x-4 max-w-[1440px] mx-auto lg:w-3/4 px-2 py-2 z-10">
    //   {/* Left */}
    //   <div className="flex space-x-8 items-center justify-start">
    //     <Link href="/" className="flex items-center space-x-2 z-10">
    //       <Image
    //         src="/images/logo.jpg"
    //         width={40}
    //         height={40}
    //         alt="logo"
    //         className="rounded-full"
    //       />
    //       <h2 className="font-extrabold hidden lg:flex text-xl leading-[24px] text-primary items-center">
    //         VBI ACADEMY
    //         <span className="text-secondary font-bold text-3xl items-center">
    //           .
    //         </span>
    //         <span className="text-light font-bold text-xl items-center">_</span>
    //       </h2>
    //     </Link>{" "}
    //     <div className="px-4 py-2 w-1/2 border border-gray-400 rounded-xl text-gray-400 font-light text-sm hidden md:flex relative">
    //       Just for Fun
    //       <button className="cursor-pointer absolute right-2">
    //         <CiSearch className="text-[22px]" />
    //       </button>
    //     </div>
    //   </div>

    //   {/* Right */}
    //   <div className="flex space-x-4 items-center justify-end">
    //     <nav>
    //       <ul className="hidden lg:flex items-center justify-between space-x-4 font-light text-[14px]">
    //         <Link
    //           href="https://youtube.com/@eamontech"
    //           target="_blank"
    //           className="flex flex-col items-end justify-end group"
    //         >
    //           <p className="text-[12px] text-gray-500 group-hover:animate-ping">
    //             01 //
    //           </p>
    //           <li className="text-[15px] text-gray-600 group-hover:underline">
    //             Youtube
    //           </li>
    //         </Link>
    //         <Link
    //           href="https://t.me/eamondang"
    //           target="_blank"
    //           className="flex flex-col items-end justify-end group"
    //         >
    //           <p className="text-[12px] text-gray-500 group-hover:animate-ping">
    //             02 //
    //           </p>
    //           <li className="text-[15px] text-gray-600 group-hover:underline">
    //             Contact
    //           </li>
    //         </Link>
    //         <Link
    //           href="https://facebook.com/eamondang"
    //           target="_blank"
    //           className="flex flex-col items-end justify-end group"
    //         >
    //           <p className="text-[12px] text-gray-500 group-hover:animate-ping">
    //             03 //
    //           </p>
    //           <li className="text-[15px] text-gray-600 group-hover:underline">
    //             About Me
    //           </li>
    //         </Link>
    //       </ul>
    //     </nav>
    //     <ConnectButton />
    //   </div>
    // </header>
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-between bg-primary">
      <div className="w-1/3 px-[15px] py-[17px] ">
        <ul className="flex gap-[20px] items-center text-[16px]">
          {Page.map((data: any) => {
            if (data.logo) {
              return (
                <li key={data.to}>
                  <Link href={data.to}>
                    <img className="w-[43px] h-auto" src={LG.src} alt="" />
                  </Link>
                </li>
              );
            } else {
              return (
                <li
                  key={data.to}
                  className={`${
                    data.to === path
                      ? "font-[600] text-selected"
                      : "font-[400] text-noSelected"
                  }`}
                >
                  <Link href={data?.to}>
                    <span className="">{data.name}</span>
                  </Link>
                </li>
              );
            }
          })}
          <li
            // ref={moreRef}
            className="cursor-pointer relative"
          >
            <span className="text-[#5D6785] font-[400]">
              {/* <MoreHorizIcon /> */}
            </span>
            {/* {isPopupMore && <MoreNav />} */}
          </li>
        </ul>
      </div>
      <div className="w-1/3 px-[15px] py-[17px] h-full flex justify-center items-center">
        <div className="rounded-[12px] w-full h-fit flex items-center bg-white px-2 border-[1px] border-[#D6DDE3]">
          <SearchRoundedIcon sx={{ fontSize: 20 }} className="text-slate-400" />
          <input
            className="h-[40px] w-full outline-none p-[10px] border-none bg-transparent text-black"
            placeholder="Search tokens and NFT collections"
          />
        </div>
      </div>
      <div className="w-1/3 flex justify-end h-fit px-[15px] py-[17px]">
        <ul className="flex gap-[10px] items-center">
          {/* <li
            ref={dropDownRef}
            onClick={handleSetIsPopup}
            className="relative flex items-center gap-[10px] p-2 py-1 rounded-[19px] hover:bg-slate-200 cursor-pointer"
          >
            <img src={`..${currencyData.logo}`} className="w-5 h-5" />
            <span>{currencyData.currency}</span>
            <ExpandMoreIcon />
            {isPopupCurrency && <CurrencyPopup />}
          </li> */}
          {/* {!userData?.isLogged ? (
            <li>
              <button
                type="button"
                className="bg-[#FFD4EB] text-[#30A1EB] p-[10px] rounded-[20px] font-[600] outline-none"
              >
                Connect
              </button>
            </li>
          ) : ( */}
          {/* <li>
            <button
              type="button"
              className="w-[180px] bg-white flex items-center gap-2  hover:border-slate-300 border-[1px] border-white text-black p-[10px] py-[5px] rounded-[20px] font-[600] outline-none"
            >
              <img
                src="../assets/loggedAvt"
                className="w-6 h-6"
                alt="user imgage"
              />
              <span className="truncate">{userData.data?.address} </span>
            </button>
          </li> */}
          <ConnectButton />
          {/* )} */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
