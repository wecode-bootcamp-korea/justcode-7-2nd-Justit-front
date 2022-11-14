import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
// import Resume from './Resume/Resume';
import ResumeF from './ResumeF/ResumeF';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/resumeF" element={<ResumeF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
