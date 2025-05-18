import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about-us',
        element: <About />
    },
    {
        path: '/contact-us',
        element: <Contact />
    }
])

export default appRouter;