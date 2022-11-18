import React, { useEffect, useState } from 'react';
import css from './Aside.module.scss';
import AsideDetail from './AsideDetail';

function Aside({ goToCompany }) {
  const [companyInfo, setCompanyInfo] = useState([]);

  useEffect(() => {
    fetch('./Data/Company.json')
      .then(res => res.json())
      .then(res => setCompanyInfo(res.data));
  }, []);

  return (
    <>
      {companyInfo.map(info => (
        <AsideDetail
          key={info.id}
          title={info.title}
          company={info.company}
          url={info.url}
          goToCompany={goToCompany}
        />
      ))}
    </>
  );
}

export default Aside;
