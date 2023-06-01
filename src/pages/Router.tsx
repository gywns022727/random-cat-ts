import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Cat from "./Cat";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
    </BrowserRouter>
  );
}
