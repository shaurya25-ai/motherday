import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Letter from "./pages/Letter";
import Timeline from "./pages/Timeline";
import ThankYou from "./pages/ThankYou";

import Navbar from "./components/Navbar";
import FloatingHearts from "./components/FloatingHearts";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <FloatingHearts />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;