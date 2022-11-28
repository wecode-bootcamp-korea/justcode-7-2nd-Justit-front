import { React, useState, useEffect } from 'react';
import css from './Account.module.scss';
import ChangeEmail from './ChangeEmail';
// 페이지가 회전하는 문제 해결해야함
function Account() {
  const [email, setEmail] = useState(false);
  function emailSwitch(e) {
    setEmail(!email);
    e.preventDefault();
  }
  const [data, setData] = useState({});
  useEffect(() => {
    // const token = localStorage.getItem('token');
    fetch('http://localhost:8000/getme', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjY5MTc3NDEwfQ.-a6NQWcjWgwOF-Z5Z7HSM2NwhKCxTVkuFdCxxA1khDE',
      },
    })
      .then(response => response.json())
      .then(result => setData(result.userInfo));
  }, []);
  let mail = data.email;
  return (
    <div className={css.account}>
      <h1>계정 설정</h1>
      <div className={css.wrapper}>
        <h4>기본정보</h4>
        <div className={css.email}>
          <p className={css.title}>이메일</p>
          <i class="fa-solid fa-circle-exclamation"></i>
          <span className={css.desc}>
            변경된 이메일은 로그인 아이디로 적용되며, 재로그인이 필요합니다.
          </span>
          <p className={css.descMore}>
            지원한 이력이 있는 경우, 지원 정보에도 변경된 메일이 적용됩니다.
          </p>
          <div className={css.changeMail}>
            <input
              name="changeMail"
              id="changeMail"
              type="text"
              placeholder=""
              value={mail}
            />
            <button type="button" onClick={emailSwitch}>
              메일변경
            </button>
          </div>
          {email === true && <ChangeEmail />}
        </div>
      </div>
    </div>
  );
}

export default Account;
