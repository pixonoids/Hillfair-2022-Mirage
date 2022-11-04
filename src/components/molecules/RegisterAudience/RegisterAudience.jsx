import React from 'react'
import { useNavigate } from "react-router-dom";
import './RegisterAudience.scss'
import { Field, Form, Formik, ErrorMessage } from 'formik';
import addUser from '../../../services/firebase/firebase'
import GeneralButton from '../GeneralButton/GeneralButton';
import audienceValidation from '../../../services/validation/audienceValidation';
import logo from '/images/hillfair-logo-light.png'
import { number } from 'yup';
let currentTime = new Date();
let hour = currentTime.getHours();


const RegisterAudience = ({ previousvalue }) => {

  const navigate = useNavigate();
  const pdf = (values) => {
    navigate('/download', { state: values })
  }

  const handleSubmit = (values) => {

    addUser(values)
    pdf(values)
  }
  return (
    <Formik

    initialValues={{  emergency: '',  aadhaar: '' }}


      onSubmit={(values, actions) => {
        Object.assign(values, previousvalue);
        handleSubmit(values)
      setTimeout(() => {
        actions.setSubmitting(false);
      }, 1000);
          }}
          validationSchema={audienceValidation}
    >

      <div className='registerContainerAudience'
        style={{
          backgroundImage: (hour >= 6 && hour <= 17) ? 'linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)' : 'linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)'
        }}>


        <div className='formContainer'>
          <h1 className='guestHeading'>Audience Register</h1>
          <img src={logo} alt="logo" />
          <Form className='formWrapper'>

            <div className="fieldWrapper">
            <label>Emergency Contact No: </label>
            <Field autocomplete="off" type="text" name="emergency" placeholder="91XXXXXXXXX" />
            <ErrorMessage component="div" name="emergency" className='invalid-feedback' />
            </div>
            <div className="fieldWrapper">
            <label>Aadhaar No: </label>
            <Field autocomplete="off" type="text" name="aadhaar" placeholder="xxxx-xxxx-xxxx" />
            <ErrorMessage component="div" name="aadhaar" className='invalid-feedback' />
            </div>
          <GeneralButton text="Submit" />
        </Form>
      </div>

          
      </div>
    </Formik>
  )
}
export default RegisterAudience;