import React, { useState, useEffect } from 'react';
import Aside from '../../components/Aside/Aside';
import DetailComponent from '../../components/DetailComponent/DetailComponent';
import css from './Detail.module.scss';

function Detail() {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    fetch('./Data/CompanyData.json')
      .then(res => res.json())
      .then(res => setCompanyData(res.data));
  }, []);

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
          />
        );
      })}
      <Aside />
    </div>
  );
}

export default Detail;
