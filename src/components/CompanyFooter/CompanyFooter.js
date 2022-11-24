import React from 'react';
import css from './CompanyFooter.module.scss';

function CompanyFooter() {
  return (
    <div className={css.companyFooterWrapper}>
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

export default CompanyFooter;
