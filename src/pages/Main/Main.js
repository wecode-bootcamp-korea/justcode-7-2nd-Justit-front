import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="main-resume-line">
          <span className="main-resume-content">
            <b>개발자를 위한 이력서</b>가 필요하다면, 지금 다운로드 받으세요.
            <span className="main-resume-link">
              <b>&nbsp; &nbsp;이력서 서식 무료로 받기</b>
            </span>
          </span>
        </div>
        <section className="main-slider-login-wrapper">
          <div className="slider-wrapper">
            <div className="slider">슬라이더</div>
          </div>
          <div className="login-wrapper">
            <div className="login-text">
              회원가입/로그인하고
              <br />
              점핏의 다양한 혜택을 만나보세요.
            </div>
            <button className="signup-login-btn">
              회원가입&nbsp;/&nbsp;로그인
            </button>
            <div className="kakao-login-wrapper">
              <span className="kakao-login-text">카카오로 3초만에 로그인</span>
              <button className="kakako-login-btn"></button>
            </div>
          </div>
        </section>
        <section className="position-recommend-section">
          <div className="position-recommend-wrapper">
            <h1>회원님을 위한 포지션을 보고싶다면?</h1>
          </div>
          <div className="position-recommend-text-wrapper">
            <div className="icon"></div>
            <span className="position-recommend-text">
              3초만에 회원가입/로그인하고 취향저격 포지션을 추천받아보세요!
            </span>
            <span className="signup-login-btn">회원가입/로그인</span>
          </div>
        </section>
        <section className="popular-position-wrapper">
          <h1>이번주 인기 포지션</h1>
          <div className="main-cardList">카드컴포넌트</div>
        </section>
        <section className="banner-wrapper">
          <span className="banner-text">
            점핏에서 지원하고 합격하면 <b>취업축하금 70만원</b>을 드려요.
          </span>
          <span className="money-icon"></span>
        </section>
        <section className="fast-response-company-wrapper">
          <div className="fast-response-company-header">
            <h1>#지원 응답이 빠른 기업</h1>
            <button className="move-left-btn">왼</button>
            <button className="move-right-btn">오</button>
          </div>
          <div className="long-cardList">롱 카드컴포넌트</div>
        </section>
        <section className="new-position-wrapper">
          <h1>신규 등록 포지션</h1>
          <div className="main-cardList">카드컴포넌트</div>
        </section>
      </div>
    </>
  );
};

export default Main;
