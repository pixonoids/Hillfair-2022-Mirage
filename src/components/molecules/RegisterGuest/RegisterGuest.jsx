import { Form ,Field,Formik,ErrorMessage} from 'formik';
import React from 'react'
import { useNavigate } from "react-router-dom";

import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterGuest.scss'
import logo from '/images/hillfair-logo-light.png'
import guestValidation from '../../../services/validation/guestValidation';
import addUser from '../../../services/firebase/firebase'

const RegisterGuest = ({ previousvalue }) => {
  
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
     
initialValues={ {designation: "", social: "", aadhaar: ""} }
onSubmit={(values, actions) => {
  setTimeout(() => {
    Object.assign(values, previousvalue);
    handleSubmit(values)
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
      }}
      validationSchema={guestValidation}
>
    <div className='registerContainer'>
   
        <div className='formContainer'>
        <h1 >Guest Register</h1>
        <img src={logo} alt="logo" />
        <Form className='formWrapper'>
          
        <div className="fieldWrapper">
        <label>Designation:</label>
            <Field type="text" name="designation" />
            <ErrorMessage component="div" name="designation" className='invalid-feedback'/>
            </div>
        <div className="fieldWrapper">
        <label>Social Profile: </label>
            <Field type="text" name="social" />
            <ErrorMessage component="div" name="social" className='invalid-feedback'/>
            </div>
        <div className="fieldWrapper">
        <label>Aadhaar No:</label>
            <Field type="text" name="adhaar" />
            <ErrorMessage component="div" name="aadhaar" className='invalid-feedback'/>
            </div>
          <GeneralButton text="Submit" />
      </Form>
        </div>
      </div>
      </Formik>
  )
}
export default RegisterGuest;