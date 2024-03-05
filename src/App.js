import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from ".//pages/Home"
import About from "./pages/About";
import Heating from "./pages/Heating";
import Cooling from "./pages/Cooling";

;

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/heating" element={<Heating />} />
          <Route path="/cooling" element={<Cooling />} />
          <Route path="/ventilation" element={<Cooling />} />
          <Route path="/cooling" element={<Cooling />} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
