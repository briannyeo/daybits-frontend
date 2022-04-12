import "./App.css";
import { useState } from "react";
import { Outlet, useOutletContext, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [profilecompiled, setProfilecompiled] = useState([]);

  return (
    <div className="App">
      <Header />

      <Outlet context={[profilecompiled, setProfilecompiled]} />
    </div>
  );
}

export default App;
