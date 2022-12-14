import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styles from "./Login.module.css";
import classes from "../Register/Register.module.css";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formSubmitter = (e) => {
    e.preventDefault();
    setFormErrors(validate(input));
    // API Validation (Wrong or True)
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setInput({ email: "", password: "" });
      toast.success("🦄 You are logged in successfully!", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!reEmail.test(values.email)) {
      errors.email = "*This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "*Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "*Password must be more than 6 characters";
    }

    return errors;
  };

  return (
    <>
      <ToastContainer />
      <div className={`container-fluid `}>
        <div className={`row vw-100 min-vh-100 ${styles.l_side}`}>
          <div
            className={`flex-column align-items-center justify-content-center col-5 col-xxl-5 col-lg-5 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block p-5 ${styles.sideHid} `}
          >
            <div className="text-center  ">
              <img className="img-fluid " src="images/footerLogo.png" />
            </div>
            <h4 className="mt-4 text-center text-white">
              Start calculating your calories{" "}
            </h4>
            <h4 className="text-center text-white">now!</h4>
          </div>
          <div
            className={`d-flex flex-column align-items-center justify-content-center col-lg-7 col-sm-12 ${classes.r_side}`}
          >
            <div className={`p-4 w-50 ${classes.RightDivContent}`}>
              <p className="text-center">Welcome To</p>
              <h1 className="text-center">
                <i>
                  CAL<b>CON</b>
                </i>
              </h1>
              <p className="text-center">
                <b>Login To Continue</b>
              </p>
              <form
                className={`d-flex flex-column align-items-center ${styles.loginForm}`}
                onSubmit={formSubmitter}
              >
                <div className="w-100 mb-3">
                  <input
                    className={`inputSty w-100`}
                    type="email"
                    name="email"
                    value={input.email}
                    placeholder="&#xf0e0;  Email"
                    onChange={handleChange}
                    required
                  />
                  <small className={`text-danger ${styles.forget}`}>
                    {formErrors.email}
                  </small>
                </div>
                <div className="w-100">
                  <input
                    className={`inputSty`}
                    type="password"
                    name="password"
                    value={input.password}
                    placeholder="&#xf023;  Password"
                    onChange={handleChange}
                    required
                  />
                  <small className={`my-2 text-danger  ${styles.forget}`}>
                    {formErrors.password}
                  </small>
                  <div className={`${styles.forget}`}>
                    <Link to="/reset-password">
                      <b>Forget your Password ?</b>
                    </Link>
                  </div>
                </div>
                <div className="w-100  d-flex flex-column align-items-center">
                  <input
                    className={`bttn  ${styles.btnOver} my-2`}
                    type="submit"
                    value="Log in"
                  />
                  <a
                    className={`my-3 bttn  bg-primary w-100 text-center`}
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <i className={`fa-brands fa-facebook-f pe-4`}></i>
                    <b>Login in with Facebook</b>
                  </a>
                  <a
                    className={`my-3 w-100 ${styles.google} text-center`}
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className={`fa-solid fa-g pe-4 `}></i>
                    <b className="pe-4">Login in with Gmail</b>
                  </a>
                  <p className={`text-black ${classes.lastP}`}>
                    <b>Don't Have Account ?!</b>{" "}
                    <Link className="link" to="/register">
                      <b className={`text-black`}>Sign UP</b>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
