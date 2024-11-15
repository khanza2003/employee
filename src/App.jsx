import Add from './Add'
import './App.css'
import Edit from './Edit'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
 

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    
    </>
  )
}

export default App
