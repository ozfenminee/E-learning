import { BrowserRouter,Route,Routes } from "react-router-dom";
import { UserProvider } from "./usercontext";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Contact from "./pages/Contact/Contact";
import ForStudents from "./pages/ForStudents/ForStudents";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";

function App(){
return(
  <>
  <UserProvider>
  <BrowserRouter>
 
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/forstudents' element={<ForStudents/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path='/resources' element={<Resources/>}/>
  </Routes>
 
  </BrowserRouter>
  </UserProvider>
  </>
)
}
export default App;