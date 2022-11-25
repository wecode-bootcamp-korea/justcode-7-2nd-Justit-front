import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import Login from '../Login/Login';

function Header() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [userName, setUserName] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/getme', {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setUserName(result.userInfo.users_name));
  }, []);
  const showLoginModal = e => {
    e.preventDefault();
    setModalOpen(true);
  };

  const goToMain = () => {
    navigate('/');
  };
  const navJobsearch = useNavigate();
  const goToJobsearch = () => {
    navJobsearch('/posts');
  };

  const goToResume = () => {
    navigate('/resume');
  };

  const goToMyPage = () => {
    navigate('/mypage');
  };

  return (
    <div className="header-wrapper">
      <div className="header-content-wrapper">
        <div className="logo-search-wrapper">
          <span className="logo" onClick={goToMain}></span>
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
          <span className="menu" onClick={goToResume}>
            이력서
          </span>
          <span className="menu">개발자 인터뷰</span>
          <span className="menu">북콘서트</span>
          {userName ? (
            <span className="userName" onClick={goToMyPage}>
              {userName} 님
            </span>
          ) : (
            <span className="special-menu" onClick={showLoginModal}>
              회원가입/로그인
            </span>
          )}
          {modalOpen && <Login setModalOpen={setModalOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
