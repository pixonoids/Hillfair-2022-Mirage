import React from 'react'
import GeneralButton from '../GeneralButton/GeneralButton';
import './RegisterAlumni.scss'
import alumuniValidation from '../../../services/validation/alumuniValidation';
import logo from '/images/hillfair-logo-light.png'
import { Formik, Form, Field,ErrorMessage } from 'formik';
const RegisterAlumni = () => {
  return (
    <Formik
initialValues={{ roll: '', batch: '',  department: '' }}
onSubmit={(values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
      }}
      validationSchema={alumuniValidation}
>
    <div className='alumni'>
      <h1 className='guestHeading'>Audience Register</h1>
        <img src={logo} alt="logo" />
      <div className='registerGuest'>
          <Form className='wrapperAlumni'>
          
            <label>Roll No:</label>
            <Field type="text" name="roll" placeholder="Roll no" />
            <ErrorMessage name='roll' />
            
            <label>Batch:</label>
            <Field type="text" name="batch" placeholder="Batch" />
            <ErrorMessage name='batch' />
           
            <label>Department:</label> 
             <Field type="text" name="department" placeholder="Department" />
            <ErrorMessage name='department' />
          <GeneralButton text="Submit" />
        </Form>
      </div>
      </div>
      </Formik>
  )
}
export default RegisterAlumni;


// <Formik
// initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
// onSubmit={(values, actions) => {
//   setTimeout(() => {
//     alert(JSON.stringify(values, null, 2));
//     actions.setSubmitting(false);
//   }, 1000);
// }}
// >
// {(values) => (
//     <Form className={"wrapperAlumni"}>
//     <Field type="email" name="email" placeholder="Email" />
//     <Field as="select" name="color">
//       <option value="red">Red</option>
//       <option value="green">Green</option>
//       <option value="blue">Blue</option>
//     </Field>

//     <Field name="lastName">
//       {({
//         field, // { name, value, onChange, onBlur }
//         form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
//         meta,
//       }) => (
//         <div>
//           <input type="text" placeholder="Email" {...field} />
//           {meta.touched && meta.error && (
//             <div className="error">{meta.error}</div>
//           )}
//         </div>
//       )}
//     </Field>
 
//     <button type="submit">Submit</button>
//   </Form>
// )}
// </Formik>