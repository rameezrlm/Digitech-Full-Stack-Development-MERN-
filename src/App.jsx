import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Students from "./Pages/Students";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from  './Pages/Login'
import Signup from "./Pages/SignUp";

function App() {
  return (
    <>
    <Signup />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
