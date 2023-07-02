import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Service from "./Components/Service";

function App() {
  const msg = useSelector((state) => state.msg);
  return (
    <div>
      <div>{msg}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;