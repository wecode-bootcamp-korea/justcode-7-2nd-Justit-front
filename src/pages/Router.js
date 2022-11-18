import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './MyPage/MyPage';

import Detail from './Detail/Detail';
import Company from './Company/Company';
import Main from './Main/Main';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/company" element={<Company />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
