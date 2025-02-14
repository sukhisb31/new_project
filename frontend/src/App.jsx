import Login from "./Components/pages/Form/Login/Login";
import Signup from "./Components/pages/Form/Signup/Signup";
import { Navbar } from "./Components/pages/Navbar/Navbar"
import { BrowserRouter,Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
