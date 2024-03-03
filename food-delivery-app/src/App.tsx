import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Menus from "./components/Menus";
import About from "./components/About";
import ShowMenuPart from "./components/ShowMenuPart";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Order from "./components/Order";

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
                <About />
                <ShowMenuPart />
                <Services />
                <Footer />
              </>
            }
          />
          <Route path="/menu" element={<Menus />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
