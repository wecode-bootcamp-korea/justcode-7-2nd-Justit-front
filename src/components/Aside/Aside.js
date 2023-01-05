import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Aside.module.scss';
import AsideDetail from './AsideDetail';

function Aside({ goToCompany }) {
  const [companyInfo, setCompanyInfo] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${params.id}`)
      .then(res => res.json())
      .then(res => setCompanyInfo(res.postsPage.postsPage));
  }, []);

  return (
    <>
      {companyInfo.map(info => (
        <AsideDetail
          key={info.id}
          id={info.id}
          title={info.title}
          company_name={info.company_name}
          images={info.images}
          goToCompany={goToCompany}
        />
      ))}
    </>
  );
}

export default Aside;
