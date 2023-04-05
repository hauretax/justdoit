import './App.css';
import { Routes, Route } from "react-router-dom";
import Careers from "./routes/Careers";
import Home from "./routes/Home";
import Arrow from './routes/Arrow';
import LetterShow from './routes/LetterShow';
import Keyboard from './routes/typing';
import ShowAnime from './routes/DemoAnimeTest';
import Webtopdf from './routes/webtopdf';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arrow" element={<Arrow />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/LetterShow" element={<LetterShow />} />
        <Route path="/Keyboard" element={<Keyboard />} />
        <Route path="/demo" element={<ShowAnime />} />
        <Route path="/pdf" element={<Webtopdf />} />
      </Routes>
    </>
  );
}
export default App;

// /#/Keyboard