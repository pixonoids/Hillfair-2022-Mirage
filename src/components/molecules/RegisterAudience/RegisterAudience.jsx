import { Field,Form,Formik ,ErrorMessage} from 'formik';
import React from 'react'
import { useNavigate } from "react-router-dom";

import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterAudience.scss'
import audienceValidation from '../../../services/validation/audienceValidation';
import logo from '/images/hillfair-logo-light.png'
import addUser from '../../../services/firebase/firebase'

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
    initialValues={{ address: '', emergency: '',  entrancePay: '' }}
      onSubmit={(values, actions) => {
        Object.assign(values, previousvalue);
        handleSubmit(values)
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }, 1000);
          }}
          validationSchema={audienceValidation}
    >
    <div className='audience'>
      <h1 className='guestHeading'>Audience Register</h1>
        <img src={logo} alt="logo" />
      <div className='registerGuest'>
          <Form className='wrapperAudience'>
            
          <div className="fieldWrapper">
            <label>Address: </label>
            <Field type="text" name="address" />
            <ErrorMessage component="div" name="address" className='invalid-feedback'/>
            </div>
            
            <div className="fieldWrapper">
            <label>Emergency Contact No: </label>
            <Field type="text" name="emergency" placeholder="Emergency contact" />
            <ErrorMessage component="div" name="emergency" className='invalid-feedback' />
            </div>
            
            <div className="fieldWrapper">
            <label><Field type="checkbox" id="entrancePay" name="entrancePay" value="500"/>Pay 500 Rs.</label>
            
              <ErrorMessage component="div" name="entrancePay" className='invalid-feedback' />
            </div>
            
          <GeneralButton text="Submit" />
        </Form>
      </div>
      </div>
      </Formik>
  )
}
export default RegisterAudience;