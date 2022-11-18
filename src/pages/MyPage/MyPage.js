import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import css from './MyPage.module.scss';
import MyPageFirst from '../../components/MyPage/MyPageFirst';
import MyPageSecond from '../../components/MyPage/MyPageSecond';
import MyPageThird from '../../components/MyPage/MyPageThird';
import MyPageFourth from '../../components/MyPage/MyPageFourth';

function MyPage() {
  const [active, setActive] = useState('MyPageFirst');
  return (
    <div className={css.container}>
      <nav className={css.menuNav}>
        <ul className={css.navList}>
          {/* <Link to="/login"> */}
          <p className={css.name}>박성아 님</p>
          {/* </Link> */}
          <li onClick={() => setActive('MyPageFirst')}>입사지원 현황</li>
          <li onClick={() => setActive('MyPageSecond')} className={css.border}>
            포지션 스크랩 리스트
          </li>
          <li onClick={() => setActive('MyPageThird')}>계정 설정</li>
          <li onClick={() => setActive('MyPageFourth')}>계정 탈퇴</li>
        </ul>
      </nav>
      <div className={css.pages}>
        {active === 'MyPageFirst' && <MyPageFirst />}
        {active === 'MyPageSecond' && <MyPageSecond />}
        {active === 'MyPageThird' && <MyPageThird />}
        {active === 'MyPageFourth' && <MyPageFourth />}
      </div>
    </div>
  );
}

export default MyPage;
