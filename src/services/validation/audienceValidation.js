import * as yup from 'yup';
import aadhaarValidate from '../../utils/aadhaarValidationAlgorithm';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const audienceValidation = yup.object().shape({
    aadhaar: yup.string().length(12,"must be 12 digit number").required('Required').aadhaarValidate('aadhar is not valid bro'),
    emergency: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(12, "too long").required('Required')
});


yup.addMethod(yup.string, "aadhaarValidate", function (errorMessage) {
    return this.test(`aadhaar`, errorMessage, function (value) {
      const { path, createError } = this;

      return (
        aadhaarValidate(value)&&value.length===12 ||
        createError({ path, message: errorMessage })
      );
    });
  });
export default audienceValidation;