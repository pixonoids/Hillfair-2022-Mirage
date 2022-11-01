import axios from '../../../config/firebase-realtime';



const addUSer = async (user) => {
user.date = new Date().toLocaleDateString();
    axios.post('/users.json', user).then(res => {
        console.log("added user to database");
    }).catch(err => {
        console.log(err);
    })
}

export default addUSer;

