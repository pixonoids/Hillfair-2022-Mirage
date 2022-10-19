import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterAudience.scss'
import logo from '/images/hillfair-logo-light.png'

const RegisterAudience = () => {
  return (
    <div className='audience'>
      <h1 className='guestHeading'>Audience Register</h1>
        <img src={logo} alt="logo" />
      <div className='registerGuest'>
        <div className='wrapperAudience'>
          <label>Address: <input type="text" name="address" /></label>
          <label>Emergency Contact No: <input type="text" name="emergency" /></label>
          <label><input type="checkbox" id="entrancePay" name="entrancePay" value="entrancePay"></input>Pay 500 Rs.</label>
          <GeneralButton text="Submit" />
        </div>
      </div>
    </div>
  )
}
export default RegisterAudience;