import * as yup from 'yup';

const alumuniValidation = yup.object().shape({
    roll: yup.string().required('Required'),
    batch: yup.string().required('Required'),
    department: yup.string().min(6, 'Department must be at least 6 characters').required('Required'),
    
});

export default alumuniValidation;