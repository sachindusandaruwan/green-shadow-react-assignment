import {Link} from "react-router-dom";

export const RegisterPage = () => {
    return (
        <>
            <h1>hello register page</h1>
            <h5 className="switchForm">Already have an account ? <Link to={"/"}>Login</Link> Now. </h5>

        </>
    );
};