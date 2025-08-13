import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from './Components/Intro/Intro';
import Home from './Components/Home/Home';
import Cursorglow from './Components/Cursorglow/Cursorglow';
import "./App.css";
function App() {
  return (
    <div className="App">
      <Cursorglow />

      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
