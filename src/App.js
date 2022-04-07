import "./App.css";
import { Outlet, useOutletContext, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Outlet />
    </div>
  );
}

export default App;
