import './App.css';
import React, { useEffect, useState } from 'react'
import Topbar from './components/Adminpanel/Topbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Student from "./components/student/Student";
import Studentview from "./components/student/Studentview";
import Certificate from "./components/student/Certificate";
import Certificateview from "./components/student/Certificateview";


function App() {
  const [isloggedin,setIsloggedin] =useState(false);

  useEffect(()=>{
  const storevalue =localStorage.getItem("isloggedin");
  if(storevalue==="1")
   {
    setIsloggedin(true); 
  }
  },[])
  
  const Logincheck =() =>{
  localStorage.setItem("isloggedin",'1')
  setIsloggedin(true);
  }
  const Logoutcheck =() =>{
  localStorage.removeItem("isloggedin")
  setIsloggedin(false);
  }

  
  return (
    <div >
      <React.Fragment>
          { !isloggedin && <Topbar checkLogOut={Logoutcheck}/>}
          { isloggedin && <Login checkLogin={Logincheck}/>}
       </React.Fragment> 

     <BrowserRouter>
     <Routes>
      <Route path='/student' element={<Student method='POST'/>}></Route>
      <Route path='/studentview' element={<Studentview method='get'/>}></Route>
      <Route path='/certificate' element={<Certificate method='POST'/>}></Route>
      <Route path='/certificateview' element={<Certificateview method='get' />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
