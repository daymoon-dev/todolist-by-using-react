import { Index } from "./pages/Index";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
