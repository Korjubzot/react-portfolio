import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Hero from "./components/sidebar/hero/hero";
import Contact from "./components/sidebar/contact/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
