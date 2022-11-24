import React from 'react';
import css from './CompanyAsideComponent.module.scss';

function CompanyAsideComponent({ company, url, years, mainService }) {
  return (
    <div>
      <div className={css.wing}>
        <img className={css.companyLogo} src={url} />
        <h2 className={css.companyName}>{company}</h2>
        <div className={css.wingIcon}>
          <div>
            <img
              className={css.icon}
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            />
            <span className={css.share}>좋아요</span>
          </div>
          <div>
            <span className={css.iconBlank}></span>
            <img
              className={css.scrapIcon}
              src="https://cdn-icons-png.flaticon.com/512/3989/3989188.png"
            />
            <span className={css.scrap}>공유</span>
          </div>
        </div>
        <dl className={css.dl}>
          <dt className={css.dt}>업력</dt>
          <dd className={css.dd}>{years}</dd>
          <dt className={css.dt}>주요 서비스</dt>
          <dd className={css.dd}>
            <a className={css.a}>{mainService}</a>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default CompanyAsideComponent;
