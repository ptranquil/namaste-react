import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h1>ErrorPage</h1>
            <h2>{err.status+"  "+err.statusText}</h2>
            <h3>Info : {err.data}</h3>
        </div>
    )
}

export default ErrorPage;