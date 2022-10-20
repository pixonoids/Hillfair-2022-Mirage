import * as yup from 'yup';

const sponsorValidation = yup.object().shape({
    company: yup.string().required('Company is required'),
    gst: yup.string().required('GST is required'),

});

export default sponsorValidation;