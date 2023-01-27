import React from 'react';
import './Main.scss';
import MainCardList from '../../components/MainCardList/MainCardList';
import Login from '../../components/Login/Login';
import SimpleSlider from '../../components/SimpleSlider/SimpleSlider';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { BASE_URL } from '../../config';

const Main = () => {
  const navigate = useNavigate();
  const goToResume = () => {
    navigate('/resume');
  };
  const goToMyPage = () => {
    navigate('/mypage');
  };
  const [cardList, setCardList] = useState([]); //카드리스트 데이터
  const [timeCardList, setTimeCardList] = useState([]);
  const [newCardList, setNewCardList] = useState([]);
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/getme`, {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setUserName(result.userInfo.users_name));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/getme`, {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setUserEmail(result.userInfo.email));
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    alert('로그아웃되었습니다.');
    document.location.href = '/';
  };

  //인기포지션
  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(res => res.json())
      .then(res => setCardList(res.popularPosts));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(res => res.json())
      .then(res => setTimeCardList(res.timeLimitPosts));
  }, []);

  //신규등록포지션
  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then(res => res.json())
      .then(res => setNewCardList(res.newPosts));
  }, []);

  const [modalOpen, setModalOpen] = useState(false); //로그인 모달창 오픈

  //로그인 모달창 노출
  const showEmailModal = e => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <>
      <Header />
      {modalOpen && <Login setModalOpen={setModalOpen} />}
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
            <ImageSlider />
          </div>
          <div className="main-right-wrapper">
            {userEmail ? (
              <div className="login-wrapper">
                <div className="login-text">
                  <span className="welcome-comment">{userName}님 반가워요</span>
                  <button className="logout-btn" onClick={logout}>
                    로그아웃
                  </button>
                </div>
                <div className="user-email">{userEmail}</div>
                <div className="login-btns">
                  <a className="resume-btn" onClick={goToResume}>
                    <div>
                      <p>📝</p>
                      <p>이력서 작성</p>
                    </div>
                  </a>
                  <a className="myjustit-btn" onClick={goToMyPage}>
                    <div>
                      <p>😎</p>
                      <p>마이점핏</p>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              <div className="login-wrapper">
                <div className="login-text">
                  회원가입/로그인하고
                  <br />
                  저스트잇의 다양한 혜택을 만나보세요.
                </div>
                <button className="signup-login-btn" onClick={showEmailModal}>
                  회원가입&nbsp;/&nbsp;로그인
                </button>
                <div className="kakao-login-wrapper">
                  <span className="kakao-login-text">
                    카카오로 3초만에 로그인
                  </span>
                  <button
                    className="kakako-login-btn"
                    onClick={showEmailModal}
                  ></button>
                </div>
              </div>
            )}
            <section>
              <div className="notice-wrapper">
                <h1 className="notice-title">Notice</h1>
                <div className="notice-contents">
                  <span className="notice-content">
                    [이벤트]취준생을 위한 개발분야 총...
                  </span>
                  <span className="notice-date">2022-11</span>
                </div>
              </div>
            </section>
          </div>
        </section>
        {userEmail ? (
          <div className="position-recommend-wrapper">
            <div className="position-recommend-wrap">
              <h1 className="position-recommend-title">
                <img
                  className="position-recommend-good"
                  src="https://cdn-icons-png.flaticon.com/512/7027/7027382.png"
                />
                {userName} 님을 위한 추천!
              </h1>
              <div className="my-cardList">
                {timeCardList.map(cardList => {
                  return (
                    <MainCardList
                      key={cardList.id}
                      id={cardList.id}
                      images={cardList.images}
                      company_name={cardList.company_name}
                      title={cardList.title}
                      tech_stacks={cardList.tech_stacks}
                      location={cardList.location}
                      career_max={cardList.career_max}
                      career_min={cardList.career_min}
                      position_id={cardList.position_id}
                      view={cardList.view}
                      type={cardList.type}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <section className="position-recommend-section">
            <div className="position-recommend-wrapper">
              <h1>회원님을 위한 포지션을 보고싶다면?</h1>
            </div>
            <div className="position-recommend-text-wrapper">
              <div className="icon"></div>
              <span className="position-recommend-text">
                3초만에 회원가입/로그인하고 취향저격 포지션을 추천받아보세요!
              </span>
              <span className="signup-login-btn" onClick={showEmailModal}>
                회원가입/로그인
              </span>
            </div>
          </section>
        )}
        <section className="popular-position-wrapper">
          <h1>이번주 인기 포지션</h1>
          <div className="main-cardList">
            {cardList.map(cardList => {
              return (
                <MainCardList
                  key={cardList.id}
                  id={cardList.id}
                  images={cardList.images}
                  company_name={cardList.company_name}
                  title={cardList.title}
                  tech_stacks={cardList.tech_stacks}
                  location={cardList.location}
                  career_max={cardList.career_max}
                  career_min={cardList.career_min}
                  position_id={cardList.position_id}
                  view={cardList.view}
                  type={cardList.type}
                />
              );
            })}
          </div>
        </section>
        <section className="banner-wrapper">
          <span className="banner-text">
            저스트잇에서 지원하고 합격하면 <b>취업축하금 70만원</b>을 드려요.
          </span>
          <span className="money-icon"></span>
        </section>
        <section className="fast-response-company-wrapper">
          <div className="fast-response-company-header">
            <h1>#지원 응답이 빠른 기업</h1>
            <SimpleSlider />
          </div>
        </section>
        <section className="new-position-wrapper">
          <h1>신규 등록 포지션</h1>
          <div className="main-cardList">
            {newCardList.map(cardList => {
              return (
                <MainCardList
                  key={cardList.id}
                  id={cardList.id}
                  images={cardList.images}
                  company_name={cardList.company_name}
                  title={cardList.title}
                  tech_stacks={cardList.tech_stacks}
                  location={cardList.location}
                  career_max={cardList.career_max}
                  career_min={cardList.career_min}
                  position_id={cardList.position_id}
                  view={cardList.view}
                  type={cardList.type}
                />
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Main;
