import React from 'react'
// import Home from './components/Home'
import {MainContext} from "./context"
import axios from "axios";
import { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";



const App = () => {
    const [data, setaData] = useState({});
    const [location,setLocation] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0bd48995cedf91f2e5952fdfa4338440`
  
    const searchLocation = () => {
            axios.get(url).then((response) => {
                setaData(response.data);
                console.log(response.data);
            })  
    };
 

    const save = () => {
    
        if(localStorage.getItem('data') == null){
            localStorage.setItem("data",'[]')
        }
        let oldData = JSON.parse(localStorage.getItem("data"));
        oldData.push(location)
        localStorage.setItem("data", JSON.stringify(oldData))

        if(oldData.length === 4){
            oldData.shift()
            localStorage.setItem("data", JSON.stringify(oldData))
        }
        // if(localStorage.getItem('data') != null){
        //     document.getElementsByTagName("li").innerHTML = JSON.parse(localStorage.getItem("data"))
        // };
        setLocation("")  


        const value = JSON.parse(localStorage.getItem("data"))
        value.splice(2,",")
        console.log(value)
    }

 const accessible = {
        data,setaData,
        location,setLocation,
        searchLocation,save

 }
  return (
    <MainContext.Provider value={accessible}>
    <BrowserRouter>
        <Routes>
  
        <Route exact path='/' element = {<Login/>} />
        <Route exact path='/Home' element = {<Home/>} />    
        </Routes>
    </BrowserRouter>
   
      
    </MainContext.Provider>
  )
}

export default App
