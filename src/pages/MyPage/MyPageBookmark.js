import React, { useState, useEffect } from 'react';
import css from './MyPageAccount.module.scss';
import Apply from '../../components/MyPage/Apply';
import Bookmark from '../../components/MyPage/Bookmark';
import Account from '../../components/MyPage/Account';
import Leave from '../../components/MyPage/Leave';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function MyPageBookmark() {
  const [active, setActive] = useState('Bookmark');
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
  return (
    <>
      <Header />
      <div className={css.container}>
        <nav className={css.menuNav}>
          <ul className={css.navList}>
            <p className={css.name}>{userName} 님</p>
            <li onClick={() => setActive('Apply')}>입사지원 현황</li>
            <li onClick={() => setActive('Bookmark')} className={css.border}>
              포지션 스크랩 리스트
            </li>
            <li onClick={() => setActive('Account')}>계정 설정</li>
            <li onClick={() => setActive('Leave')}>계정 탈퇴</li>
          </ul>
        </nav>
        <div className={css.pages}>
          {active === 'Apply' && <Apply />}
          {active === 'Bookmark' && <Bookmark />}
          {active === 'Account' && <Account />}
          {active === 'Leave' && <Leave />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyPageBookmark;
