import * as yup from 'yup';
const gstRegx = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/;
const sponsorValidation = yup.object().shape({
    company: yup.string().required('required'),
    gst: yup.string().matches(gstRegx, 'invalid GST number').required('required'),

});

export default sponsorValidation;