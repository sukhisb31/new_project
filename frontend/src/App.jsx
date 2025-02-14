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
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
