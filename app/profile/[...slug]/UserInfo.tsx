import { UserInterface } from "@/types";
import Image from "next/image"

interface IUserInfoInterface {
  userdata: UserInterface | null
}

const UserInfo = (props: IUserInfoInterface) => {
  return (
    <div className="border border-gray-400 rounded-md grid grid-cols-8 px-2 py-4">
      <div className="col-span-2 text-center flex flex-col justify-start items-center">
        <Image src={props.userdata?.metadata.avatar || "/images/logo.jpg"} height={200} width={200} alt="Avatar Instructor" className="rounded-full border-8 border-gray-800"/>
        <h1><span className="font-bold">{props.userdata?.metadata.role}:</span> {props.userdata?.metadata.nickname}</h1>
      </div>
      <div className="col-span-2">
        <h1><span className="font-bold">Fullname:</span> {props.userdata?.metadata.first_name} {" "} {props.userdata?.metadata.last_name}</h1>
        <h1><span className="font-bold">Courses Onwed:</span> {props.userdata?.metadata.courses_owned}</h1>
        <h1><span className="font-bold">Students:</span> {props.userdata?.metadata.students}</h1>
      </div>
      <div  className="col-span-4">
        <h2 className="font-bold">Bio: </h2>
        <p>{props.userdata?.metadata.bio}</p>
        <p><span className="font-bold">Created at</span>: {new Date((props.userdata?.metadata.created_at ?? 0)).toLocaleString()}</p>
        <p><span className="font-bold">Updated at</span>: {new Date((props.userdata?.metadata.updated_at ?? 0)).toLocaleString()}</p>
      </div>
    </div>
  )
}

export default UserInfo;
