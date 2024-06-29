import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login" 
import './App.css'
import Home from "./pages/Home"
import Error from "./components/Error"
import Peliculas from "./components/Peliculas"
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/peliculas" element={<Peliculas/>}/>

      </Routes>
      </BrowserRouter>
      
      
     
      
    </>
  )
}

export default App
