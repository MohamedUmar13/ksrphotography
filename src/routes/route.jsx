import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Christian from "../pages/weddings/Christian";
import Brahmin from "../pages/weddings/Brahmin";
import Muslim from "../pages/weddings/Muslim";
import Hindu from "../pages/weddings/Hindu";
import Engagement from "../pages/weddings/Engagement";
import ContactUs from "../pages/ContactUs";
import HomePage from "../pages/HomePage";
import Gallery from "../pages/Gallery";
import SpecifiedEvent from "../pages/SpecifiedEvent";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/brahmin" element={<Brahmin />} />
            <Route path="/christian" element={<Christian />} />
            <Route path="/muslim" element={<Muslim />} />
            <Route path="/hindu" element={<Hindu />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/specified-event/:imgId" element={<SpecifiedEvent />} />
        </Routes>
    );
}

