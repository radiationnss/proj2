import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home";
import { Parallax } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
    </div>
  );
}

export default App;
