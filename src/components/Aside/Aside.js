import React, { useState } from 'react';
import css from './Aside.module.scss';
import Join from './Join';

function Aside() {
  const [joinModal, setJoinModal] = useState(false);

  const openmodal = () => {
    setJoinModal(true);
  };
  const closeBtn = () => {
    setJoinModal(!joinModal);
  };
  return (
    <div className={css.wingWrapper}>
      <div className={css.wing}>
        <img
          className={css.companyLogo}
          src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        />
        <h2>웹서비스 프론트엔드 개발</h2>
        <a className={css.companyName}>피처링</a>
        <span className={css.congratsMoney}>💰 취업축하금 70만원</span>
        <button
          className={css.btn}
          onClick={() => {
            setJoinModal(true);
          }}
        >
          지원하기
        </button>
        {joinModal ? <Join closeBtn={closeBtn} /> : null}
        <div className={css.wingIcon}>
          <div>
            <img
              className={css.icon}
              src="https://cdn-icons-png.flaticon.com/512/3989/3989188.png"
            />
            <span className={css.share}>공유</span>
          </div>
          <div>
            <span className={css.iconBlank}></span>
            <img
              className={css.scrapIcon}
              src="https://cdn-icons-png.flaticon.com/512/7073/7073727.png"
            />
            <span className={css.scrap}>스크랩</span>
          </div>
        </div>
      </div>
      <div className={css.bannerWrapper}>
        <div className={css.bannerContent}>
          <span>첫 입사지원시,</span>
          <span>배민쿠폰 전원증정!</span>
        </div>
        <img
          className={css.bannerImage}
          src="https://cdn-icons-png.flaticon.com/512/8074/8074470.png"
        />
      </div>
    </div>
  );
}

export default Aside;
