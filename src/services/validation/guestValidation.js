import * as yup from 'yup';

import checkUID from '../../utils/aadhaarValidationAlgorithm'
yup.addMethod(yup.string, "aadhaarValidate", function (errorMessage) {
    return this.test(`aadhaar`, errorMessage, function (value) {
      const { path, createError } = this;

      return (
        checkUID(value)||
        createError({ path, message: errorMessage })
      );
    });
  });
const guestValidation = yup.object().shape({
    designation: yup.string().required('Required'),
    social: yup.string().required('Required'),
    aadhaar: yup.string().aadhaarValidate('Aadhaar is not valid').required('Required')
});

export default guestValidation;
