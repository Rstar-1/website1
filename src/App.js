import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./website/error/Error";
import Navbar from "./website/navbar/Navbar";
import Footer from "./website/footer/Footer";
import Home from "./website/pages/home/Home";
import ScrollToTop from "./website/scrolltotop/ScrollToTop";
import Service from "./website/pages/service/Service";
import Service2 from "./website/pages/service2/Service2";
import ServiceDetails from "./website/pages/servicedetails/ServiceDetails";
import Team from "./website/pages/team/Team";

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
          <Route path="/service" element={<Service />} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/teams" element={<Team />} />
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
