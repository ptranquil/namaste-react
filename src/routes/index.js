import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import Body from "../components/Body";
import RestaurantMenu from "../components/RestaurantMenu";
// import { Grocery } from "../components/Grocery";

const Grocery = lazy(() => import("../components/Grocery"))

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about-us',
                element: <About />
            },
            {
                path: '/contact-us',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading</h1>}><Grocery /></Suspense>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <ErrorPage />
    }
])

export default appRouter;