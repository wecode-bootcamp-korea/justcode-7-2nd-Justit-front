import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './MyPage/MyPage';
import Detail from './Detail/Detail';
import Company from './Company/Company';
import JobSearch from './JobSearch/JobSearch';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Footer from '../components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<JobSearch />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/footer" element={<Footer />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/company/:id" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
