import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

function Header() {
  const navJobsearch = useNavigate();
  const goToJobsearch = () => {
    navJobsearch('/posts');
  };

  return (
    <div className="header-wrapper">
      <div className="header-content-wrapper">
        <div className="logo-search-wrapper">
          <span className="logo"></span>
          <div className="search-out-wrapper">
            <div className="search-inner-wrapper">
              <div className="search-icon"></div>
              <input type="text" placeholder="검색어를 입력해주세요." />
            </div>
          </div>
        </div>
        <div className="nav-wrapper">
          <span className="menu" onClick={goToJobsearch}>
            직무 탐색
          </span>
          <span className="menu">더. 루키</span>
          <span className="menu">이력서</span>
          <span className="menu">개발자 인터뷰</span>
          <span className="menu">북콘서트</span>
          <span className="special-menu">회원가입/로그인</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
