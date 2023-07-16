'use client'

import { useAppSelector } from "@/context/store";
import { selectWallet } from "@/features/walletSlice";
import { useEffect, useState } from "react";

interface IProfileDetailProps {}

interface CoursesPerInstructor {
  content: string | null,
  course_id: string | null,
  created_at: number,
  instructor_id: string,
  media: string | null,
  price: number,
  rating: number,
  rating_count: number,
  students_completed: {},
  students_studying_map: {},
  title: string | null,
}

const ProfileDetail = (props: IProfileDetailProps) => {
  const [data, setData] = useState<[CoursesPerInstructor]>()
  const [isDataFetched, setDataFetched] = useState<boolean>(false)
  const wallet = useAppSelector(selectWallet);

  useEffect(() => {
    const getData = async () => {
      const urlSplit = window?.location.href.split("/");
      if (urlSplit[3] === "profile" && urlSplit[4] !== undefined && wallet) {
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

  return (
    <section>
      {data?.map((course) => (
        <div key={course.course_id}>
          <h1>{course.course_id}</h1>
        </div>
      ))}
    </section>
  )
}

export default ProfileDetail
