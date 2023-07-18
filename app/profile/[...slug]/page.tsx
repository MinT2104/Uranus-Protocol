'use client'

import { useAppSelector } from "@/context/store";
import { selectWallet } from "@/features/walletSlice";
import { CoursesPerInstructor, defaultCoursesPerInstructorState, defaultUserState, UserInterface } from "@/types";
import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";


const ProfileDetail = () => {
  const [data, setData] = useState<[CoursesPerInstructor]>(defaultCoursesPerInstructorState)
  const [isDataFetched, setDataFetched] = useState<boolean>(false)

  const [user, setUser] = useState<UserInterface>(defaultUserState)
  const [isUserFetched, setUserFetched] = useState<boolean>(false)
  const wallet = useAppSelector(selectWallet);
  const urlSplit = window?.location.href.split("/");

  useEffect(() => {
    const getData = async () => {
      if (urlSplit[3] === "profile" && urlSplit[4] !== undefined && wallet && user?.metadata.role === "Instructor") {
        const result = await wallet.viewMethod({
          contractId: process.env.NEXT_PUBLIC_CONTRACT_NAME || "",
          method: "get_all_courses_per_instructor",
          args: {
            instructor_id: urlSplit[4],
            start: 0,
            limit: 5,
          }
        });
        setData(result)
        setDataFetched(true);
      }
    }
    getData()
  }, [wallet, isDataFetched])

  useEffect(() => {
    const getData = async () => {
      if (urlSplit[3] === "profile" && urlSplit[4] !== undefined && wallet) {
        const result = await wallet.viewMethod({
          contractId: process.env.NEXT_PUBLIC_CONTRACT_NAME || "",
          method: "get_user_metadata_by_user_id",
          args: {
            user_id: urlSplit[4],
          }
        });
        setUser(result)
        setUserFetched(true);
      }
    }
    getData()
  }, [wallet, isUserFetched])
  console.log(user)
  console.log(data)

  return (
    <section  className="max-w-[1440px] mx-auto lg:w-3/4 px-2 pt-4 text-gray-900">
      {/* User Infomation */}
      <UserInfo userdata={user}/>
      {/* User Infomation */}
      {data?.map((course) => (
        <div key={course.course_id}>
          <h1>{course.course_id}</h1>
        </div>
      ))}
    </section>
  )
}

export default ProfileDetail
