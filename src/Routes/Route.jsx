import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/Contact/ContactUs";
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/Products/ProductsDetails";
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
                path: '/product-details/:id',
                element: <ProductsDetails />,
                loader: async ({ params }) => {
                    const response = await fetch(`/freshProduct.json`);
                    const products = await response.json();
                    const product = products.find(p => p._id === params.id);
                    return product;
                }
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

            {
                path: '/service/:id',
                element: <>service</>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/service/${params.id}`)
            },

        ]
    }
])

export default router;
