import React, { useRef } from 'react';
import { useState } from 'react';
import './Signup.scss';

const Signup = ({ setModalOpen }) => {
  // 모달창 off
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="Signup-modal-out-wrapper">
      <div className="Signup-modal-wrapper">
        <div className="close-Signup-modal-btn-wrapper">
          <button className="close-Signup-modal-btn" onClick={closeModal}>
            X
          </button>
        </div>
        <section className="Signup-modal-content-wrapper">
          <div className="title-wrapper">
            <h1>회원가입</h1>
          </div>
          <div className="content-inner-wrapper">
            <div className="email-content-wrapper">
              <div className="email-title">이메일</div>
              <input
                type="text"
                placeholder="이메일을 입력해 주세요."
                // ref={emailValue}
                // onChange={handleEmail}
              />
            </div>
            <div className="name-content-wrapper">
              <div className="name-title">이름</div>
              <input
                type="text"
                placeholder="이름을 입력해 주세요."
                // ref={emailValue}
                // onChange={handleEmail}
              />
            </div>
            <div className="email-content-wrapper">
              <div className="email-title">비밀번호</div>
              <input
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                // ref={emailValue}
                // onChange={handleEmail}
              />
            </div>
            <div className="check-box-wrapper">
              <label htmlFor="">
                <input type="checkbox" />
                <div className="auto-login-text">전체동의</div>
              </label>
              <hr />
              <label htmlFor="">
                <input type="checkbox" />
                <div className="auto-login-text">만 15세 이상입니다.</div>
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                <div className="auto-login-text">개인회원 이용약관 동의</div>
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                <div className="auto-login-text">
                  개인정보 수집 및 이용 동의
                </div>
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                <div className="auto-login-text">마케팅 수신 동의</div>
              </label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
