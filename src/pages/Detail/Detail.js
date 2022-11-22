import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from '../../components/Aside/Aside';
import DetailComponent from '../../components/DetailComponent/DetailComponent';
import MainCardList from '../../components/MainCardList/MainCardList';
import css from './Detail.module.scss';

function Detail() {
  const [companyData, setCompanyData] = useState([]);
  const navigate = useNavigate();
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    fetch('/data/CardListData.json')
      .then(res => res.json())
      .then(res => setCardList(res.data));
  }, []);

  useEffect(() => {
    fetch('./Data/CompanyData.json')
      .then(res => res.json())
      .then(res => setCompanyData(res.data));
  }, []);

  const goToCompany = () => {
    navigate('/company');
  };

  return (
    <>
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
              tag={data.tag}
              goToCompany={goToCompany}
            />
          );
        })}
        <Aside goToCompany={goToCompany} />
      </div>
      <div className={css.detailCardListWrapper}>
        <h2 className={css.detailCardListTitle}>
          지금 보시는 포지션과 유사해요
        </h2>
        <div className={css.detailCardList}>
          {cardList.map((cardList, index) => {
            return (
              cardList.type === 'short' && (
                <MainCardList
                  key={index}
                  type={cardList.type}
                  img={cardList.img}
                  company_name={cardList.company_name}
                  title={cardList.title}
                  stack={cardList.stack}
                  location={cardList.location}
                  career={cardList.career}
                />
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Detail;
