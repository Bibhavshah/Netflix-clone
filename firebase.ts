// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL3QGatT1tN-j20W-iBUH524u9cvv0bz0",
  authDomain: "netflix-clone-ba7c6.firebaseapp.com",
  projectId: "netflix-clone-ba7c6",
  storageBucket: "netflix-clone-ba7c6.appspot.com",
  messagingSenderId: "1027518924390",
  appId: "1:1027518924390:web:8722a5790a395ae6c80fa7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }