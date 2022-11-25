import React, { useState } from 'react';
import css from './MyPage.module.scss';
import Apply from '../../components/MyPage/Apply';
import Bookmark from '../../components/MyPage/Bookmark';
import Account from '../../components/MyPage/Account';
import Leave from '../../components/MyPage/Leave';

function MyPage() {
  const [active, setActive] = useState('Apply');
  return (
    <div className={css.container}>
      <nav className={css.menuNav}>
        <ul className={css.navList}>
          <p className={css.name}>박성아 님</p>
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
  );
}

export default MyPage;
