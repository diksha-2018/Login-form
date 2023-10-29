import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

