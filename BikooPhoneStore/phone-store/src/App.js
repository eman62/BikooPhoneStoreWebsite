// src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RouterPages from "./router/router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <RouterPages></RouterPages>
      </BrowserRouter>
    </div>
  );
}

export default App;
