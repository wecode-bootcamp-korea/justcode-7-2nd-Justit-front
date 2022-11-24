import React, { useState, useEffect } from 'react';
import css from './Apply.module.scss';

function Apply() {
  const [page, setPage] = useState('blank');
  // const [pageOpen, setPageOpen] = useState(true);
  // const [listOpen, setOListOpen] = useState({});
  // const handleButtonOnClick = (pageName, e) => {
  //   e.preventDefault();
  //   setPage(pageName);
  // };
  const [applyResume, setApplyResume] = useState([]);
  useEffect(() => {
    // const token = localStorage.getItem('token');
    fetch('http://localhost:8000/mypage/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjY5MTc3NDEwfQ.-a6NQWcjWgwOF-Z5Z7HSM2NwhKCxTVkuFdCxxA1khDE',
      },
    })
      .then(response => response.json())
      .then(result => setApplyResume(result.data));
  }, []);

  return (
    <div className={css.apply}>
      <h1>입사지원 현황</h1>
      <ul>
        <li className={css.applyLi} onClick={() => setPage('info')}>
          <p className={css.title}>작성중</p>
          <p className={css.qty}>{2}</p>
        </li>
        <li className={css.applyLi} onClick={() => setPage('done')}>
          <p className={css.title}>지원완료</p>
          <p className={css.qty}>0</p>
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
          <h2>작성중 총 {2}건</h2>
          <ul className={css.info}>
            <li className={css.infoLi}>
              {applyResume.map(({ company_name, title, id }) => (
                <div className={css.applyInfo} key={id}>
                  <p className={css.companyTitle}>{company_name}</p>
                  <p className={css.jobTitle}>{title}</p>
                </div>
              ))}
              <div className={css.applyBtn}>
                <button type="button" className={css.btnApply}>
                  지원하기
                </button>
                <button type="button" className={css.btnDel}>
                  삭제
                </button>
              </div>
            </li>
            <li className={css.infoLi}>
              <div className={css.applyInfo}>
                <p className={css.companyTitle}>웨이브릿지</p>
                <p className={css.jobTitle}>
                  [웨이브릿지] 프론트엔드(React.js) 개발자
                </p>
              </div>
              <div className={css.applyBtn}>
                <button type="button" className={css.btnApply}>
                  지원하기
                </button>
                <button type="button" className={css.btnDel}>
                  삭제
                </button>
                {/* 지원하기 회사 상세 페이지로 링크걸고 / 삭제 버튼 구현 */}
              </div>
            </li>
          </ul>
        </>
      )}
      {page === 'done' && (
        <>
          <h2>지원완료 총 0건</h2>
          <div className={css.done}>지원완료 정보가 없습니다.</div>
        </>
      )}
    </div>
  );
}

export default Apply;
