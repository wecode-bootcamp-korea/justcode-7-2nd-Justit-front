import React from 'react';
import css from './Company.module.scss';

function Company() {
  return (
    <div className={css.companyWrapper}>
      <div className={css.companyContent}>
        <div className={css.header}>
          <h1 className={css.title}>오버노드</h1>
          <ul className={css.ul}>
            <li className={css.li}>#지원 응답이 빠른 기업</li>
            <li className={css.li}>#재택근무</li>
          </ul>
        </div>
        <div className={css.noticeList}>
          <h2 className={css.noticeTitle}>채용 중인 포지션</h2>
          <div className={css.companyCard}>
            <div className={css.companyCardHeader}>
              <span className={css.span}>상시</span>
              <img
                className={css.scrapImg}
                src="https://cdn-icons-png.flaticon.com/512/7073/7073727.png"
              />
            </div>
            <h2 className={css.companyCardTitle}>백엔드 개발직군</h2>
            <ul className={css.ul}>
              <li className={css.li}>Git</li>
              <li className={css.li}>Docker</li>
              <li className={css.li}>GitHub</li>
            </ul>
          </div>
        </div>
        <div className={css.companyIntroduce}>
          <h2 className={css.companyIntroTitle}>회사 소개</h2>
          <div className={css.companyIntroContent}>회사 소개문</div>
          <div className={css.moreButton}>
            <button className={css.introduceBtn}>
              기업/서비스 소개 더 보기
              <img
                className={css.moreBtn}
                src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              />
            </button>
          </div>
          <div className={css.companyIntroImg}>
            <img alt="회사 이미지" />
          </div>
        </div>
        <div className={css.companyLocation}>
          <h2 className={css.companyLocationTitle}>근무지역</h2>
          <span className={css.location}>주소</span>
          <p>
            <img
              className={css.detailListIcon}
              src="https://cdn-icons-png.flaticon.com/512/3865/3865991.png"
            />
            <a className={css.mapView}>지도보기</a>
            <span className={css.dot}>·</span>
            <img
              className={css.detailListIcon}
              src="https://cdn-icons-png.flaticon.com/512/7784/7784603.png"
            />
            <button className={css.adressBtn}>주소복사</button>
          </p>
        </div>
      </div>
      <div className={css.companyFooter}>
        <h2 className={css.companyFooterTitle}>추천태그</h2>
        <ul className={css.ul}>
          <li className={css.li}>#재택근무</li>
          <li className={css.li}>#4.5일제</li>
          <li className={css.li}>#유연근무제</li>
        </ul>
      </div>
    </div>
  );
}

export default Company;
