import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.js';
import HeaderSection from './HeaderSection.js';
import Home from './Home.js';
import ProductsPage from "./ProductsPage.js";
import Product from './Product.js';
import Finish from "./Finish.js";
import Contact from './Contact.js';

function App() {
  return (
    <Router> 
      <div className="App">
        <div>
          <Header />
          <HeaderSection />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/finish" element={<Finish />} />
          </Routes>
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
