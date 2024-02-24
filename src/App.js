import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./website/error/Error";
import Navbar from "./website/navbar/Navbar";
import Footer from "./website/footer/Footer";
import Home from "./website/home/Home";
import About from "./website/about/About";
import Connect from "./website/connect/Connect";
import Service from "./website/services/Service";
import Gallery from "./website/gallery/Gallery";
import ScrollToTop from "./website/scrolltotop/ScrollToTop";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service" element={<Service />} />
          {/* ======================= End-pages ======================= */}

          {/* ======================= Start-Error ======================= */}
          <Route path="*" element={<Error />} />
          {/* ======================= End-Error ======================= */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
