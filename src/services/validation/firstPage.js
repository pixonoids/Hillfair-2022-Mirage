import * as yup from 'yup';

const validateSchema = yup.object({
    firstName: yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    lastName: yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
    city: yup.string().required('Required'),
    id: yup.string().required('Required').min(10, 'Must be 10 characters or more'),
    phone: yup.string().required('Required').min(10, 'Must be 10 characters or more'),
    address: yup.string().required('Required'),
    college: yup.string().required('Required')
});

export default validateSchema;