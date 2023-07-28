import { CoursesPerInstructor } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface ICoursesProps {
  course: CoursesPerInstructor
}

const Courses = (props: ICoursesProps) => {
  return (
    <Link className="flex space-x-4 pt-4" href={`/course/${props.course.course_id}`}>
      <Image src={props.course.media ? props.course.media : ""} alt="course image" width={400} height={250}/>
      <div className="">
        <h1><span className="font-bold">Title:</span> {props.course.title}</h1>
        <p><span className="font-bold">Created At:</span> {props.course.created_at}</p>
        <p><span className="font-bold">Rating:</span> {props.course.rating}</p>
        <p><span className="font-bold">Rating Count:</span> {props.course.rating_count}</p>
        <span><span className="font-bold">Description:</span>{props.course.description ? props.course.description : "Don't Have"}</span>
      </div>
    </Link>
  )
}

export default Courses
