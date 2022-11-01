import * as yup from 'yup';

const audienceValidation = yup.object().shape({
    address: yup.string().required('Address is required'),
    emergency: yup.string().required('Emergency contact is required'),
    entrancePay: yup.array().min(1, "Required").required('Required'),

});

export default audienceValidation;