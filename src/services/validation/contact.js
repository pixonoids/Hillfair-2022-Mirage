import * as yup from 'yup';



const contactValidation = yup.object().shape({
  name: yup.string().required('Required'),
    email: yup.string().required('Required').email('Invalid email address'),
    message: yup.string().required('Required'),
});


export default contactValidation;