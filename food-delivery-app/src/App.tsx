import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Menus from "./components/Menus";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout />
                <Home />
              </>
            }
          />
          <Route path="/menu" element={<Menus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
