import * as yup from 'yup';

const guestValidation = yup.object().shape({
    designation: yup.string().required('Designation is required'),
    social: yup.string().required('Social Profile is required'),
    address: yup.string().required('Address is required'),

});

export default guestValidation;
