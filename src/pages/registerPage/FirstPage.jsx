import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import './FirstPage.scss'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { default as GeneralButton } from '../../components/molecules/GeneralButton/GeneralButton'
import { RegisterSponsors, RegisterAudience, RegisterParticipants, RegisterGuest, RegisterAlumni, PalmRegister } from '../../components/molecules'
import validateSchema from '../../services/validation/firstPage'
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
      backgroundImage: (hour >= 6 && hour <= 17) ? 'linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)' : 'linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)'
    }}>
      <PalmRegister />

      {(category == null) && <div className='formContainer'>
        <h1 className='guestHeading'>Register</h1>
        <img src={logo} alt="logo" />
        <Formik
          initialValues={{ email: '', contact: '', address: '', checkin: '2022-11-04T18:08', checkout: '2022-11-04T18:08', category: '', name: '', accept_terms: [] }}
          onSubmit={(values, actions) => {
            setCategory(values.category)
            firstPageValue.current = values;
            setTimeout(() => {
              actions.setSubmitting(false);
            }, 1000);
          }}
          validationSchema={validateSchema}
        >

          {(values) => (
            <Form className='formWrapper'>

              <div className="fieldWrapper">
                <label className="placeholder" htmlFor="email">Name:</label>
                <Field autoComplete="off" className="input-text" type="Name" name="name" placeholder="Your name here" />
                <ErrorMessage
                  component="div"
                  name="name"
                  className="invalid-feedback"
                />
              </div>

              <div className="fieldWrapper">
                <label className="placeholder" htmlFor="email">Email:</label>
                <Field autoComplete="off" className="input-text" type="firstName" name="email" placeholder="abc@xyz.com" />

                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </div>
              <div className="fieldWrapper"> <label className="placeholder" htmlFor="contact">Contact No:</label>
                <Field autoComplete="off" className="input-text" type="firstName" name="contact" placeholder="XXXXXXXXXXXX" />

                <ErrorMessage
                  component="div"
                  name="contact"
                  className="invalid-feedback"
                /></div>
              <div className="fieldWrapper"> <label className="placeholder" htmlFor="address">Address:</label>
                <Field autoComplete="off" className="input-text" type="firstName" name="address" placeholder="Address" />

                <ErrorMessage
                  component="div"
                  name="address"
                  className="invalid-feedback"
                /></div>
              <div className="fieldWrapper"> <label className="placeholder" htmlFor="checkin">Check in:</label>
                <Field className="input-text calender" type="datetime-local" name="checkin" />
                <ErrorMessage
                  component="div"
                  name="checkin"
                  className="invalid-feedback"
                /></div>

              <div className="fieldWrapper"> <label className="placeholder" htmlFor="checkout">Check out:</label>
                <Field className="input-text calender" type="datetime-local" name="checkout" />
                <ErrorMessage
                  component="div"
                  name="checkout"
                  className="invalid-feedback"
                /></div>
              <div className="fieldWrapper">
                <div className='radio-container'>

                  <span className='radio-heading'> Who are you</span>
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
                    <span>Alumni</span>
                  </label>
                  <ErrorMessage
                    component="div"
                    name="category"
                    className="invalid-feedback"
                  />
                </div>
              </div>
              <div className="fieldWrapper">
                <label>
                  <Field className="input-text" title="Please tick" name="accept_terms" type="checkbox" value="true" style={{ translate: '-10% 20%', scale: "1.25" }} />
                  <span className='acknowledgement'>I accept the <a href="/pdf/stayingCharges.pdf" target={'_blank'}>terms and conditions</a></span>
                </label>
                <ErrorMessage
                  component="div"
                  name="accept_terms"
                  className="invalid-feedback"
                />
              </div>
              <GeneralButton text="Next" type={"submit"} />
            </Form>
          )}
        </Formik>
      </div>
      }
      {(category == "audience") && <RegisterAudience previousvalue={firstPageValue.current} />}
      {(category == "guest") && <RegisterGuest previousvalue={firstPageValue.current} />}
      {(category == "alumini") && <RegisterAlumni previousvalue={firstPageValue.current} />}
      {(category == "participant") && <RegisterParticipants previousvalue={firstPageValue.current} />}
      {(category == "sponsor") && <RegisterSponsors previousvalue={firstPageValue.current} />}
    </div>)
}


export default RegisterPage;
