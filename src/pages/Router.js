import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Resume from '../pages/Resume/Resume';
import MyPage from '../pages/MyPage/MyPage';
import MyPageAccount from './MyPage/MyPageAccount';
import MyPageBookmark from './MyPage/MyPageBookmark';
import Company from './Company/Company';
import Detail from './Detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/MyPage/Account" element={<MyPageAccount />} />
        <Route path="/MyPage/Bookmark" element={<MyPageBookmark />} />
        <Route path="/company" element={<Company />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
