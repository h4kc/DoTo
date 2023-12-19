import { collection, query, where, getDocs ,updateDoc, doc,arrayUnion} from "firebase/firestore";
import {db} from "../../firbase"
export const getUserData = async (userId) =>{
    const citiesRef = collection(db, "todos");
    const q = query(citiesRef, where("user", "==", userId));
    const querySnapshot = await getDocs(q);
    const data = []
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      return data[0]
    
}
export const addTopic= async (document,data)=>{
  const userDoc = doc(db, "todos", document);
  await updateDoc(userDoc, {
    categories: arrayUnion(data)
});
}
