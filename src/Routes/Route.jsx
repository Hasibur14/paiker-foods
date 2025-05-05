import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/Contact/ContactUs";
import Products from "../Pages/Products/Products";
import WholesaleExport from "../Pages/WholesaleExport/WholesaleExport";




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
                path: '/wholesale-export',
                element: <WholesaleExport />
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
