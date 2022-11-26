import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser({});
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const handleUserLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleCreateuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleUpdateUser = (name, image) => {
    const profile = {
      displayName: name,
      photoURL: image,
    };
    console.log(profile);
    return updateProfile(auth.currentUser, profile);
  };
  const handleLogOut = () => {
    setLoading(true);
    return signOut(auth).then(() => {});
  };

  const authInfo = {
    user,
    loading,
    handleGoogleLogin,
    handleUserLogin,
    handleCreateuser,
    handleUpdateUser,
    handleLogOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
