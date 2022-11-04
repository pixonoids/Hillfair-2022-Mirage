import * as yup from 'yup';
import aadhaarValidate from '../../utils/aadhaarValidationAlgorithm';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const audienceValidation = yup.object().shape({
  emergency: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10, "too short").max(12, "too long").required('Required'),
    aadhaar: yup.string().required('Required').aadhaarValidate('aadhar is not valid')
});


yup.addMethod(yup.string, "aadhaarValidate", function (errorMessage) {
    return this.test(`aadhaar`, errorMessage, function (value) {
      const { path, createError } = this;
console.log(value)
      return (
        aadhaarValidate(value)||
        createError({ path, message: errorMessage })
      );
    });
  });
export default audienceValidation;