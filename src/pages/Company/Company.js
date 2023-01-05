import React, { useState, useEffect } from 'react';
import CompanyFooter from '../../components/CompanyFooter/CompanyFooter';
import css from './Company.module.scss';
import CompanyAside from './CompanyAside';
import CompanyComponent from '../../components/Company/CompanyComponent';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';

function Company() {
  const [companyData, setCompanyData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/company/${params.id}`)
      .then(res => res.json())
      .then(res => setCompanyData(res.companyPage));
  }, []);

  return (
    <>
      <Header />
      <div className={css.companyWrapper}>
        {companyData.map(data => {
          return (
            <CompanyComponent
              key={data.id}
              company_name={data.company_name}
              location={data.location}
              images={data.images}
              tags={data.tags}
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
