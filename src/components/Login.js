import React,{useState,useEffect, useContext}from 'react'
import {useNavigate} from "react-router-dom"
import UserContext from './context/UserContext';




const Login = () => {
  const navigate = useNavigate();

  // const {user, setUser, login} = useContext(UserContext)

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


  const userNameControl = (e) => {
    const trimmedUserName = e.target.value.trim();

    setUser({
      ...user,
      username: trimmedUserName,
    });
  };

  const passwordControl = (e) => {
    const trimmedPassword = e.target.value.trim();

    setUser({
      ...user,
      password: trimmedPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.username === "admin" && user.password === "admin") {
      login(user);

      console.log("giriş başarılı")
    } 
  };
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(loggedIn));
  }, [loggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    localStorage.removeItem("auth");

    navigate("/home");
  };

 
  return (
    <div className='LoginApp'>
        <form onSubmit={handleSubmit}>
        <div className='LoginBox'>
        <h2>Daily Weather Data</h2> <span>User login for</span>
            <input type="text" placeholder='User-Name' onChange={userNameControl}></input>
            <input type="Password" placeholder='Password'  onChange={passwordControl}></input>
            <button type="submit" onClick={handleLogout}>
          Login
            </button>
        </div> 
        </form>
    </div>
  )
}

export default Login
