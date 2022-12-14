import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Resume from '../pages/Resume/Resume';
import MyPage from '../pages/MyPage/MyPage';
import MyPageAccount from './MyPage/MyPageAccount';
import MyPageBookmark from './MyPage/MyPageBookmark';
import Company from './Company/Company';
import Detail from './Detail/Detail';
import JobSearch from './JobSearch/JobSearch';
import Footer from '../components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/account" element={<MyPageAccount />} />
        <Route path="/mypage/bookmark" element={<MyPageBookmark />} />
        <Route path="/posts" element={<JobSearch />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/company/:id" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
