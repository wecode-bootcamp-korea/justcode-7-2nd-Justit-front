import React, { useState, useEffect } from 'react';
import css from './CompanyAside.module.scss';
import CompanyAsideComponent from './CompanyAsideComponent';

function CompanyAside() {
  const [companyInfo, setCompanyInfo] = useState([]);

  useEffect(() => {
    fetch('./Data/Company.json')
      .then(res => res.json())
      .then(res => setCompanyInfo(res.data));
  }, []);

  return (
    <div className={css.wingWrapper}>
      {companyInfo.map(info => (
        <CompanyAsideComponent
          key={info.id}
          company={info.company}
          url={info.url}
          years={info.years}
          mainService={info.mainService}
        />
      ))}
    </div>
  );
}

export default CompanyAside;
