import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import './FirstPage.scss'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { default as GeneralButton } from '../../components/molecules/GeneralButton/GeneralButton'
import { RegisterSponsors, RegisterAudience, RegisterParticipants, RegisterGuest, RegisterAlumni } from '../../components/molecules'
import validateSchema from '../../services/validation/firstPage'
import RegisterPartipants from '../../components/molecules/RegisterParticipants/RegisterParticipants'
import logo from '/images/hillfair-logo-light.png'

let currentTime = new Date();
let hour = currentTime.getHours();
const RegisterPage = function () {

  const [category, setCategory] = useState(null)
  const firstPageValue = useRef({});

  const navigate = useNavigate();
  const pdf = (values) => {
    navigate('/download', { state: values })
  }




  return (

    <div className='registerContainer' style={{
      backgroundImage: (hour >= 6 && hour <= 16) ? 'linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)' : 'linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)'
    }}>
      {(category == null) && <div className='formContainer'>
        <h1 className='guestHeading'>Register</h1>
        <img src={logo} alt="logo" />
        <Formik
          initialValues={{ email: '', contact: '', address: '', category: '', name: '' }}
          onSubmit={(values, actions) => {
            setCategory(values.category)
            firstPageValue.current = values;
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
          validationSchema={validateSchema}
        >

          {(values) => (
            <Form className='formWrapper'>

              <div className="fieldWrapper">
                <label className="placeholder" htmlFor="email">Name:</label>
                <Field className="input-text" type="Name" name="name" placeholder=" Name" />
                <ErrorMessage
                  component="div"
                  name="firstName"
                  className="invalid-feedback"

                />

              </div>
              {/* <div className="fieldWrapper">
                <label className="placeholder" htmlFor="category">Last Name:</label>
                <Field className="input-text" type="lastName" name="lastName" placeholder="Last Name" />
                <ErrorMessage
                  component="div"
                  name="lastName"
                  className="invalid-feedback"
                />
              </div> */}
              <div className="fieldWrapper">
                <label className="placeholder" htmlFor="email">Email:</label>
                <Field className="input-text" type="firstName" name="email" placeholder="Email" />

                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </div>
              <div className="fieldWrapper"> <label className="placeholder" htmlFor="contact">Contact No:</label>
                <Field className="input-text" type="firstName" name="contact" placeholder="Contact No" />

                <ErrorMessage
                  component="div"
                  name="contact"
                  className="invalid-feedback"
                /></div>
              <div className="fieldWrapper"> <label className="placeholder" htmlFor="address">Address:</label>
                <Field className="input-text" type="firstName" name="address" placeholder="Contact No" />

                <ErrorMessage
                  component="div"
                  name="address"
                  className="invalid-feedback"
                /></div>
              <div className="fieldWrapper">
                <div className='radio-container'>

                  <span className='placeholder'> Who are you</span>
                  <label>
                    <Field type="radio" name="category" value="audience" />
                    <span> Audience</span>
                  </label>

                  <label>
                    <Field type="radio" name="category" value="participant" />
                    <span> Partcipant/Performer</span>
                  </label>
                  <label>
                    <Field type="radio" name="category" value="guest" />
                    <span> Guest</span>
                  </label>
                  <label>
                    <Field type="radio" name="category" value="sponsor" />
                    <span>Sponsor</span>
                  </label>
                  <label>
                    <Field type="radio" name="category" value="alumini" />
                    <span>Alumini</span>
                  </label>
                  <ErrorMessage
                    component="div"
                    name="category"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <GeneralButton text="next" type={"submit"} />
            </Form>
          )}
        </Formik>

      </div>}

      {(category == "audience") && <RegisterAudience previousvalue={firstPageValue.current} />}
      {(category == "guest") && <RegisterGuest previousvalue={firstPageValue.current} />}
      {(category == "alumini") && <RegisterAlumni previousvalue={firstPageValue.current} />}
      {(category == "participant") && <RegisterPartipants previousvalue={firstPageValue.current} />}
      {(category == "sponsor") && <RegisterSponsors previousvalue={firstPageValue.current} />}
    </div>)
}


export default RegisterPage;
