import * as yup from 'yup';

const sponsorValidation = yup.object().shape({
    company: yup.string().required('required'),
    gst: yup.string().required('required'),

});

export default sponsorValidation;