import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/home/HomePage";
import CompanyPage from "./pages/company/CompanyPage";
import ProductsPage from "./pages/products/ProductsPage";
import ContactPage from "./pages/contact/ContactPage";
import GalleryPage from "./pages/gallery/GalleryPage";
import NewsPage from "./pages/news/NewsPage";
import VacanciesPage from "./pages/vacancies/VacanciesPage";
import OrderPage from "./pages/order/OrderPage";

// Components
// import Footer from "./components/layout/Footer";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/vacancies" element={<VacanciesPage />} />
                <Route path="/order" element={<OrderPage />} />
            </Routes>

            {/* <Footer /> */}
        </>
    );
}

export default App;
