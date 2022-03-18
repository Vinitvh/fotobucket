// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlK-psB_zGFtpv6BQBDNC-58AiZMwJeAU",
  authDomain: "fotobucket-87c88.firebaseapp.com",
  projectId: "fotobucket-87c88",
  storageBucket: "fotobucket-87c88.appspot.com",
  messagingSenderId: "676378961760",
  appId: "1:676378961760:web:de147cdf2c7a197cec6005",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);

export { projectFirestore, projectStorage };
