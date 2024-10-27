import { BrowserRouter,Route,Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Contact from "./pages/Contact/Contact";
import ForStudents from "./pages/ForStudents/ForStudents";
import Resources from "./pages/Resources/Resources";

function App(){
return(
  <>
  <BrowserRouter>
 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/forstudents' element={<ForStudents/>}/>
    <Route path='/resources' element={<Resources/>}/>
  </Routes>
 
  </BrowserRouter>
  </>
)
}
export default App;