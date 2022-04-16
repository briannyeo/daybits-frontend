import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [profilecompiled, setProfilecompiled] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Outlet context={[profilecompiled, setProfilecompiled]} />
    </div>
  );
}

export default App;
