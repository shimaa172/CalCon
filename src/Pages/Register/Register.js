import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../Login/Login.module.css";
import classes from "./Register.module.css";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confpass: "",
    phone: "",
    birth: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const reg = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    // API Validation (Wrong or True)
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(initialValues);
      toast.success("🦄You have been Registered", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/goal");
      }, 3000);
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/i;

    if (!values.username) {
      errors.username = "*Username is required!";
    } else if (values.username.length < 6) {
      errors.username = "*Username is so short ";
    }
    if (!values.email) {
      errors.email = "*Email is required!";
    } else if (!reEmail.test(values.email)) {
      errors.email = "*This is not a valid email format!";
    }
    const rePhone = /^01[0-3]{1}[0-9]{8}/i;
    if (!values.phone) {
      errors.phone = "*Phone is required!";
    } else if (!rePhone.test(values.phone)) {
      errors.phone = "*This is not a valid phone format!";
    }
    if (!values.password) {
      errors.password = "*Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "*Password must be more than 6 characters";
    }
    if (!values.birth) {
      errors.birth = "*BirthDate is required!";
    }
    if (!values.confpass) {
      errors.confpass = "*Confirm password is required!";
    }
    if (values.password != values.confpass) {
      errors.confpass = "*Confirm password should be match with password!";
    }

    return errors;
  };
  return (
    <>
      <ToastContainer />
      <div className={`container-fluid `}>
        <div className={` row  vw-100 min-vh-100 ${classes.l_side}`}>
          <div
            className={` flex-column align-items-center justify-content-center col-5 col-xxl-5 col-lg-5 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block p-5 ${classes.sideHid}`}
          >
            <div className="text-center ">
              <img className="img-fluid " src="images/footerLogo.png" />
            </div>
            <h4 className="mt-4 text-center text-white">
              Let's begin our journey{" "}
            </h4>
            <h4 className="text-center text-white">together!</h4>
          </div>
          <div
            className={`d-flex flex-column align-items-center justify-content-center col-lg-7 col-sm-12  ${classes.r_side}`}
          >
            <div className={`p-4 w-50 ${classes.RightDivContent}`}>
              <p className="text-center">Create your Account</p>
              <form
                className={`d-flex flex-column align-items-center  ${styles.loginForm}`}
                onSubmit={reg}
              >
                <div className="w-100 mb-1">
                  <input
                    type="text"
                    className={`inputSty`}
                    value={formValues.username}
                    onChange={handleChange}
                    placeholder="&#xf007;  Username"
                    name="username"
                  />
                  <small className=" text-danger ">{formErrors.username}</small>
                </div>
                <div className="w-100 mb-1">
                  <input
                    type="email"
                    className={`inputSty ${styles.inputStyOver}`}
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="&#xf0e0;  Email"
                    name="email"
                  />
                  <small className=" text-danger ">{formErrors.email}</small>
                </div>
                <div className="w-100 mb-1">
                  <input
                    type="password"
                    className={`inputSty `}
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="&#xf023;  Password"
                    name="password"
                  />
                  <small className=" text-danger ">
                    {" "}
                    {formErrors.password}
                  </small>
                </div>
                <div className="w-100 mb-1">
                  <input
                    type="password"
                    className={`inputSty `}
                    value={formValues.confpass}
                    onChange={handleChange}
                    placeholder="&#xf023;  Confirm password"
                    name="confpass"
                  />
                  <small className=" text-danger ">
                    {" "}
                    {formErrors.confpass}
                  </small>
                </div>
                <div className="w-100 mb-1">
                  <input
                    type="tel"
                    className={`inputSty `}
                    value={formValues.phone}
                    onChange={handleChange}
                    placeholder="&#xf10b;  Phone number"
                    name="phone"
                  />
                  <small className=" text-danger ">{formErrors.phone}</small>
                </div>
                <div className="w-100 mb-1">
                  <input
                    type="text"
                    className={`inputSty `}
                    value={formValues.birth}
                    onChange={handleChange}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    placeholder="&#xf073;  Date of birth"
                    name="birth"
                  />
                  <small className=" text-danger">{formErrors.birth}</small>
                </div>
                <div className="w-100 d-flex flex-column align-items-center">
                  <input
                    type="submit"
                    className={`bttn ${styles.btnOverSign}`}
                    value="Sign Up"
                  />
                  <p className={`text-black mt-3 ${classes.lastP}`}>
                    <b>Already Have Account?</b>{" "}
                    <Link className="link" to="/login">
                      <b className={`text-black`}>Log in</b>
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

export default Register;
