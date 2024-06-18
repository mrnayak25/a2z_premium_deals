import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
import { useState, useEffect } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyBU0QPUi6-R9qDIGQpn1C4DkY8VdDpYa4Y",
    authDomain: "a2zpremiumdeals-ef9c5.firebaseapp.com",
    databaseURL: "https://a2zpremiumdeals-ef9c5-default-rtdb.firebaseio.com",
    projectId: "a2zpremiumdeals-ef9c5",
    storageBucket: "a2zpremiumdeals-ef9c5.appspot.com",
    messagingSenderId: "45251047127",
    appId: "1:45251047127:web:2e81a543f51bb0e71e8a92",
    measurementId: "G-33X6MYM2DW"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };

export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
      return unsubscribe;
    }, []);
  
    const login = async (email, password) => {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setCurrentUser(user);
    };
  
    const logout = async () => {
      await signOut(auth);
      setCurrentUser(null);
    };
  
    return {
      currentUser,
      login,
      logout
    };
  };
