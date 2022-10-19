import React from 'react'
import './firstPage.scss'
import { default as GeneralButton } from '../../components/molecules/GeneralButton/GeneralButton'
import validateSchema from '../../services/validation/firstPage'
// import addUser from '../../services/firebase'
import { useNavigate } from "react-router-dom"
import { Field, Form, Formik, ErrorMessage  } from 'formik';


const RegisterPage= function () {


    
  const navigate = useNavigate();
  const pdf = (values) => {
    navigate('/download', { state: values })
  }

 const initialValues= { 
    
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    id: '',
    phone: '',
    college: '',
     address: '',
     contact: '',
     category:''
          }

  const handleSubmit = (values) => {
    alert(values)
    // addUser(values)
    // pdf(values)
  }



    return (

      <div className='registerContainer'>
        <div className='formContainer'>
      <Formik 
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          setTimeout(() => {
           
            actions.setSubmitting(false);
          }, 1000);
          handleSubmit(values)
          }}
          validationSchema={validateSchema}
      >
        {({ values , errors, touched }) => (
          <Form  className="formWrapper"  >
          <label  className="placeholder" htmlFor="email">First Name:</label>
                            <Field className="input-text"  type="firstName" name="firstName" placeholder="First Name" /> 
                    <ErrorMessage
                          component="div"
                          name="firstName"
                          className="invalid-feedback"
                    />
                            <label className="placeholder" htmlFor="category">Last Name:</label>
                            <Field className="input-text"  type="lastName" name="lastName" placeholder="Last Name" /> 
                    <ErrorMessage
                          component="div"
                          name="lastName"
                          className="invalid-feedback"
                    />
                    <label className="placeholder" htmlFor="email">Email</label>
                    <Field className="input-text" type="firstName" name="email" placeholder="Email" /> 
            
                    <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                            />
                    <label className="placeholder" htmlFor="contact">Contact No.</label>
                    <Field className="input-text" type="firstName" name="contact" placeholder="Contact No" /> 
            
                    <ErrorMessage
                          component="div"
                          name="contact"
                          className="invalid-feedback"
                            />
                    <label className="placeholder" htmlFor="address">Address</label>
                    <Field className="input-text"  type="firstName" name="address" placeholder="Contact No" /> 
            
                    <ErrorMessage
                          component="div"
                          name="address"
                          className="invalid-feedback"
                            />
                                <label> who are you</label>
                            <div className='radio-container'>
                            <label>
              <Field type="radio" name="category" value="audience" />
              Audience
            </label>    
                           
                            <label>
              <Field type="radio" name="category" value="partcipant" />
              partcipant/Performer
                                </label>    
                                <label>
              <Field type="radio" name="category" value="guest" />
              Guest
                            </label>    
                                <label>
              <Field type="radio" name="category" value="sponsor" />
              Sponsor
                            </label>    
                                <label>
              <Field type="radio" name="category" value="alumini" />
              Alumini
                            </label>    
                            <ErrorMessage
                          component="div"
                          name="category"
                          className="invalid-feedback"
                                />
                                </div>
                       <GeneralButton/>     
          </Form>
        )}
               
      </Formik>
    </div>    
    </div>    )
}


export default RegisterPage;
