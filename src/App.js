import './App.css';
import { Routes, Route } from "react-router-dom";
import Careers from "./routes/Careers";
import Home from "./routes/Home";
import Navbar from './component/Navbar';
import Arrow from './routes/Arrow';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arrow" element={<Arrow />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}
export default App;