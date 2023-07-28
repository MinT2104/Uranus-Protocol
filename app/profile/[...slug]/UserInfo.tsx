import React, { useState } from "react";
import { UserInterface } from "@/types";
import Image from "next/image";

interface IUserInfoInterface {
  userdata: UserInterface | null;
}

const UserInfo = (props: IUserInfoInterface) => {
  const { userdata } = props;
  const [showResume, setShowResume] = useState(false); // State to manage the visibility of the pop-up

  if (!userdata) {
    // Nếu userdata là null hoặc undefined, hiển thị một nội dung fallback hoặc hãy trả về null tùy theo yêu cầu.
    return null;
  }


  const {
    metadata: {
      avatar,
      role,
      nickname,
      first_name,
      last_name,
      courses_owned,
      students,
      bio,
      created_at,
      updated_at,
      resume,
      total_credit,
    },
  } = userdata;

  const toggleResume = () => {
    setShowResume((prevState) => !prevState); // Toggle the visibility state of the pop-up
  };


  return (
    <div className="border border-gray-400 rounded-md grid grid-cols-8 px-2 py-4">
      <div className="col-span-2 text-center flex flex-col justify-start items-center">
        <img
          src={avatar ? avatar : "/images/logo.jpg"}
          alt="avatar"
          className="w-40 h-40 rounded-full border-8 border-gray-800 object-center object-cover"
        />
        <h1>
          <span className="font-bold">{role}:</span> {nickname}
        </h1>
      </div>
      <div className="col-span-2">
        <h1>
          <span className="font-bold">Fullname:</span> {first_name} {""}{" "}
          {last_name}
        </h1>
        <h1>
          <span className="font-bold">Courses Onwed:</span> {courses_owned}
        </h1>
        <h1>
          <span className="font-bold">Students:</span> {students}
        </h1>
      </div>
      <div className="col-span-4">
        <h2 className="font-bold">Bio: </h2>
        <p>{bio}</p>
        <p>
          <span className="font-bold">Created at</span>:{" "}
    {created_at ? new Date(created_at).toLocaleString() : "N/A"}
        </p>
        <p>
          <span className="font-bold">Updated at</span>:{" "}
    {updated_at ? new Date(updated_at).toLocaleString() : "N/A"}
        </p>

        {/* Button to show the Image Resume */}
        <button onClick={toggleResume} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Show Resume
        </button>

        {/* Pop-up with the Image component */}
        {showResume && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="relative">
              <button
                onClick={toggleResume}
                className="absolute top-4 right-4 text-gray-500 font-bold cursor-pointer"
              >
                X
              </button>
              <Image
                src={resume ? resume : ""}
                alt="resume"
                width={600}
                height={1000}
                className="max-h-3/5 object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
