import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Layout/Header";
import Home from "./components/Pages/Home.jsx"

function App() {

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
