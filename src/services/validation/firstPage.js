import * as yup from 'yup';

const validateSchema = yup.object({
   name: yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
    contact: yup.string().required('Required'),
    // phone: yup.string().required('Required').min(10, 'Must be 10 characters or more'),
    address: yup.string().required('Required'),
    category: yup.string().required('Required')
});

export default validateSchema;