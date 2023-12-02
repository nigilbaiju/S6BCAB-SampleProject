import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Student from "./components/student/Student";
import Studentview from "./components/student/Studentview";
import Certificate from "./components/student/Certificate";


function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/student' element={<Student method='POST'/>}></Route>
      <Route path='/studentview' element={<Studentview method='get'/>}></Route>
      <Route path='/certificate' element={<Certificate/>}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
