import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import AllTask from "./Pages/AllTask"
import NewTask from "./Pages/NewTask"
import ErrorPage from "./Pages/ErrorPage"
import Navbar from "./Layouts/Navbar"

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/all-task" element={<AllTask/>}/>
      <Route path="/new-task" element={<NewTask/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
