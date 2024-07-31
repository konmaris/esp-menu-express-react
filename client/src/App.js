import { useEffect } from "react";
import Menu from "./components/Menu";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/menu");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/menu" element={<Menu />} exact />
      </Routes>
    </>
  );
}

export default App;
