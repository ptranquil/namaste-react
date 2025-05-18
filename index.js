import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./src/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={appRouter}/>)