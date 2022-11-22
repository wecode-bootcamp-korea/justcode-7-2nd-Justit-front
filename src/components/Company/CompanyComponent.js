import React, { useState } from 'react';
import css from './CompanyComponent.module.scss';

function CompanyComponent({
  company,
  companyContent,
  place,
  image,
  welfare,
  tag,
}) {
  const [preClick, setPreClick] = useState(true);

  const onChangeMoreBtn = e => {
    e.preventDefault();
    setPreClick(!preClick);
  };

  return (
    <div>
      <div className={css.companyContent}>
        <div className={css.header}>
          <h1 className={css.title}>{company}</h1>
          <ul className={css.ul}>
            {tag.map(tag => {
              return (
                <li className={css.li} key={tag.id}>
                  #{tag.content}
                </li>
              );
            })}
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
        <dl className={css.dl}>
          <dt className={css.dt}>기술스택</dt>
          <dd className={css.dd}>
            <div className={css.stackIcon}>
              <img className={css.iconImg} src="/icons/CSharp.png" />
              C#
            </div>
            <div className={css.stackIcon}>
              <img className={css.iconImg} src="/icons/react.png" />
              React
            </div>
            <div className={css.stackIcon}>
              <img className={css.iconImg} src="/icons/javascript.png" />
              JavaScript
            </div>
            <div className={css.stackIcon}>
              <img className={css.iconImg} src="/icons/html5.png" />
              Html5
            </div>
            <div className={css.stackIcon}>
              <img className={css.iconImg} src="/icons/python.png" />
              Python
            </div>
          </dd>
        </dl>
        <div className={css.companyIntroduce}>
          <h2 className={css.companyIntroTitle}>회사 소개</h2>
          <div className={css.companyIntroContent}>
            <pre className={preClick ? css.pre : css.preClick}>
              {companyContent}
            </pre>
          </div>
          <div className={css.moreButton}>
            <button className={css.introduceBtn} onClick={onChangeMoreBtn}>
              기업/서비스 소개 더 보기
              <img
                className={css.moreBtn}
                src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
              />
            </button>
          </div>
          <div className={css.companyIntroImg}>
            {image.map(img => {
              return (
                <img className={css.companyImg} key={img.id} src={img.url} />
              );
            })}
          </div>
        </div>
        <dl className={css.dl}>
          <dt className={css.dt}>복지 및 혜택</dt>
          <dd className={css.dd}>
            <pre className={css.pre}>{welfare}</pre>
          </dd>
        </dl>
        <div className={css.companyLocation}>
          <h2 className={css.companyLocationTitle}>근무지역</h2>
          <ul className={css.companyLocationWrap}>
            <li className={css.location}>{place}</li>
            <li className={css.li}>
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CompanyComponent;
