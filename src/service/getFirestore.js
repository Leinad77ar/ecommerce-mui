import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZQQI41jHi3g8YCkNMs2C8hyYBJQjItUc",
  authDomain: "ecommerce-cordoba.firebaseapp.com",
  projectId: "ecommerce-cordoba",
  storageBucket: "ecommerce-cordoba.appspot.com",
  messagingSenderId: "208317143423",
  appId: "1:208317143423:web:110b74192e99d8793ba24a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// import { collection, getDocs } from "firebase/firestore";
export const getFire = async () => {
  const querySnapshot = await getDocs(collection(db, "items"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};
