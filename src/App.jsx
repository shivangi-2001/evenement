import "./App.css"
import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Service from "./pages/Service"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PricingContact from "./pages/pricing_contact"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Service />} />
        <Route path="/pricing_contact" element={<PricingContact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
