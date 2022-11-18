import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from '../../components/Aside/Aside';
import DetailComponent from '../../components/DetailComponent/DetailComponent';
import css from './Detail.module.scss';

function Detail() {
  const [companyData, setCompanyData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./Data/CompanyData.json')
      .then(res => res.json())
      .then(res => setCompanyData(res.data));
  }, []);

  const goToCompany = () => {
    navigate('/company');
  };

  return (
    <div className={css.detailWrapper}>
      {companyData.map(data => {
        return (
          <DetailComponent
            key={data.id}
            title={data.title}
            company={data.company}
            career={data.career}
            companyContent={data.companyContent}
            education={data.education}
            mainbusiness={data.mainbusiness}
            place={data.place}
            preference={data.preference}
            qualification={data.qualification}
            stack={data.stack}
            image={data.image}
            welfare={data.welfare}
            goToCompany={goToCompany}
          />
        );
      })}
      <Aside goToCompany={goToCompany} />
    </div>
  );
}

export default Detail;
