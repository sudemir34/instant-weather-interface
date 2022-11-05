import { useState, createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let defaultValues = {
    username: "",
    password: "",
  };

  let defaultAuth = false;

  if (localStorage.getItem("user")) {
    defaultValues = JSON.parse(localStorage.getItem("user"));
  }

  if (localStorage.getItem("auth")) {
    defaultAuth = JSON.parse(localStorage.getItem("auth"));
  }

  const [user, setUser] = useState(defaultValues);
  const [loggedIn, setLoggedIn] = useState(defaultAuth);

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const value = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    login,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;