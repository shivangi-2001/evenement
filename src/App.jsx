import "./App.css"
import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Service from "./pages/Service"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
