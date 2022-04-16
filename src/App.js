import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { atom, useAtom } from "jotai";
import Main from "./pages/Main";

export const loginAtom = atom(false);

function App() {
  const [profilecompiled, setProfilecompiled] = useState([]);

  const [login, setLogin] = useAtom(loginAtom);
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
