import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login" 
import './App.css'
import Home from "./pages/Home"
import Alquiler from "./pages/Alquiler"
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/alquiler" element={<Alquiler/>}/>

      </Routes>
      </BrowserRouter>
      
      
     
      
    </>
  )
}

export default App
