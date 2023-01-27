import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import css from './DetailComponent.module.scss';

function DetailComponent({
  id,
  title,
  company_name,
  career_max,
  career_min,
  content,
  education_name,
  location,
  tech_stacks,
  images,
  tags,
  view,
  goToCompany,
}) {
  const slideRef = useRef(null);
  const [currentImgOrder, setcCurrentImgOrder] = useState(0);
  const IMG_WIDTH = 630;
  const slideRange = currentImgOrder * IMG_WIDTH;
  const [preClick, setPreClick] = useState(true);
  const navigate = useNavigate();

  const moveDetail = () => {
    navigate(`/detail/${id}`);
  };

  const onChangeMoreBtn = e => {
    e.preventDefault();
    setPreClick(!preClick);
  };

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
    <div onClick={moveDetail}>
      <div className={css.mainInfo}>
        <div className={css.header}>
          <h1 className={css.headerTitle}>{title}</h1>
          <div className={css.div}>
            <a className={css.a} onClick={goToCompany}>
              {company_name}
            </a>
          </div>
          <ul className={css.ul}>
            {tags.map(tag => {
              return (
                <li className={css.li} key={tag.id}>
                  #{tag.tag}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={css.positionInfo}>
          <dl className={css.infoTitle}>
            {/* <dt className={css.dt}>기술스택</dt> */}
            {/* <div className={css.skillIcon}>
              {tech_stacks.map(skill => {
                return (
                  <div className={css.skillWrap} key={skill.id}>
                    <img className={css.skillImg} src={skill.url} />
                    <dd className={css.dd}>{skill.tech_stack}</dd>
                  </div>
                );
              })}
            </div> */}
          </dl>
          <dl className={css.infoTitle}>
            <pre className={css.pre}>{content}</pre>
          </dl>
        </div>
        <div className={css.positionDetail}>
          <dl className={css.detailList}>
            <dt className={css.dt}>경력</dt>
            <dd className={css.dd}>
              {career_min}~{career_max} 년
            </dd>
          </dl>
          <dl className={css.detailList}>
            <dt className={css.dt}>학력</dt>
            <dd className={css.dd}>{education_name}</dd>
          </dl>
          <dl className={css.detailList}>
            <dt className={css.dt}>마감일</dt>
            <dd className={css.dd}>상시</dd>
          </dl>
          <dl className={css.detailList}>
            <dt className={css.dt}>근무지역</dt>
            <dd className={css.dd}>
              {location}
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
          <h2 className={css.positionContentTitle}>기업/서비스 소개</h2>
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
              {images.map(img => {
                return <img className={css.img} key={img.id} src={img.image} />;
              })}
            </div>
          </div>
          <div>
            <pre className={preClick ? css.pre : css.preClick}>{content}</pre>
          </div>
        </div>
        <div className={css.moreButton}>
          <button className={css.introduceBtn} onClick={onChangeMoreBtn}>
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
