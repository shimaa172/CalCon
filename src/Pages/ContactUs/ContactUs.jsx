import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../../Pages/Home/Home.module.css";
import classes from "./ContactUs.module.css";
import Footer from "../../Components/Footer/Footer";
import { toast, ToastContainer } from "react-toastify";
import Nav from "../../Components/Nav/Nav";

const ContactUs = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
      toast.success("🦄Your message is received ", { autoClose: 2000 });
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/i;

    if (!values.firstName) {
      errors.firstName = "*firstName is required!";
    } else if (values.firstName.length < 6) {
      errors.firstName = "*FirstName is so short ";
    }
    if (!values.lastName) {
      errors.lastName = "*lastName is required!";
    } else if (values.lastName.length < 6) {
      errors.lastName = "*LastName is so short ";
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

    return errors;
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className={`w-100 ${classes.containerWr}`}>
        <Nav/>
        <div className={`position-relative mt-3 ${classes.div1}`}>
          <div className={`position-absolute  ${classes.aboutDiv}`}>
            <h1>
              <b>Contact Us</b>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut.
            </p>
          </div>
          <div className={`position-absolute  ${classes.imgDiv}`}>
            <img
              src="images/Social media-cuate.png"
              className={`img-fluid h-100 w-100 `}
              alt="Not Found"
            />
          </div>
        </div>
        <div className={` ${classes.div2}`}>
          <div className={`${classes.divform}`}>
            <h2 className="form-headline my-5">
              <b>Send us a Message</b>
            </h2>
            <form onSubmit={reg}>
              <div className="d-flex flex-column align-items-center justify-content-center ">
                <input
                  type="text"
                  className={`inputSty ${classes.input}`}
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                  placeholder="&#xf007;  First Name"
                />
                <small className=" text-danger ">{formErrors.firstName}</small>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center ">
                <input
                  type="text"
                  className={`inputSty ${classes.input}`}
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleChange}
                  placeholder="&#xf007;  Last Name"
                />
                <small className=" text-danger ">{formErrors.lastName}</small>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center ">
                <input
                  type="tel"
                  className={`inputSty ${classes.input} `}
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder="&#xf10b;  Phone number"
                />
                <small className=" text-danger ">{formErrors.phone}</small>
              </div>
              <div className="d-flex  flex-column align-items-center justify-content-center ">
                <input
                  type="email"
                  className={`inputSty ${classes.input} ${styles.inputStyOver}`}
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="&#xf0e0;  Email"
                />
                <small className=" text-danger ">{formErrors.email}</small>
              </div>
              <div className={` ${classes.fullwidth}`}>
                <textarea
                  className="pt-3"
                  minLength="20"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Your Message*"
                  required
                ></textarea>
                <small></small>
              </div>
              <div
                className={`d-flex justify-content-center mb-5 ${classes.fullwidth}`}
              >
                <input
                  type="submit"
                  className={`bttn ${styles.btnOverSign}`}
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
        <div className={`position-relative mt-3 ${classes.div3}`}>
          <div className={`position-absolute  ${classes.ImgDiv}`}>
            <img
              src="images/Directions-cuate.png"
              className={`img-fluid h-100 w-100 `}
              alt="Not Found"
            />
          </div>
          <div className={`position-absolute   ${classes.contactDiv}`}>
            <h3 className={` mb-5`}>
              <b>
                <span>Another Way</span>
              </b>
            </h3>
            <p className={`text-black pb-3`}>
              <i
                contactus={`fa fa-phone  me-4 ${classes.circle} ${classes.phone}`}
              ></i>
              <b>(+20) 109030226</b>
            </p>
            <div
              className={` my-4 w-100 ${classes.line}`}
              style={{ flex: 1, height: "2px", backgroundColor: "#F4F4F4" }}
            />
            <p className={`text-black pb-3`}>
              <i
                contactus={`fa fa-envelope  me-4 ${classes.circle} ${classes.email}`}
              ></i>
              <b>info@example.com</b>
            </p>
            <div
              className={` my-4 w-100  ${classes.line}`}
              style={{ flex: 1, height: "2px", backgroundColor: "#F4F4F4" }}
            />
            <i
              contactus={`fa-brands fa-facebook-f me-5 ${classes.circle} ${classes.facebook}`}
            ></i>
            <i
              contactus={`fa-brands fa-twitter me-5  ${classes.circle} ${classes.twitter}`}
            ></i>
            <i
              contactus={`fa-brands fa-instagram  ${classes.circle} ${classes.instagram}`}
            ></i>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ContactUs;
