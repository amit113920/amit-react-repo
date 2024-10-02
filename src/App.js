import logo from './logo.svg';
import './App.css';
import Layout from './layout/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/home';
import Exam from './exam/exam';


function App() {
  return (

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
<Route path='/home' element={<Home/>}/> 
<Route path='/exam' element={<Exam/>}/>
    </Route>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
