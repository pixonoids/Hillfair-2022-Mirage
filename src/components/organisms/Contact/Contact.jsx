import React,{useState} from "react";
import { Formik, Form } from "formik";
import FormField from "../../molecules/FormField/FormField";
import "./Contact.scss";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();

let currentTime = new Date();
let hour = currentTime.getHours();

export default function Contact() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
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
              <FormField name="name" placeholder="Your Name" autoComplete='off'/>
              <label htmlFor=""></label>
              <FormField name="email" placeholder="Your Email" autoComplete='off' />
            </div>
            <div className="form-second">
              <label htmlFor=""></label>
              <FormField
                component="textarea"
                name="message"
                placeholder="Your message"
                style={{
                  resize:'none'
                }}
              />
            </div>
            <button
              type="submit"
              className="contactbtn"
              style={{
                borderColor: hour >= 6 && hour <= 17 ? "#ffb85c" : "#fff",
                backgroundColor:(hour>=6 && hour<=17 && isHovering)?'#7c4730':''
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

