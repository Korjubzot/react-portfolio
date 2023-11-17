import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Hero from "./components/sidebar/hero/hero";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar></Sidebar>
        <Hero></Hero>
      </div>
    </Router>
  );
}

export default App;
