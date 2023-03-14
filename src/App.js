import './App.css';
import { Routes, Route } from "react-router-dom";
import Careers from "./routes/Careers";
import Home from "./routes/Home";
import Navbar from './component/Navbar';
import Arrow from './routes/Arrow';
import LetterShow from './routes/LetterShow';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arrow" element={<Arrow />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/LetterShow" element={<LetterShow />} />
      </Routes>
    </>
  );
}
export default App;