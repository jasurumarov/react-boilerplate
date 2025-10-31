import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";

// Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
