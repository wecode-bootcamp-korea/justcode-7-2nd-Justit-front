import { React, useState } from 'react';
import css from './Leave.module.scss';
import { BASE_URL } from '../../config';

function Leave() {
  const [email, setEmail] = useState('');
  const onEmailHandler = event => {
    setEmail(event.currentTarget.value);
  };

  const handleLeave = event => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/leave`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'DELETE_USER_SUCCESSFULLY') {
          localStorage.setItem('token', ''); //remove로 사용가능?
          alert('회원탈퇴에 성공하였습니다!');
        } else {
          alert('이메일을 확인해주세요!');
        }
      });
  };

  return (
    <div className={css.leave}>
      <h1>계정 탈퇴</h1>
      <div className={css.leaveWrapper}>
        <div className={css.desc}>
          <h3>회원 탈퇴 전 안내 사항을 꼭 확인해주세요.</h3>
          <h4>1) 탈퇴 아이디 복구 불가</h4>
          <p>탈퇴 후에는 아이디와 데이터 복구가 불가능합니다.</p>
          <p>신중하게 선택해주세요.</p>
          <h4>2) 서비스 이용 기록 삭제</h4>
          <p>프로필 등록 정보, 입사지원정보, 입사지원 현황 등 취업에 필요한</p>
          <p>
            서비스 이용 기록이 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.
          </p>
          <p>필요한 데이터는 미리 백업을 해두시기 바랍니다.</p>
        </div>
        <form>
          <h4>본인 확인</h4>
          <p>본인 확인을 위해 이메일 인증을 완료해 주세요.</p>
          <label className={css.email} for="email">
            이메일
          </label>
          <input
            type="text"
            name="email"
            id={css.email}
            value={email}
            onChange={onEmailHandler}
          />
          <div className={css.agreeWrap}>
            <input type="checkbox" name="agreement" id="agreement" />
            <label className={css.agreement} for="agreement">
              안내 사항을 모두 확인했으며 이에 동의합니다.
            </label>
          </div>
          <button
            className={css.leaveBtn}
            type="submit"
            // disabled=""
            onClick={handleLeave}
          >
            탈퇴하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Leave;
