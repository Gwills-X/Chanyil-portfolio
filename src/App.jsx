import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Mission from "./pages/Mission";
import ChayilDaughters from "./pages/ChayilDaughters";
import LeadershipMentorship from "./pages/LeadershipMentorship";
import Speaking from "./pages/Speaking";
import MediaResources from "./pages/MediaResources";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Testimonials from "./pages/Testimonials";
import KingdomVentures from "./pages/KingdomVentures";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />

        <div className=''>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/missions' element={<Mission />} />
            <Route path='/chayil-daughters' element={<ChayilDaughters />} />
            <Route path='/leadership' element={<LeadershipMentorship />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/kingdom-ventures' element={<KingdomVentures />} />

            <Route path='/invite' element={<Speaking />} />
            <Route path='/media' element={<MediaResources />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <Analytics />
    </div>
  );
};

export default App;
