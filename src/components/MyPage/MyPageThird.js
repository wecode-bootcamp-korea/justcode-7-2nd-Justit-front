import React from 'react';
import css from './MyPageThird.module.scss';

function MyPageThird() {
  return (
    <div className={css.third}>
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
              placeholder="sonia_0903@naver.com"
            />
            <button type="button">메일변경</button>
          </div>
        </div>
        <div className={css.phone}>
          <p className={css.title}>연락처</p>
          <i class="fa-solid fa-circle-exclamation"></i>
          <span className={css.desc}>
            변경된 연락처는 새롭게 적용되며, 재로그인이 필요합니다.
          </span>
          <p className={css.descMore}>
            지원한 이력이 있는 경우, 지원 정보에도 변경된 번호가 적용됩니다.
          </p>
          <div className={css.changePhone}>
            <input
              name="changePhone"
              id="changePhone"
              type="text"
              placeholder="010-1234-5678"
            />
            <button type="button">번호변경</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageThird;
