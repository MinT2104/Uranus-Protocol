'use client';

import { useAppSelector } from "@/context/store";
import { usePathname } from 'next/navigation';
import { selectIsLoading, selectWallet } from "@/features/walletSlice";
import { CoursesPerInstructor, defaultCoursesPerInstructorState, defaultUserState, UserInterface } from "@/types";
import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import Courses from "./Courses";

const ProfileDetail = () => {
  const [courses, setCourses] = useState<CoursesPerInstructor[]>(defaultCoursesPerInstructorState);
  const [user, setUser] = useState<UserInterface>(defaultUserState);
  const [isReady, setIsReady] = useState(false);
  const wallet = useAppSelector(selectWallet);
  const isLoading = useAppSelector(selectIsLoading);
  const route = usePathname();

  const urlSplit = route.split("/");

  useEffect(() => {
    const fetchData = async () => {
      if (urlSplit[1] === "profile" && urlSplit[2] !== undefined && wallet && user?.metadata.role === "Instructor") {
        try {
          let result = await wallet.viewMethod({
            contractId: process.env.NEXT_PUBLIC_CONTRACT_NAME || "",
            method: "get_all_courses_per_instructor",
            args: {
              instructor_id: urlSplit[2],
              start: 0,
              limit: 5,
            }
          });
          setCourses(result);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      }
    };
    fetchData();
  }, [wallet, isLoading, user]);

  useEffect(() => {
    const fetchUser = async () => {
      if (urlSplit[1] === "profile" && urlSplit[2] !== undefined && wallet) {
        try {
          const result = await wallet.viewMethod({
            contractId: process.env.NEXT_PUBLIC_CONTRACT_NAME || "",
            method: "get_user_metadata_by_user_id",
            args: {
              user_id: urlSplit[2],
            }
          });
          setUser(result);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, [wallet, isLoading]);

  return (
    <section className="max-w-[1440px] mx-auto lg:w-3/4 px-2 pt-4 text-gray-900">
      {/* User Information */}
      <UserInfo userdata={user} />
      {courses.map((course) => (
        <Courses course={course} key={course.course_id} />
      ))}
      {/* Courses */}
    </section>
  );
};

export default ProfileDetail;
