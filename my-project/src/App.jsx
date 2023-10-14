import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}
