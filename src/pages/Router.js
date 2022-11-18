import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Resume from './Resume/Resume';
import Footer from '../components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
