import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import SearchAppBar from "./components/Appbar/Appbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Tour />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
