import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Careers from "./components/Careers";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavLink to="/">
            <h2>JobRouter</h2>
          </NavLink>
          <div className="sub-nav">
            <NavLink to="about">About</NavLink>
            <NavLink to="careers">Careers</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
