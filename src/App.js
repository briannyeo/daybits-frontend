import "./App.css";

import Navbar from "./components/Navbar";
import { atom, useAtom } from "jotai";
import Main from "./pages/Main";

export const loginAtom = atom(false);

function App() {
  const [login, setLogin] = useAtom(loginAtom);
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
