import * as yup from 'yup';

const participantValidation = yup.object().shape({
    college: yup.string().required('Required'),
    website: yup.string().required('Required'),
    category: yup.string().required('Required')

});

export default participantValidation;
