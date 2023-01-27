import React, { useEffect } from 'react';
import { useState } from 'react';
import './Signup.scss';
import { BASE_URL } from '../../config';

const Signup = ({ closeModal, emailValue, handleEmail }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false); //회원가입 버튼 활성화, 비활성화

  //이메일 현재값 저장
  const onEmailHandler = e => {
    setEmail(e.currentTarget.value);
  };
  //이름 현재값 저장
  const onNameHandler = e => {
    setName(e.currentTarget.value);
  };
  //비밀번호 현재값 저장
  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  //이메일, 이름, 비밀번호를 모두 입력했을 때
  useEffect(() => {
    if (email && name && password) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, name, password]);

  console.log('버튼속성', disabled);

  //회원가입
  const handleSignup = () => {
    fetch(`${BASE_URL}/signup`, {
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
              </span>
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
                <div className="check-box-text">만 15세 이상입니다.</div>
              </label>
              <label className="check-box-label" htmlFor="">
                <input type="checkbox" />
                <div className="check-box-text">개인회원 이용약관 동의</div>
              </label>
              <label className="check-box-label" htmlFor="">
                <input type="checkbox" />
                <div className="check-box-text">개인정보 수집 및 이용 동의</div>
              </label>
              <label className="check-box-label" htmlFor="">
                <input type="checkbox" />
                <div className="check-box-text">마케팅 수신 동의</div>
              </label>
            </div>
            {disabled ? (
              <button
                className="true-signup-button"
                disabled={false}
                onClick={handleSignup}
              >
                회원가입
              </button>
            ) : (
              <button
                className="false-signup-button"
                disabled={false}
                onClick={handleSignup}
              >
                회원가입
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
