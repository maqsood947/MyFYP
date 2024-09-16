// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from 'firebase/auth';
import { getDatabase } from "firebase/database"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkQrqi9IVYGseNNQOaEwuMY4ZfHEPH56I",
  authDomain: "budgetbuddy-83607.firebaseapp.com",
  projectId: "budgetbuddy-83607",
  storageBucket: "budgetbuddy-83607.appspot.com",
  messagingSenderId: "466430888009",
  appId: "1:466430888009:web:fdcbac30a1eeb411db5798",
  databaseUrl: "https://budgetbuddy-83607-default-rtdb.firebaseio.com/"

};

// Initialize Firebas
const app = initializeApp(firebaseConfig);
export const addUser = async (email, password, profileImage, displayName) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // After user creation, update profile with displayName and photoURL
      await updateProfile(user, {
        displayName: displayName,
        photoURL: profileImage, // Assuming profileImage is the URI or URL to the image
      });
  
      console.log("User created and profile updated:", user);
    } catch (error) {
      console.error("Error adding user:", error);
      throw error;
    }
  };
  export const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);
      return user;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app); // Add this line
export { ref, uploadBytes, getDownloadURL }