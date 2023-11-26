
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA9wlmP_73ogUOpOZ6V7ZHAtaf40-1sMv0",
  authDomain: "doto-9f7a4.firebaseapp.com",
  projectId: "doto-9f7a4",
  storageBucket: "doto-9f7a4.appspot.com",
  messagingSenderId: "595722294088",
  appId: "1:595722294088:web:931e2b5150f11a31dd997d"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

// ios : 522208820944-nasuhd74crs4848gkejkrlnbnm8t6790.apps.googleusercontent.com
// android : 522208820944-q9ti0av3r814u7ula371ak74clds6vkb.apps.googleusercontent.com