import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterParticipants.scss'
import logo from '/images/hillfair-logo-light.png'

const RegisterPartipants = () => {
  return (
    <div className='participant'>
      <h1 className='guestHeading'>Participant Register</h1>
        <img src={logo} alt="logo" />
      <div className='registerGuest'>
        <div className='wrapperParticipant'>
          <label>College : <input type="text" name="college" /></label>
          <label>Institute Official Site: <input type="text" name="website"/></label>
          <label>Address: <input type="text" name="address" /></label>
          <label for="category">Category:</label>
          <select name="category" id="category">
              <option value="english">English Story/Poem</option>
              <option value="hindi">English Story/Poem</option>
              <option value="bands">Battle of Bands</option>
              <option value="music">Music & Singing</option>
              <option value="dance">Cultural Dance</option>
          </select>
          <GeneralButton text="Submit" />
        </div>
      </div>
    </div>
  )
}
export default RegisterPartipants;