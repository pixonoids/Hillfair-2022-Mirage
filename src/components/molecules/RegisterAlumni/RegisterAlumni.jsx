import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterAlumni.scss'
import logo from '/images/hillfair-logo-light.png'

const RegisterAlumni = () => {
  return (
    <div className='alumni'>
      <h1 className='guestHeading'>Audience Register</h1>
        <img src={logo} alt="logo" />
      <div className='registerGuest'>
        <div className='wrapperAlumni'>
          <label>Roll No: <input type="text" name="roll" /></label>
          <label>Batch: <input type="text" name="batch" /></label>
          <label>Department: <input type="text" name="department" /></label>
          <GeneralButton text="Submit" />
        </div>
      </div>
    </div>
  )
}
export default RegisterAlumni;