import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import './Signup.scss';

const Signup = ({ closeModal, emailValue, handleEmail }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = event => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = event => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleSignup = () => {
    fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.message === 'USER_CREATED'
          ? (alert('회원가입 성공'), closeModal(true))
          : alert('회원가입 실패')
      );
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
            <h1 className="h1">회원가입</h1>
            <p className="p">
              <span className="span">
                기업 고객이신 경우, 기업서비스에서 가입을 진행해주세요.
              </span>{' '}
              <a className="a">🏢 기업서비스 바로가기</a>
            </p>
          </div>
          <div className="content-inner-wrapper">
            <div className="email-content-wrapper">
              <div className="email-title">이메일</div>
              <input
                className="email-input"
                type="text"
                placeholder="이메일을 입력해 주세요."
                value={email}
                // ref={emailValue}
                onChange={onEmailHandler}
              />
            </div>
            <div className="name-content-wrapper">
              <div className="name-title">이름</div>
              <input
                className="name-input"
                type="text"
                placeholder="이름을 입력해 주세요."
                value={name}
                // ref={emailValue}
                onChange={onNameHandler}
              />
            </div>
            <div className="password-content-wrapper">
              <div className="password-title">비밀번호</div>
              <input
                className="password-input"
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                value={password}
                // ref={emailValue}
                onChange={onPasswordHandler}
              />
            </div>
            <div className="check-box-wrapper">
              <label className="check-box-label-top" for="checkbox">
                <input className="checkbox" type="checkbox" />
                <span className="auto-login-text">전체동의</span>
              </label>
              <label className="check-box-label" htmlFor="">
                <input type="checkbox" />
                <div className="auto-login-text">만 15세 이상입니다.</div>
              </label>
              <label className="check-box-label" htmlFor="">
                <input type="checkbox" />
                <div className="auto-login-text">개인회원 이용약관 동의</div>
              </label>
              <label className="check-box-label" htmlFor="">
                <input type="checkbox" />
                <div className="auto-login-text">
                  개인정보 수집 및 이용 동의
                </div>
              </label>
              <label className="check-box-label" htmlFor="">
                <input type="checkbox" />
                <div className="auto-login-text">마케팅 수신 동의</div>
              </label>
            </div>
            <button className="signup-button" onClick={handleSignup}>
              회원가입
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
