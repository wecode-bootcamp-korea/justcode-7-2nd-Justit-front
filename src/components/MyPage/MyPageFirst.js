import React from 'react';
import css from './MyPageFirst.module.scss';

function MyPageFirst() {
  return (
    <div className={css.first}>
      <h1>입사지원 현황</h1>
      <ul>
        <li>
          <p className={css.title}>작성중</p>
          <p className={css.qty}>0</p>
        </li>
        <li>
          <p className={css.title}>지원완료</p>
          <p className={css.qty}>0</p>
        </li>
        <li>
          <p className={css.title}>서류통과</p>
          <p className={css.qty}>0</p>
        </li>
        <li>
          <p className={css.title}>최종합격</p>
          <p className={css.qty}>0</p>
        </li>
        <li>
          <p className={css.title}>불합격</p>
          <p className={css.qty}>0</p>
        </li>
      </ul>
      <h2>지원완료 총 0건</h2>
      <div className={css.blank}>지원정보가 없습니다.</div>
    </div>
  );
}

export default MyPageFirst;
