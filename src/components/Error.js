import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error">
            <h1>Error Page</h1>
            <h3>Oops You Landed Nowhere!</h3>
            <h4>{err.status + ": "} {err.statusText}</h4>
        </div>
    );
}

export default Error;