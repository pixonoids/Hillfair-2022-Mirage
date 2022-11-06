import React from 'react'
import { useNavigate } from "react-router-dom";

import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterParticipants.scss'
import logo from '/images/hillfair-logo-light.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import participantValidation from '../../../services/validation/participantvalidation';
import addUser from '../../../services/firebase/firebase'
import PalmRegister from '../PalmRegister/PalmRegister';
let currentTime = new Date();
let hour = currentTime.getHours();



const RegisterParticipants = ({ previousvalue }) => {

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
      initialValues={{ college: '', website: '', participationIn: '' }}
      onSubmit={(values, actions) => {
        Object.assign(values, previousvalue);
        handleSubmit(values)
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={participantValidation}
    >
      <div className='registerContainerParticipants'
        style={{
          backgroundImage: (hour >= 6 && hour <= 17) ? 'linear-gradient(180deg,#3a1c1b 17.15%,#b5874c 120.7%)' : 'linear-gradient(180deg,#151539 17.15%,#331e66 120.7%)'
        }}>
        <PalmRegister/>

        <div className='formContainer'>
          <h1 className='guestHeading'>Participant Register</h1>
          <img src={logo} alt="logo" />
          <Form className='formWrapper'>

            <div className="fieldWrapper">
              <label>College : </label>
              <Field autoComplete="off" type="text" name="college" />
              <ErrorMessage component="div" name="college" className='invalid-feedback' />
            </div>

            <div className="fieldWrapper">
              <label>Institute Official Site:</label>
              <Field autoComplete="off" type="text" name="website" />
              <ErrorMessage component="div" name="website" className='invalid-feedback' />
            </div>

            <div className="fieldWrapper">
              <label>Category:</label>
              <Field as="select" id="participationIn" name="participationIn">
                <option value="English Story/Poem">English Story/Poem</option>
                <option value="Hindi Story/Poem">Hindi Story/Poem</option>
                <option value="Battle of Bands">Battle of Bands</option>
                <option value="Music & Singing">Music & Singing</option>
                <option value="Cultural Dance">Cultural Dance</option>
              </Field>
              <ErrorMessage component="div" name="participationIn" className='invalid-feedback' />
            </div>


            <GeneralButton text="Submit" />
          </Form>
        </div>
      </div>
    </Formik>
  )
}
export default RegisterParticipants;



