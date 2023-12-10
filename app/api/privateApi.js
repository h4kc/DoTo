import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../firbase"
export const getUserData = async (userId) =>{
    const citiesRef = collection(db, "todos");
    const q = query(citiesRef, where("user", "==", userId));
    const querySnapshot = await getDocs(q);
    const data = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data.push(doc.data());
      });
      return data[0]
}