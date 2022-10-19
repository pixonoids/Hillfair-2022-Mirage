import React from 'react'

const RegisterGuest = () => {
  return (
    <div className='registerGuest'>
        <label>Designation: <input type="text" name="designation" /></label>
        <label>Social Profile: <input type="text" name="social" /></label>
        <label>Address No: <input type="text" name="address" /></label>
    </div>
  )
}
export default RegisterGuest;