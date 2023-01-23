import React from 'react';
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from '../../Layouts/Main/Main';
import Aboutme from '../../Pages/AboutMe/Aboutme';
import Blog from '../../Pages/Blog/Blog';
import BlogDetails from '../../Pages/BlogDetails/BlogDetails';
import Contact from '../../Pages/Contact/Contact';
import Details from '../../Pages/Details/Details';
import Home from '../../Pages/Home/Home';
import NotFound from '../../Pages/NotFount/NotFound';
import Projects from '../../Pages/Projects/Projects';
import MyResume from '../../Pages/Resume/MyResume';
import Skills from '../../Pages/Skills/Skills';


const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path:'/projects',
                    element:<Projects></Projects>
                },
                {
                    path:'/details/:id',
                    loader: async () => {
                       return fetch('https://timothykroll.github.io/projects/projects.json')
                    },
                    element: <Details></Details>
                },
                {
                    path:'/aboutme',
                    element: <Aboutme></Aboutme>
                },
                {
                    path:'/blog',
                    element: <Blog></Blog>
                },
                {
                    path:'/contact',
                    element: <Contact></Contact>
                },
                {
                    path:'/skills',
                    element: <Skills></Skills>
                },
                {
                    path:'/resume',
                    element: <MyResume></MyResume>
                },
                {
                    path:'/blogdetails/:id',
                    loader: async () => {
                       return fetch('https://timothykroll.github.io/blog/blog.json')
                    },
                    element: <BlogDetails></BlogDetails>
                }
            ]
        },
        {
            path:'*',
            element: <NotFound></NotFound>
        }
    ]);

    return (
        <RouterProvider router={router} />

    );
};

export default Router;