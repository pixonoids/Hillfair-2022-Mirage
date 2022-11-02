import * as yup from 'yup';

const validateSchema = yup.object({
   name: yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
    contact: yup.string().required('Required'),
    address: yup.string(),
    category: yup.string().required('Required')
});

export default validateSchema;