import db from "../../../config/firebase-config";
import { collection, addDoc } from "firebase/firestore"; 


const addUSer = async (user) => {
     
        try {
            const docRef = await addDoc(collection(db, "users"), user);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

}

export default addUSer;

