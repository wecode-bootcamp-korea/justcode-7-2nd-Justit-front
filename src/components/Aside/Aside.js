import React from 'react';
import css from './Aside.module.scss';

function Aside() {
  return (
    <div className={css.wingWrapper}>
      <div className={css.wing}>
        <img
          className={css.companyLogo}
          src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        />
        <h2>웹서비스 프론트엔드 개발</h2>
        <a>피처링</a>
        <span>취업축하금 70만원</span>
        <button className={css.btn}>지원하기</button>
        <div className={css.wingIcon}>
          <div>
            <img
              className={css.icon}
              src="https://cdn-icons-png.flaticon.com/512/3989/3989188.png"
            />
            <span>공유</span>
          </div>
          <div>
            <img
              className={css.icon}
              src="https://cdn-icons-png.flaticon.com/512/7073/7073727.png"
            />
            <span>스크랩</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
