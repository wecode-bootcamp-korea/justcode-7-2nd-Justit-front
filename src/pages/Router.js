import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './MyPage/MyPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
