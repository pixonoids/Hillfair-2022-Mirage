import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validateSchema = yup.object({
   name: yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
    contact: yup.string().matches(phoneRegExp, 'invalid phone number').min(10, "invalid phone number").max(12, "invalid phone number").required('Required'),
    address: yup.string(),
    category: yup.string().required('Required'),
    accept_terms:yup.array().min(1,'check the acknowledgement')

});

export default validateSchema;