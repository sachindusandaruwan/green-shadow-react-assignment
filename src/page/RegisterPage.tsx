import signUpIMg from '../assests/signUp.png';
import '../css/Pages/SignUp.css'

export const RegisterPage = () => {
    return (
        <div className="main-container w-100">
            <div className="content-container">
                <img src={signUpIMg} alt="Login visual"/>
                <div className="login-card">
                    <h4 className="text-center mb-3">Green Shadow</h4>
                    <form>
                        <h5>Create Account</h5>
                        <label htmlFor="floatingInput"><h6>E-mail address</h6></label>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control email-input"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <label htmlFor="floatingPassword"><h6>Password</h6></label>
                        <div className="form-floating">
                            <input
                                type="password"
                                className="form-control password-input"
                                id="floatingPassword"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <label htmlFor="floatingPassword"><h6>Role</h6></label>
                        <select
                            className="form-select role-select"
                            id="floatingSelect"
                            aria-label="Floating label select example"
                        >
                            <option selected>Choose an option</option>
                            <option value="MANAGER">MANAGER</option>
                            <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                            <option value="SCIENTIST">SCIENTIST</option>
                            <option value="OTHER">OTHER</option>
                        </select>
                        <div className="login-btn-div">
                            <button className="shadow__btn" id="singup-btn">signUp</button>
                        </div>
                        <div className="links">
                            <h6>Already have Account ? <a href="/index.html">Login</a></h6>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};