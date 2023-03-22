import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import "./App.css";

function App() {
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  </Router>;
}

export default App;
