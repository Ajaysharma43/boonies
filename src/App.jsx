import React from "react"
import Homepage from "./pages/Homapage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./Components/Explore/Explore.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
