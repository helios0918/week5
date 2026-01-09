import React from "react";
import "./App.css";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import L from "./ui/L";
import Signup from "./auth/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<L />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
