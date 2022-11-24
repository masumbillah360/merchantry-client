import { getAuth } from "firebase/auth";
import React, { createContext } from "react";
import { app } from "../firebase/firebase.init";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const user = {
    name: "masum",
    email: "masum@gm.com",
  };
  const authInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
