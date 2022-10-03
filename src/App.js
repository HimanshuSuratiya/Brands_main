import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import LogoPage from "./Pages/Logo/LogoPage";
import CataloguePage from "./Pages/Catalogue/CataloguePage";
import { Routes, Route, Navigate } from "react-router-dom";
import CorporatePage from "./Pages/Corporate/CorporatePage";
import NewsPage from "./Pages/News/NewsPage";
import BrandPage from "./Pages/Brand/BrandPage";
import StxPage from "./Pages/Stx/StxPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogoPage />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/brand/stx-details" element={<StxPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
