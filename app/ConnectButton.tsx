"use client";

import { memo } from "react";
import { useAppSelector } from "@/context/store";
import { selectAccountId, selectWallet } from "@/features/walletSlice";
import Link from "next/link";

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

  const isWalletConnected = !!wallet?.accountId;

  return isWalletConnected ? (
    <Link
    href={`/profile/${account}`}
      className="border border-gray-600 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-300 hover:border-b-4 hover:border-r-4 transition-all duration-100 font-medium ease-in-out"
    >
      {wallet.accountId?.split(".")[0]}
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
