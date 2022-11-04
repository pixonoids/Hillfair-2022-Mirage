import * as yup from 'yup';
import aadhaarValidate from '../../utils/aadhaarValidationAlgorithm';

yup.addMethod(yup.string, "aadhaarValidate", function (errorMessage) {
    return this.test(`aadhaar`, errorMessage, function (value) {
      const { path, createError } = this;

      return (
       aadhaarValidate(value)||
        createError({ path, message: errorMessage })
      );
    });
  });
const guestValidation = yup.object().shape({
    designation: yup.string().required('Required'),
    social: yup.string().required('Required'),
    aadhaar: yup.string().aadhaarValidate('aadhar is not valid').required('Required')
});

export default guestValidation;
