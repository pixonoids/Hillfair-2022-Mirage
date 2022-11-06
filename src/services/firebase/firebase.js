import axios from '../../../config/firebase-realtime';



const addUSer = async (user) => {
user.date = new Date().toLocaleDateString();
    axios.post('/users.json', user).then(res => {
    }).catch(err => {
    })
}

export default addUSer;

