import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './DetailComponent.module.scss';

function DetailComponent({
  title,
  company,
  stack,
  mainbusiness,
  qualification,
  preference,
  welfare,
  career,
  education,
  place,
  companyContent,
  image,
  goToCompany,
}) {
  const slideRef = useRef(null);
  const [currentImgOrder, setcCurrentImgOrder] = useState(0);
  const IMG_WIDTH = 630;
  const slideRange = currentImgOrder * IMG_WIDTH;

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [currentImgOrder]);

  const moveToNextSlide = () => {
    if (currentImgOrder === 2) return;
    setcCurrentImgOrder(currentImgOrder + 1);
  };

  const moveToPrevSlide = () => {
    if (currentImgOrder === 0) return;
    setcCurrentImgOrder(currentImgOrder - 1);
  };

  return (
    <div>
      <div className={css.mainInfo}>
        <div className={css.header}>
          <h1 className={css.headerTitle}>{title}</h1>
          <div className={css.div}>
            <a className={css.a} onClick={goToCompany}>
              {company}
            </a>
          </div>
        </div>
        <div className={css.positionInfo}>
          <dl className={css.infoTitle}>
            <dt className={css.dt}>기술스택</dt>
            <div className={css.skillIcon}>
              {stack.map(skill => {
                return (
                  <dd className={css.dd} key={skill.id}>
                    {skill.skill}
                  </dd>
                );
              })}
            </div>
          </dl>
          <dl className={css.infoTitle}>
            <dt className={css.dt}>주요업무</dt>
            <dd className={css.dd}>• {mainbusiness}</dd>
          </dl>
          <dl className={css.infoTitle}>
            <dt className={css.dt}>자격요건</dt>
            <dd className={css.dd}>• {qualification}</dd>
          </dl>
          <dl className={css.infoTitle}>
            <dt className={css.dt}>우대사항</dt>
            <dd className={css.dd}>• {preference}</dd>
          </dl>
          <dl className={css.infoTitle}>
            <dt className={css.dt}>복지 및 혜택</dt>
            <dd className={css.dd}>• {welfare}</dd>
          </dl>
        </div>
        <div className={css.positionDetail}>
          <dl className={css.detailList}>
            <dt className={css.dt}>경력</dt>
            <dd className={css.dd}>{career}</dd>
          </dl>
          <dl className={css.detailList}>
            <dt className={css.dt}>학력</dt>
            <dd className={css.dd}>{education}</dd>
          </dl>
          <dl className={css.detailList}>
            <dt className={css.dt}>마감일</dt>
            <dd className={css.dd}>상시</dd>
          </dl>
          <dl className={css.detailList}>
            <dt className={css.dt}>근무지역</dt>
            <dd className={css.dd}>
              {place}
              <p>
                <img
                  className={css.detailListIcon}
                  src="https://cdn-icons-png.flaticon.com/512/3865/3865991.png"
                />
                <a className={css.mapView}>지도보기</a>
                <span className={css.dot}>·</span>
                <img
                  className={css.detailListIcon}
                  src="https://cdn-icons-png.flaticon.com/512/7784/7784603.png"
                />
                <button className={css.adressBtn}>주소복사</button>
              </p>
            </dd>
          </dl>
        </div>
        <div className={css.positionContent}>
          <h2>기업/서비스 소개</h2>
          <div className={css.imgWrapper} ref={slideRef}>
            <button
              className={css.imgPrevBtn}
              onClick={moveToPrevSlide}
            ></button>
            <button
              className={css.imgNextBtn}
              onClick={moveToNextSlide}
            ></button>
            <div className={css.contentImg}>
              {image.map(img => {
                return <img key={img.id} src={img.url} />;
              })}
            </div>
          </div>
          <div>{companyContent}</div>
        </div>
        <div className={css.moreButton}>
          <button className={css.introduceBtn}>
            기업/서비스 소개 더 보기
            <img
              className={css.moreBtn}
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailComponent;
