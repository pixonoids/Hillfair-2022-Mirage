import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterSponsors.scss'
import logo from '/images/hillfair-logo-light.png'

const RegisterSponsors = () => {
  return (
    <div className='sponsors'>
      <h1 className='guestHeading'>Sponsor Register</h1>
        <img src={logo} alt="logo" />
      <div className='registerGuest'>
        <div className='wrapperSponsor'>
          <label>Company: <input type="text" name="company" /></label>
          <label>GST No. <input type="text" name="gst" /></label>
          <GeneralButton text="Submit" />
        </div>
      </div>
    </div>
  )
}
export default RegisterSponsors;