import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Businesses from './pages/Businesses';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Investment from './pages/Investment';
import Contact from './pages/Contact';
import WebsiteDevelopment from './pages/business/WebsiteDevelopment';
import Agriculture from './pages/business/Agriculture';
import CarMechanic from './pages/business/CarMechanic';
import Boutique from './pages/business/Boutique';
import Restaurant from './pages/business/Restaurant';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/business/website-development" element={<WebsiteDevelopment />} />
            <Route path="/business/agriculture" element={<Agriculture />} />
            <Route path="/business/car-mechanic" element={<CarMechanic />} />
            <Route path="/business/boutique" element={<Boutique />} />
            <Route path="/business/restaurant" element={<Restaurant />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
