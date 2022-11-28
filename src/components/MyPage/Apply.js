import React, { useState, useEffect } from 'react';
import css from './Apply.module.scss';

function Apply() {
  const [page, setPage] = useState('blank');
  const [applyResume, setApplyResume] = useState([]);
  useEffect(() => {
    // const token = localStorage.getItem('token');
    fetch('http://localhost:8000/apply/ing', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjY5MzA4MzA4fQ.nxbXi2PkVOnB4ToXQ_QrlchcudM-UevIVI-WsZda9Ys',
      },
    })
      .then(response => response.json())
      .then(result => setApplyResume(result.applyingInfo));
  }, []);

  const [endResume, setEndResume] = useState([]);
  useEffect(() => {
    // const token = localStorage.getItem('token');
    fetch('http://localhost:8000/apply/ed', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjY5MzA4MzA4fQ.nxbXi2PkVOnB4ToXQ_QrlchcudM-UevIVI-WsZda9Ys',
      },
    })
      .then(response => response.json())
      .then(result => setEndResume(result.applyedInfo));
  }, []);

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
          {applyResume.map(({ company_name, title, apply_status }) => (
            <ul className={css.info} key={apply_status}>
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
