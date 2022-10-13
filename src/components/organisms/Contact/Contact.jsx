import React from "react";
import { Formik, Form } from "formik";
import FormField from "../../molecules/FormField/FormField";
import "./Contact.scss";
let currentTime = new Date();
let hour = currentTime.getHours();

export default function Contact() {
  return (
    <div className="contact">
      <img
        src="/images/hillfair-logo-light.png"
        alt="hillffair logo"
        className="contactlogo"
      ></img>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
      >
        {() => (
          <Form>
            <div className="form-first">
              <label htmlFor=""></label>
              <FormField name="name" placeholder="Your Name" />
              <label htmlFor=""></label>
              <FormField name="email" placeholder="Your Email" />
            </div>
            <div className="form-second">
              <label htmlFor=""></label>
              <FormField
                component="textarea"
                name="message"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="contactbtn"
              style={{
                borderColor: hour >= 9 && hour <= 16 ? "#ffb85c" : "#fff",
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
