import axios from '../../../config/firebase-realtime';



const addUSer = async (user) => {
    const date = new Date();
date.toISOString()
user.date = date;
    axios.post('/users.json', user).then(res => {
        console.log("added user to database");
    }).catch(err => {
        console.log(err);
    })
}

export default addUSer;

