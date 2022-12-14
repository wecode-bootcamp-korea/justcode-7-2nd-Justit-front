import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Aside from '../../components/Aside/Aside';
import DetailComponent from '../../components/DetailComponent/DetailComponent';
import Header from '../../components/Header/Header';
import DetailCardList from '../../components/DetailComponent/DetailCardList';
import css from './Detail.module.scss';

function Detail() {
  const [companyData, setCompanyData] = useState([]);
  const [cardList, setCardList] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [companyMove, setCompanyMove] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/company/${params.id}`)
      .then(res => res.json())
      .then(res => setCompanyMove(res.companyPage));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${params.id}`)
      .then(res => res.json())
      .then(res => setCardList(res.samePositionPosts));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${params.id}`)
      .then(res => res.json())
      .then(res => setCompanyData(res.postsPage.postsPage));
  }, []);

  const goToCompany = () => {
    navigate(`/company/${companyMove[0].id}`);
  };

  return (
    <>
      <Header />
      <div className={css.detailWrapper}>
        {companyData.map(data => {
          return (
            <DetailComponent
              key={data.id}
              title={data.title}
              company_name={data.company_name}
              career_max={data.career_max}
              career_min={data.career_min}
              content={data.content}
              education_name={data.education_name}
              location={data.location}
              tech_stacks={data.tech_stacks}
              images={data.images}
              tags={data.tags}
              view={data.view}
              goToCompany={goToCompany}
            />
          );
        })}
        <Aside goToCompany={goToCompany} />
      </div>
      <div className={css.detailCardListWrapper}>
        <div className={css.detailCardListContent}>
          <h2 className={css.detailCardListTitle}>
            ?????? ????????? ???????????? ????????????
          </h2>
          <div className={css.detailCardList}>
            {cardList.map(cardList => {
              return (
                <DetailCardList
                  key={cardList.id}
                  images={cardList.images}
                  company_name={cardList.company_name}
                  title={cardList.title}
                  tech_stacks={cardList.tech_stacks}
                  location={cardList.location}
                  career_min={cardList.career_min}
                  career_max={cardList.career_max}
                  view={cardList.view}
                  position_id={cardList.position_id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
