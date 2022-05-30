import { Index } from "./pages/Index";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <>
              <h1>잘못들어옴</h1>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
