'use client';

import { useAppSelector } from "@/context/store";
import { usePathname } from 'next/navigation';
import { selectIsLoading, selectWallet } from "@/features/walletSlice";
import { CoursesPerInstructor, defaultCoursesPerInstructorState, defaultUserState, UserInterface } from "@/types";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const defaultCoursesPerCourseIdState = (): CoursesPerInstructor => ({
  content: null,
  course_id: null,
  created_at: 0,
  description: null,
  instructor_id: '',
  media: null,
  price: 0,
  rating: 0,
  rating_count: 0,
  students_completed: {},
  students_studying_map: {},
  title: null
});


const CourseDetail = () => {
  const [courses, setCourses] = useState<CoursesPerInstructor>(defaultCoursesPerCourseIdState);
  const wallet = useAppSelector(selectWallet);
  const isLoading = useAppSelector(selectIsLoading);
  const route = usePathname();

  const urlSplit = route.split("/");

  useEffect(() => {
    const fetchUser = async () => {
      if (urlSplit[1] === "course" && urlSplit[2] !== undefined && wallet) {
        try {
          const result = await wallet.viewMethod({
            contractId: process.env.NEXT_PUBLIC_CONTRACT_NAME || "",
            method: "get_course_metadata_by_course_id",
            args: {
              course_id: urlSplit[2],
            }
          });
          setCourses(result);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, [wallet, isLoading]);

  if (courses) {
    return (
      <section className="max-w-[1440px] mx-auto lg:w-3/4 px-2 pt-4 text-gray-900">
        <Image src={courses.media ? courses.media : ""} alt="course image" width={1000} height={500}/>
        <div className="">
          <h1><span className="font-bold">Title:</span> {courses.title}</h1>
          <p><span className="font-bold">Created At:</span> {courses.created_at}</p>
          <p><span className="font-bold">Rating:</span> {courses.rating}</p>
          <p><span className="font-bold">Rating Count:</span> {courses.rating_count}</p>
          <span><span className="font-bold">Description:</span>{courses.description ? courses.description : "Don't Have"}</span>
        </div>
      </section>
    );
  }
};

export default CourseDetail;
