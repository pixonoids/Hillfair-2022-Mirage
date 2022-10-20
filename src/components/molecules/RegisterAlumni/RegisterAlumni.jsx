import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterAlumni.scss'
import alumuniValidation from '../../../services/validation/alumuniValidation';
import logo from '/images/hillfair-logo-light.png'
import { Formik, Form, Field,ErrorMessage } from 'formik';
const RegisterAlumni = () => {
  return (
    <Formik
initialValues={{ roll: '', batch: '',  department: '' }}
onSubmit={(values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
      }}
      validationSchema={alumuniValidation}
>
    <div className='alumni'>
      <h1 className='guestHeading'>Audience Register</h1>
        <img src={logo} alt="logo" />
      <div className='registerGuest'>
          <Form className='wrapperAlumni'>
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

