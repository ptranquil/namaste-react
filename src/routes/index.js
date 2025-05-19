import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import Body from "../components/Body";
import RestaurantDetails from "../components/RestaurantDetails";

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
                path: '/restaurant/:resId',
                element: <RestaurantDetails />
            }
        ],
        errorElement: <ErrorPage />
    }
])

export default appRouter;