import React, { useState } from 'react'
import './style.scss'
import { default as GeneralButton } from '../../components/molecules/GeneralButton/GeneralButton'
import validateSchema from '../../services/validation/firstPage'
// import addUser from '../../services/firebase'
import { useNavigate } from "react-router-dom"
import { Field, Form, Formik, ErrorMessage } from 'formik';
import {RegisterSponsors,RegisterAudience,RegisterParticipants,RegisterGuest, RegisterAlumni} from '../../components/molecules'
import RegisterPartipants from '../../components/molecules/RegisterParticipants/RegisterParticipants'
import { useRef } from 'react'

const RegisterPage = function () {
  
  const [category, setCategory] = useState(null)
  const firstPageValue = useRef({});

  const navigate = useNavigate();
  const pdf = (values) => {
    navigate('/download', { state: values })
  }

 

  const handleSubmit = (values) => {
    alert(values)
    // addUser(values)
    // pdf(values)
  }



    return (

      <div className='registerContainer'>
       {(category==null)&&<div className='formContainer'>
        <Formik
       initialValues={{ email: '',contact:'',address:'' ,category:'', firstName: '', lastName: '' }}
            onSubmit={(values, actions) => {
              setCategory(values.category)
              firstPageValue.current = values;
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
            }}
            validationSchema={validateSchema}
     >
       {(values) => (
         <Form className='formWrapper'>
          
           <div className="fieldWrapper">
          <label  className="placeholder" htmlFor="email">First Name:</label>
                            <Field className="input-text"  type="firstName" name="firstName" placeholder="First Name" /> 
                    <ErrorMessage
                          component="div"
                          name="firstName"
                  className="invalid-feedback"

                  />
                 
                  </div>
                  <div className="fieldWrapper">
                            <label className="placeholder" htmlFor="category">Last Name:</label>
                            <Field className="input-text"  type="lastName" name="lastName" placeholder="Last Name" /> 
                    <ErrorMessage
                          component="div"
                          name="lastName"
                          className="invalid-feedback"
                  />
                </div>
                <div className="fieldWrapper">
                    <label className="placeholder" htmlFor="email">Email</label>
                    <Field className="input-text" type="firstName" name="email" placeholder="Email" /> 
            
                    <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                  />
                  </div>
                  <div className="fieldWrapper"> <label className="placeholder" htmlFor="contact">Contact No.</label>
                    <Field className="input-text" type="firstName" name="contact" placeholder="Contact No" /> 
            
                    <ErrorMessage
                          component="div"
                          name="contact"
                          className="invalid-feedback"
                            /></div> 
                   <div className="fieldWrapper"> <label className="placeholder" htmlFor="address">Address</label>
                    <Field className="input-text"  type="firstName" name="address" placeholder="Contact No" /> 
            
                    <ErrorMessage
                          component="div"
                          name="address"
                          className="invalid-feedback"
                            /></div> 
                            <div className='radio-container'>
                                <label className='placeholder'> who are you</label>
                            <label>
              <Field type="radio" name="category" value="audience" />
              Audience
            </label>    
                           
                            <label>
              <Field type="radio" name="category" value="participant" />
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
                       <GeneralButton text="next" type={"submit"} /> 
          
        
         </Form>
       )}
     </Formik>
          
        </div>  }  
        
       { (category=="audience")&&<RegisterAudience previousvalue={firstPageValue.current} />}
       {(category=="guest")&& <RegisterGuest previousvalue={firstPageValue.current} />}
        {(category=="alumni")&&<RegisterAlumni previousvalue={firstPageValue.current} />}
        {(category=="participant")&&<RegisterPartipants previousvalue={firstPageValue.current}/>}
        {(category=="sponsor")&&<RegisterSponsors previousvalue={firstPageValue.current}/>}
    </div>    )
}


export default RegisterPage;
