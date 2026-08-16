import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './landing_page/Footer';
import HomePage from './landing_page/home/HomePage'
import Signup from './landing_page/signup/Signup'
import AboutPage from './landing_page/about/AboutPage'
import SupportPage from './landing_page/support/SupportPage'
import PricingPage from './landing_page/pricing/PricingPage'
import ProductPage from './landing_page/products/ProductPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './landing_page/NotFound';
import Home from './dashboard/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/dashboard/*" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
