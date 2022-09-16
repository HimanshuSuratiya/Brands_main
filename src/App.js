import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HomePage from "./Pages/Home/HomePage";
import CataloguePage from "./Pages/Catalogue/CataloguePage";
import { Routes, Route, Navigate } from "react-router-dom";
import CorporatePage from "./Pages/Corporate/CorporatePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
