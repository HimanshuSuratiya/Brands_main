import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import BrandPage from "./Pages/Brand/BrandPage";
import CataloguePage from "./Pages/Catalogue/CataloguePage";
import { Routes, Route, Navigate } from "react-router-dom";
import CorporatePage from "./Pages/Corporate/CorporatePage";
import NewsPage from "./Pages/News/NewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BrandPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
