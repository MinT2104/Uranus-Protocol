"use client";

import { memo, useEffect, useState } from "react";
import { useAppSelector } from "@/context/store";
import { selectAccountId, selectWallet } from "@/features/walletSlice";
import Link from "next/link";
import Image from "next/image";

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

    if (wallet.accountId) {
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

  const [data, setData] = useState<User>()
  const [isDataFetched, setDataFetched] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      if (wallet) {
        const result = await wallet.viewMethod({
          contractId: process.env.NEXT_PUBLIC_CONTRACT_NAME || "",
          method: "get_user_metadata_by_user_id",
          args: {
            user_id: account,
          }
        });
        setData(result)
        setDataFetched(true);
      }
    }
    getData()
  }, [wallet, isDataFetched])

  const isWalletConnected = !!wallet?.accountId;

  return isWalletConnected ? (
    <Link href={`/profile/${account}`} className="rounded-full border-4 border-black" >
      <Image src={data?.metadata.avatar || "/images/logo.jpg"} alt="avatar" height={40} width={40}  className="rounded-full"/>
    </Link>
  ) : (
    <button
      onClick={onConnectWalletClicked}
      className="border border-gray-600 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-300 hover:border-b-4 hover:border-r-4 transition-all duration-100 font-medium ease-in-out"
    >
      Connect
    </button>
  );
}

export default memo(ConnectWalletButton);
