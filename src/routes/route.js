import { createBrowserRouter } from "react-router-dom";
import Course from "../components/Course/Course";
import Login from "../components/Login/Login";
import RightSideNav from "../components/RightSideNav/RightSideNav";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layout/Main";
import CheckOut from "../pages/CheckOut/CheckOut";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {

        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
            },

            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <Course></Course>
            }, {
                path: '/courses/checkout/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <CheckOut></CheckOut>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }

        ]

    }
])