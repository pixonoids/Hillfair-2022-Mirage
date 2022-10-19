import * as yup from 'yup';

const alumuniValidation = yup.object().shape({
    roll: yup.string().required('Roll is required'),
    batch: yup.string().required('Batch is required'),
    department: yup.string().min(6, 'Department must be at least 6 characters').required('Department is required'),
    
});

export default alumuniValidation;