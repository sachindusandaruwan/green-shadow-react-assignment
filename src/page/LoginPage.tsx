import {Link} from "react-router-dom";

export const LoginPage = () => {
    return (
        <>
            <h1>hello login page</h1>
            <h5 >
                Don’t have an account ?
                <Link to="/register" className="text-decoration-none ms-1">Register</Link> Now.
            </h5>
        </>
    );
};