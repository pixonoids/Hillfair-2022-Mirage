import axios from '../../../config/firebase-realtime';



const addUSer = async (user) => {
    const t = new Date()
    const z = t.getTimezoneOffset() * 60 * 1000
    let tLocal = t - z
    tLocal = new Date(tLocal)
    let iso = tLocal.toISOString()
    iso = iso.split(".")[0]
    user.date = iso;
    axios.post('/users.json', user).then(res => {
    }).catch(err => {
        console.log(err);
    })
}

export default addUSer;

