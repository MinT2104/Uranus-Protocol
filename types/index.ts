export interface UserInterface {
  user_id: string;
  metadata: {
    user_id: string;
    nickname: string | null;
    role: string;
    total_credit: number | null;
    students: number | null;
    first_name?: string | null;
    last_name?: string | null;
    bio?: string | null;
    avatar?: string | null;
    resume: string;
    created_at: number | null;
    updated_at: number | null;
    courses_owned: number | null;
  };
  skill?: {};
  certificate?: [];
  courses?: [];
}

export interface CoursesPerInstructor {
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

export const defaultUserState = (): UserInterface => ({
  user_id: '',
  metadata: {
    user_id: '',
    nickname: null,
    role: '',
    total_credit: null,
    students: null,
    first_name: null,
    last_name: null,
    bio: null,
    avatar: "/images/logo.jpg",
    resume: '',
    created_at: null,
    updated_at: null,
    courses_owned: null
  },
  skill: {},
  certificate: [],
  courses: [],
});

export const defaultCoursesPerInstructorState = (): [CoursesPerInstructor] => ([{
  content: null,
  course_id: null,
  created_at: 0,
  instructor_id: '',
  media: "/images/logo.jpg",
  price: 0,
  rating: 0,
  rating_count: 0,
  students_completed: {},
  students_studying_map: {},
  title: null
}]);
