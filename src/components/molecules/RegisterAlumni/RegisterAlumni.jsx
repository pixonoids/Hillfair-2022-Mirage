import React from 'react'
import { useNavigate } from "react-router-dom";

import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterAlumni.scss'
import alumuniValidation from '../../../services/validation/alumuniValidation';
import logo from '/images/hillfair-logo-light.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import addUser from '../../../services/firebase/firebase'
let currentTime = new Date();
let hour = currentTime.getHours();
const RegisterAlumni = ({ previousvalue }) => {
  
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
initialValues={{ roll: '', batch: '',  department: '' }}
      onSubmit={(values, actions) => {
        Object.assign(values, previousvalue);
        handleSubmit(values)
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
      }}
      validationSchema={alumuniValidation}
>
    <div className='registerContainerAlumini'
  style={{
          backgroundImage:(hour>=6 &&hour<=16)?'linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)':'linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)'
        }}>
     
        <div className='formContainer'>
        <h1 className='guestHeading'>Audience Register</h1>
        <img src={logo} alt="logo" />
          <Form className='formWrapper'>
          <div className="fieldWrapper">
            <label>Roll No:</label>
            <Field type="text" name="roll" placeholder="Roll no" />
              <ErrorMessage component="div" className='invalid-feedback' name='roll' />
              </div>
            
            
          <div className="fieldWrapper">
            <label>Batch:</label>
            <Field type="text" name="batch" placeholder="Batch" />
              <ErrorMessage component="div" className='invalid-feedback' name='batch' />
              </div>
           
          <div className="fieldWrapper">
            <label>Department:</label> 
             <Field type="text" name="department" placeholder="Department" />
              <ErrorMessage component="div"  className='invalid-feedback' name='department' />
              </div>
          <GeneralButton text="Submit" />
        </Form>
      </div>
      </div>
      </Formik>
  )
}
export default RegisterAlumni;

