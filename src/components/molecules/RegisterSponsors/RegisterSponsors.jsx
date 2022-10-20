import { Field, Form,Formik,ErrorMessage } from 'formik';
import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterSponsors.scss'
import logo from '/images/hillfair-logo-light.png'
import sponsorValidation from '../../../services/validation/sponsorValidation';

const RegisterSponsors = () => {
  return (
    <Formik
initialValues={{ company: '', gst: ''}}
onSubmit={(values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
      }}
      validationSchema={sponsorValidation}
>
    <div className='sponsors'>
      <h1 className='guestHeading'>Sponsor Register</h1>
      <img src={logo} alt="logo" />
      
      <Form className='registerGuest'>
        <div className='wrapperSponsor'>
           
          <div className="fieldWrapper">
            <label>Company:</label>
            <Field type="text" name="company" />
            <ErrorMessage component="div" name="company" className='invalid-feedback'/>
          </div>

          <div className="fieldWrapper">
              <label>GST No.</label>
              <Field type="text" name="gst" />
            <ErrorMessage component="div" name="gst" className='invalid-feedback' />
          </div>
            <GeneralButton text="Submit" />
            
        </div>
      </Form>
      </div>
      </Formik>
  )
}
export default RegisterSponsors;