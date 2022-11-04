import * as yup from 'yup';

const alumuniValidation = yup.object().shape({
    roll: yup.string().required('Required'),
    batch: yup.string().required('Required'),
    department: yup.string().required('Required'),
    
});

export default alumuniValidation;