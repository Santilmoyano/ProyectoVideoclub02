import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login" 
import './App.css'
import Home from "./pages/Home"
import Error from "./components/Error"
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/error" element={<Error/>}/>

      </Routes>
      </BrowserRouter>
      
      
     
      
    </>
  )
}

export default App
