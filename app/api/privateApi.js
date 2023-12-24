import { collection, query, where, getDocs ,updateDoc, doc,arrayUnion, getDoc, setDoc} from "firebase/firestore";
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
export const getUserDataNew = async (userId)=>{
  const userDoc = doc(db, "doto-users-data", userId);
  userTopics = collection(db,"doto-users-data", userId, "topics")
  const fetchedData = await getDocs(userTopics)
  const data = []
   fetchedData.forEach((doc) => {
    data.push({id:doc.id,
              label:doc.data().topicLabel,
              totalTodos: doc.data().totalTodos,
              completedTodos: doc.data().totalTodos
            });
   
  }); return data
}
export const addTopic= async (document,data)=>{
  const userDoc = doc(db, "todos", document);
  await updateDoc(userDoc, {
    categories: arrayUnion(data)
});
}
export const addTopicNew= async (userId,data,topicId)=>{
  const userDoc = doc(db, "doto-users-data", userId,"topics",topicId.toLowerCase());
  await setDoc(userDoc,data);
}
export const addTodo= async (userId,data,topicId,todoId)=>{
  const userDoc = doc(db, "doto-users-data", userId,"topics","travel_1703351000162","todos",todoId);
  await setDoc(userDoc,data);
}
export const getTodos = async (userId, topicId) =>{
  const topicTodos = collection(db, "doto-users-data", userId,"topics",topicId,"todos");
  const fetchedData = await getDocs(topicTodos)
  const data = []
   fetchedData.forEach((doc) => {
    data.push({id:doc.id,
              label:doc.data().todoLabel,
              completedAt: doc.data().tcompletedAt,
              createdAt: doc.data().createdAt
            });
  
  }); 
  console.log(data)
  return data
}