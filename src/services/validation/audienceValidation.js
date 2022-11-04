import * as yup from 'yup';



const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const Numregex = /^(0*[1-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/
const audienceValidation = yup.object().shape({
  emergency: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(12, "too long").required('Required'),
    aadhaar: yup.string().matches(phoneRegExp, 'must be 12 digit number').required('Required').max(12, 'Must be 12 number').min(12, 'Must be 12 number '),
});


export default audienceValidation;