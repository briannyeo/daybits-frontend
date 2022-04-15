import "./App.css";
import { useState } from "react";
import { Outlet, useOutletContext, Link } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  const [profilecompiled, setProfilecompiled] = useState([]);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Outlet context={[profilecompiled, setProfilecompiled]} />
    </div>
  );
}

export default App;
