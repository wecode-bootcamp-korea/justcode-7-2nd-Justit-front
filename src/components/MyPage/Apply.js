import React, { useState, useEffect } from 'react';
import css from './Apply.module.scss';
import { BASE_URL } from '../../config';

function Apply() {
  const [page, setPage] = useState('blank');
  const [applyResume, setApplyResume] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/apply/ing`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setApplyResume(result.applyingInfo));
  }, []);

  const [endResume, setEndResume] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/apply/ed`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setEndResume(result.applyedInfo));
  }, []);

  const handleApplyEnd = posts_id => {
    // event.preventDefault();
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/apply/second`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        posts_id: posts_id,
        apply_status: 'true',
      }),
    }).then(response => response.json());
    // .then(result => {
    //   if (result.message === 'CHANGED_TO_APPLY_ED') {
    //     // localStorage.setItem('token', result.token);
    //     alert('지원완료');
    //   } else {
    //     alert('지원완료 실패!');
    //   }
    // });
  };

  return (
    <div className={css.apply}>
      <h1>입사지원 현황</h1>
      <ul>
        <li className={css.applyLi} onClick={() => setPage('info')}>
          <p className={css.title}>작성중</p>
          <p className={css.qty}>{applyResume.length}</p>
        </li>
        <li className={css.applyLi} onClick={() => setPage('done')}>
          <p className={css.title}>지원완료</p>
          <p className={css.qty}>{endResume.length}</p>
        </li>
        <li className={css.applyLi}>
          <p className={css.title}>서류통과</p>
          <p className={css.qty}>0</p>
        </li>
        <li className={css.applyLi}>
          <p className={css.title}>최종합격</p>
          <p className={css.qty}>0</p>
        </li>
        <li className={css.applyLi}>
          <p className={css.title}>불합격</p>
          <p className={css.qty}>0</p>
        </li>
      </ul>
      {page === 'blank' && (
        <>
          <h2>총 0건</h2>
          <div className={css.blank}>지원정보가 없습니다.</div>
        </>
      )}
      {page === 'info' && (
        <>
          <h2>작성중 총 {applyResume.length}건</h2>
          {applyResume.map(({ company_name, title, posts_id }) => (
            <ul className={css.info} key={posts_id}>
              <li className={css.infoLi}>
                <div className={css.applyInfo}>
                  <p className={css.companyTitle}>{company_name}</p>
                  <p className={css.jobTitle}>{title}</p>
                </div>
                <div className={css.applyBtn}>
                  <button
                    className={css.btnApply}
                    onClick={event => {
                      event.preventDefault();
                      console.log(posts_id);
                      handleApplyEnd(posts_id);
                    }}
                  >
                    지원하기
                  </button>
                  <button type="button" className={css.btnDel}>
                    삭제
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </>
      )}
      {page === 'done' && (
        <>
          {/* <h2>지원완료 총 0건</h2>
          <div className={css.done}>지원완료 정보가 없습니다.</div> */}
          <h2>지원완료 총 {endResume.length}건</h2>
          {endResume.map(({ company_name, title, posts_id }) => (
            <ul className={css.info} key={posts_id}>
              <li className={css.infoLi}>
                <div className={css.applyInfo}>
                  <p className={css.companyTitle}>{company_name}</p>
                  <p className={css.jobTitle}>{title}</p>
                </div>
                <div className={css.applyBtn}>
                  <button type="button" className={css.btnApply}>
                    지원하기
                  </button>
                  <button type="button" className={css.btnDel}>
                    삭제
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </>
      )}
    </div>
  );
}

export default Apply;
