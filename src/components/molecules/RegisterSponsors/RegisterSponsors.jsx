import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react'
import { useNavigate } from "react-router-dom";
import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterSponsors.scss'
import logo from '/images/hillfair-logo-light.png'
import sponsorValidation from '../../../services/validation/sponsorValidation';
import addUser from '../../../services/firebase/register'
let currentTime = new Date();
let hour = currentTime.getHours();

const RegisterSponsors = ({ previousvalue }) => {

  const navigate = useNavigate();
  const pdf = (values) => {
    navigate('/download', { state: values })
  }

  const handleSubmit = (values) => {
    // alert(values)
    addUser(values)
    pdf(values)
  }

  return (
    <Formik
      initialValues={{ company: '', gst: '' }}
      onSubmit={(values, actions) => {
        Object.assign(values, previousvalue);
        handleSubmit(values)
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={sponsorValidation}
    >
      <div className='registerContainerSponsors'
        style={{
          backgroundImage: (hour >= 6 && hour <= 16) ? 'linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)' : 'linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)'
        }}>


        <div className='formContainer'>
          <h1 className='guestHeading'>Sponsor Register</h1>
          <img src={logo} alt="logo" />
          <Form className='formWrapper'>

            <div className="fieldWrapper">
              <label>Company:</label>
              <Field type="text" name="company" />
              <ErrorMessage component="div" name="company" className='invalid-feedback' />
            </div>

            <div className="fieldWrapper">
              <label>GST No.</label>
              <Field type="text" name="gst" />
              <ErrorMessage component="div" name="gst" className='invalid-feedback' />
            </div>
            <GeneralButton text="Submit" />

          </Form>
        </div>
      </div>
    </Formik>
  )
}
export default RegisterSponsors;