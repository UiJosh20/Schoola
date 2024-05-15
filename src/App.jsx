import { Route, Routes } from "react-router-dom"
import Signup from "./Components/Signup"
import "./App.css"
function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/admin">

      </Route>
    </Routes>
     
    </>
  )
}

export default App
