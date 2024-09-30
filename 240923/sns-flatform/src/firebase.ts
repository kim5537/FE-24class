import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//파이어베이스 승인을 위한 api키 .
// api를 사용해 초기화
//권한을 위한 auth

const firebaseConfig = {
  apiKey: "AIzaSyApmC9tDYhwTIH00Kk_Ejqw2eno9j050Os",
  authDomain: "sns-platform-c7c3f.firebaseapp.com",
  projectId: "sns-platform-c7c3f",
  storageBucket: "sns-platform-c7c3f.appspot.com",
  messagingSenderId: "987478681310",
  appId: "1:987478681310:web:2ec162a78f97577c8e844f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
//SDK로 초기화했다 라고 말함

export const storage = getStorage(app);

export const db = getFirestore(app);
