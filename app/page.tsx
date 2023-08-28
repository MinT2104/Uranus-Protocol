"use client";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import Content from "./Content";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { useEffect } from "react";
import axiosClient from "@/services/axiosInstance";

export default function Home() {
  const wallet = useSelector((state: RootState) => state.wallet);
  console.log(wallet.wallet?.accountId);
  // useEffect(() => {
  //   axiosClient.get("/pump").then((res) => console.log(res));
  // }, []);
  return (
    <section className="w-full h-fit bg-primary">
      <div className="h-screen w-[500px] mx-auto flex flex-col items-center justify-center gap-4">
        <h1 className="font-black text-[40px] primaryText ">Uranus Protocol</h1>
        <h3 className="font-light text-sm text-noSelected">
          The platform offers reliable contracts
        </h3>
        <button className="font-bold text-lg text-white px-16 py-2 primaryBgHomeBtn rounded-full">
          <Link href="/jobs">Get started</Link>
        </button>
      </div>
    </section>
  );
}
