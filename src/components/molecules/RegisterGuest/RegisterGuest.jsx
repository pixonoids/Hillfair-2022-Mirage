import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterGuest.scss'
import logo from '/images/hillfair-logo-light.png'

const RegisterGuest = () => {
  return (
    <div className='guest'>
      <h1 className='guestHeading'>Guest Register</h1>
        <img src={logo} alt="logo" />
      <div className='registerGuest'>
        <div className='wrapperGuest'>
          <label>Designation: <input type="text" name="designation" /></label>
          <label>Social Profile: <input type="text" name="social" /></label>
          <label>Address No: <input type="text" name="address" /></label>
          <GeneralButton text="Submit" />
        </div>
      </div>
    </div>
  )
}
export default RegisterGuest;