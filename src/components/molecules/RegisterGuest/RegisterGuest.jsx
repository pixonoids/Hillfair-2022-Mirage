import { Form ,Field,Formik,ErrorMessage} from 'formik';
import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterGuest.scss'
import logo from '/images/hillfair-logo-light.png'
import guestValidation from '../../../services/validation/guestValidation';

const RegisterGuest = () => {
  return (
    <Formik
     
initialValues={ {designation: "", social: "", address: ""} }
onSubmit={(values, actions) => {
  setTimeout(() => {
    console.log(values)
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
      }}
      validationSchema={guestValidation}
>
    <div className='guest'>
      <h1 className='guestHeading'>Guest Register</h1>
        <img src={logo} alt="logo" />
      <Form className='registerGuest'>
        <div className='wrapperGuest'>
          
        <div className="fieldWrapper">
        <label>Designation: </label>
            <Field type="text" name="designation" />
            <ErrorMessage component="div" name="designation" className='invalid-feedback'/>
            </div>
        <div className="fieldWrapper">
        <label>Social Profile: </label>
            <Field type="text" name="social" />
            <ErrorMessage component="div" name="social" className='invalid-feedback'/>
            </div>
        <div className="fieldWrapper">
        <label>Address No: </label>
            <Field type="text" name="address" />
            <ErrorMessage component="div" name="address" className='invalid-feedback'/>
            </div>
          <GeneralButton text="Submit" />
        </div>
      </Form>
      </div>
      </Formik>
  )
}
export default RegisterGuest;