import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomeBody from "./components/HomeBody";
import About from "./components/About";
import Articles from "./components/Articles";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
