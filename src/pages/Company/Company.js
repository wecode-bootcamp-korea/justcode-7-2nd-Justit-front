import React, { useState, useEffect } from 'react';
import CompanyFooter from '../../components/CompanyFooter/CompanyFooter';
import css from './Company.module.scss';
import CompanyAside from './CompanyAside';
import CompanyComponent from '../../components/Company/CompanyComponent';
import Header from '../../components/Header/Header';

function Company() {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    fetch('./Data/CompanyData.json')
      .then(res => res.json())
      .then(res => setCompanyData(res.data));
  }, []);

  return (
    <>
      <Header />
      <div className={css.companyWrapper}>
        {companyData.map(data => {
          return (
            <CompanyComponent
              key={data.id}
              company={data.company}
              companyContent={data.companyContent}
              place={data.place}
              image={data.image}
              welfare={data.welfare}
              tag={data.tag}
            />
          );
        })}
        <CompanyAside />
      </div>
      <CompanyFooter />
    </>
  );
}

export default Company;
