import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";

import ChayilDaughters from "./pages/ChayilDaughters";
import CoursesPage from "./pages/CoursesPage";
import Speaking from "./pages/Speaking";

import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Testimonials from "./pages/Testimonials";
import Proverbs31Land from "./pages/KingdomVentures";
import ScrollToTop from "./components/ScrollToTop";
import Shop from "./pages/Shop";
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

            <Route path='/chayil-daughters' element={<ChayilDaughters />} />
            <Route path='/courses' element={<CoursesPage />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/kingdom-ventures' element={<Proverbs31Land />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/invite' element={<Speaking />} />

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
