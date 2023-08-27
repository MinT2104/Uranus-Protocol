"use client";

import { memo, useEffect, useRef, useState } from "react";
import { RootState, useAppSelector } from "@/context/store";
import { selectAccountId, selectWallet } from "@/features/walletSlice";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import { useClickOutside } from "@/hooks/useClickOutside";
// import { userLogin } from "@/services/userServices";

interface UserMetadata {
  user_id: string;
  nickname: string;
  role: string;
  total_credit: number;
  students: number;
  first_name: string | null;
  last_name: string | null;
  bio: string | null;
  avatar: string;
  resume: string;
  created_at: number;
  updated_at: number;
  courses_owned: number;
}

interface User {
  user_id: string;
  metadata: UserMetadata;
  skill: Record<string, any>; // You can replace 'any' with a more specific type if needed
  certificate: any[]; // You can replace 'any' with a more specific type if needed
  courses: any[]; // You can replace 'any' with a more specific type if needed
}

function ConnectWalletButton() {
  const wallet = useAppSelector(selectWallet);
  const account = useAppSelector(selectAccountId);
  const onConnectWalletClicked = async () => {
    if (!wallet)
      return {
        title: "Wallet not initialized",
        description: "Please try again later",
        status: "error",
      };

    if (wallet?.accountId) {
      return {
        title: "Wallet already connected",
        status: "info",
      };
    }

    wallet.signIn();
  };

  const signOutClick = async () => {
    if (!wallet)
      return {
        title: "Wallet not initialized",
        description: "Please try again later",
        status: "error",
      };

    wallet.signOut();
  };

  const [data, setData] = useState<User>();
  const [isDataFetched, setDataFetched] = useState<boolean>(false);

  // useEffect(() => {
  //   const accountName = JSON.parse(
  //     localStorage.getItem("near_app_wallet_auth_key")
  //   )?.accountId;
  //   // const getData = async () => {
  //   //   if (wallet) {
  //   //     const result = await wallet.viewMethod({
  //   //       contractId: process.env.NEXT_PUBLIC_CONTRACT_NAME || "",
  //   //       method: "get_user_metadata_by_user_id",
  //   //       args: {
  //   //         user_id: account,
  //   //       },
  //   //     });
  //   //     setData(result);
  //   //     setDataFetched(true);
  //   //   }
  //   // };
  //   // getData();
  //   if (account !== accountName) {
  //     // getLoginService({})
  //     console.log("muted");
  //   }
  // }, [wallet, isDataFetched]);

  const isWalletConnected = !!wallet?.accountId;
  const userWallet = useSelector((state: RootState) => state.wallet.wallet);
  const [isPopupLogout, setIsPopupLogout] = useState(false);
  const dropDownRef = useRef(null);
  useClickOutside(dropDownRef, setIsPopupLogout);
  return isWalletConnected ? (
    <>
      {/* <button
        className="border border-gray-600 px-4 py-2 rounded-md text-gray-600  font-medium ease-in-out"
      >
        Sign Out
      </button> */}
      <button
        ref={dropDownRef}
        onClick={() => setIsPopupLogout(!isPopupLogout)}
        type="button"
        className="relative w-fit bg-white flex items-center gap-2  hover:border-slate-300 border-[1px] border-white text-black p-[16px] py-[5px] rounded-[20px] font-[600] outline-none"
      >
        <div className="w-6 h-6 text-slate-500">
          <PersonIcon sx={{ fontSize: 20 }} />
        </div>
        <span className="w-fit text-slate-500">{userWallet?.accountId}</span>
        {isPopupLogout && (
          <div
            onClick={signOutClick}
            className="absolute top-10 left-0 rounded hover:text-pink-600 w-full h-fit bg-white lightShadow py-2"
          >
            <span>Log out</span>
          </div>
        )}
      </button>
    </>
  ) : (
    <button
      onClick={onConnectWalletClicked}
      type="button"
      className="bg-[#FFD4EB] text-[#30A1EB] p-[10px] rounded-[20px] font-[600] outline-none"
    >
      Connect
    </button>
  );
}

export default memo(ConnectWalletButton);
