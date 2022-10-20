import * as yup from 'yup';

const participantValidation = yup.object().shape({
    college: yup.string().required('College is required'),
    website: yup.string().required('Category contact is required'),
    category: yup.string().required('category is required'),

});

export default participantValidation;
