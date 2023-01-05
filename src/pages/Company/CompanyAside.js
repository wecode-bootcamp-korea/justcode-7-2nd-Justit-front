import React, { useState, useEffect } from 'react';
import css from './CompanyAside.module.scss';
import CompanyAsideComponent from './CompanyAsideComponent';
import { useParams } from 'react-router-dom';

function CompanyAside() {
  const [companyInfo, setCompanyInfo] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${params.id}`)
      .then(res => res.json())
      .then(res => setCompanyInfo(res.postsPage.postsPage));
  }, []);

  return (
    <div className={css.wingWrapper}>
      {companyInfo.map(info => (
        <CompanyAsideComponent
          key={info.id}
          company_name={info.company_name}
          images={info.images}
        />
      ))}
    </div>
  );
}

export default CompanyAside;
