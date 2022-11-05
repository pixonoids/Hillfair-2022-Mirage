import React, { useState } from "react";
import { Formik, Form } from "formik";
import contactValidation from "../../../services/validation/contact";
import { ErrorMessage, Field } from "formik";
import "./Contact.scss";
import GeneralButton from "../../molecules/GeneralButton/GeneralButton";

let currentTime = new Date();
let hour = currentTime.getHours();

export default function Contact() {
  const [submit, setSubmit] = useState("Submit");
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleSubmit = (values) => {
    setSubmit("Submitted");
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <img
        src="/images/hillfair-logo-light.png"
        alt="hillffair logo"
        className="contactlogo"
      ></img>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(values, {resetForm}) => {
          handleSubmit(values)
          resetForm({values:''})
        }}
        validationSchema={contactValidation}
      >
        {() => (
          <Form>
            <div className="form-first">
              <label htmlFor=""></label>
              <div className="form-field">
                <Field name="name" placeholder="Your Name" autoComplete='off' />
                <label htmlFor=""></label>
                <ErrorMessage
                  component="div"
                  name="name"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-field">
                <Field name="email" placeholder="Your Email" autoComplete='off' />

                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback" />
              </div>
            </div>
            <div className="form-second">
              <label htmlFor=""></label>
              <div className="form-field">
                <Field
                  component="textarea"
                  name="message"
                  placeholder="Your message here"
                  style={{
                    resize: 'none'
                  }}
                />
                <ErrorMessage
                  component="div"
                  name="message"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <button
              type="submit"
              className="contactbtn"
              style={{
                borderColor: hour >= 6 && hour <= 17 ? "#ffb85c" : "#fff",
                backgroundColor: (hour >= 6 && hour <= 17 && isHovering) ? '#7c4730' : ''
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {submit}
            </button>
            <a className="download-app" href="#"><GeneralButton text="Download App" /></a>
          </Form>
        )}
      </Formik>
    </div>
  );
}

