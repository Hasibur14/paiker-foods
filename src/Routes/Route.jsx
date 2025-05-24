import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/Contact/ContactUs";
import Products from "../Pages/Products/Products";
import OurBusiness from "../Pages/OurBusiness/OurBusiness";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/Blogs/BlogDetails";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/our-business',
                element: <OurBusiness />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/blog-details/:id',
                element: <BlogDetails />,
            
            },

            {
                path: '/contact',
                element: <ContactUs />
            },

        ]
    }
])

export default router;
