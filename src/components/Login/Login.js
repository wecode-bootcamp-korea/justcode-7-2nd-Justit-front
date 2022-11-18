import React, { useRef } from 'react';
import { useState } from 'react';
import './Login.scss';
import Signup from '../Signup/Signup';

const Login = ({ setModalOpen }) => {
  // 모달창 off
  const closeModal = () => {
    setModalOpen(false);
  };

  const emailValue = useRef(); //이메일 input에 입력한 값
  const [disabled, setDisabled] = useState(false); //회원가입 버튼 활성화, 비활성화

  //이메일 유효성검사
  const handleEmail = e => {
    e.preventDefault();
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regExp.test(emailValue.current.value)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  console.log('버튼활성:', disabled);

  const [signUpModalOpen, setSignUpModalOpen] = useState(false); //회원가입 모달창 오픈

  // 회원가입 모달창 노출
  const showSignUpModal = e => {
    e.preventDefault();
    setSignUpModalOpen(true);
  };

  return (
    <>
      {signUpModalOpen && <Signup setSignUpModalOpen={setSignUpModalOpen} />}
      <div className="login-modal-out-wrapper">
        <div className="login-modal-wrapper">
          <div className="close-login-modal-btn-wrapper">
            <button className="close-login-modal-btn" onClick={closeModal}>
              X
            </button>
          </div>
          <section className="login-modal-content-wrapper">
            <div className="title-wrapper">
              <h1>
                반가워요
                <br />
                <b>저스트잇에서 커리어점프해요!</b>
              </h1>
            </div>
            <div className="content-inner-wrapper">
              <div className="email-content-wrapper">
                <div className="email-title">이메일</div>
                <input
                  type="text"
                  placeholder="이메일을 입력해 주세요."
                  ref={emailValue}
                  onChange={handleEmail}
                />
                {disabled == false && (
                  <div className="signUp-vali-check">
                    올바른 이메일을 입력해주세요.
                  </div>
                )}
              </div>
              {disabled ? (
                <button
                  className="true-login-btn"
                  disabled={false}
                  onClick={showSignUpModal}
                >
                  저스트잇 시작하기
                </button>
              ) : (
                <button className="false-login-btn" disabled={false}>
                  저스트잇 시작하기
                </button>
              )}

              <div className="auto-login-wrapper">
                <label htmlFor="">
                  <input type="checkbox" />
                  <div className="auto-login-text">자동로그인</div>
                </label>
              </div>
              <div className="kakao-login-area-wrapper">
                <div className="kakao-login-title-wrapper">
                  <span className="kakao-login-title-line"></span>
                  <span className="kakao-login-title">
                    카카오로 3초만에 로그인
                  </span>
                  <span className="kakao-login-title-line"></span>
                </div>
                <div className="kakao-login-logo"></div>
              </div>
            </div>
            <div className="login-modal-footer">
              <div className="login-modal-footer-text">
                이력서 UPDATE하면 치킨쏜닭!
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Login;
