import React from 'react'
import { useNavigate } from "react-router-dom";

import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterParticipants.scss'
import logo from '/images/hillfair-logo-light.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import participantValidation from '../../../services/validation/participantvalidation';
import addUser from '../../../services/firebase/firebase'


const RegisterPartipants = ({ previousvalue }) => {

  const navigate = useNavigate();
  const pdf = (values) => {
    navigate('/download', { state: values })
  }
  
  const handleSubmit = (values) => {
    alert(values)/
    addUser(values)
    pdf(values)
  }
  return (
    <Formik
      initialValues={{ college: '', website: '', category: '' }}
      onSubmit={(values, actions) => {
        Object.assign(values, previousvalue);
        handleSubmit(values)
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={participantValidation}
    >
      <div className='participant'>
        <h1 className='guestHeading'>Participant Register</h1>
        <img src={logo} alt="logo" />
        <Form className='registerGuest'>
          <div className='wrapperParticipant'>

            <div className="fieldWrapper">
              <label>College : </label>
              <Field type="text" name="college" />
              <ErrorMessage component="div" name="college" className='invalid-feedback' />
            </div>

            <div className="fieldWrapper">
              <label>Institute Official Site:</label>
              <Field type="text" name="website" />
              <ErrorMessage component="div" name="website" className='invalid-feedback' />
            </div>

            <div className="fieldWrapper">
              <label>Address: </label>
              <Field type="text" name="address" />
              <ErrorMessage component="div" name="address" className='invalid-feedback' />
            </div>

            <div className="fieldWrapper">
              <Field as="select" id="category" name="category">
                <option value="english">English Story/Poem</option>
                <option value="hindi">English Story/Poem</option>
                <option value="bands">Battle of Bands</option>
                <option value="music">Music & Singing</option>
                <option value="dance">Cultural Dance</option>
              </Field>
              <ErrorMessage component="div" name="category" className='invalid-feedback' />
            </div>


            <GeneralButton text="Submit" />
          </div>
        </Form>
      </div>
    </Formik>
  )
}
export default RegisterPartipants;



