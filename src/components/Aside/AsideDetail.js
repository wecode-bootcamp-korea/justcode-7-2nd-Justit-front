import React, { useState, useEffect } from 'react';
import css from './AsideDetail.module.scss';
import Join from './Join';

function AsideDetail({ title, company_name, images, goToCompany, id }) {
  const [joinModal, setJoinModal] = useState(false);
  const [join, setJoin] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/apply/first', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        posts_id: 1,
        apply_status: join,
      }),
    })
      .then(res => res.json())
      .then(res =>
        res.message === 'ADDED_TO_APPLY_ING'
          ? alert('지원하기 중간작성')
          : alert('지원하기 중간작성 오류!')
      );
  }, [join]);

  // const [scrap, setScrap] = useState({});
  // const scrapHandler = event => {
  //   setScrap(event.currentTarget.value);
  // };
  const handleScrap = event => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/scrap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        posts_id: id,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SCRAP_SUCCESS') {
          // localStorage.setItem('token', '');
          alert('스크랩 완료!');
          // document.location.href = '/mypage/bookmark';
        }
      });
  };

  const onApply = () => {
    setJoin(!join);
  };
  const closeBtn = () => {
    setJoinModal(!joinModal);
  };
  return (
    <>
      <div className={css.wingWrapper}>
        <div className={css.wing}>
          <img className={css.companyLogo} src={images[0].image} alt="로고" />
          <h2>{title}</h2>
          <a className={css.companyName} onClick={goToCompany}>
            {company_name}
          </a>
          <span className={css.congratsMoney}>💰 취업축하금 70만원</span>
          <button
            className={css.btn}
            onClick={onApply => {
              setJoinModal(true);
            }}
          >
            지원하기
          </button>
          {joinModal ? <Join closeBtn={closeBtn} /> : null}
          <div className={css.wingIcon}>
            <div>
              <img
                className={css.icon}
                src="https://cdn-icons-png.flaticon.com/512/3989/3989188.png"
                alt="아이콘"
              />
              <span className={css.share}>공유</span>
            </div>
            <div>
              <span className={css.iconBlank} />
              <img
                className={css.scrapIcon}
                src="https://cdn-icons-png.flaticon.com/512/7073/7073727.png"
                alt="아이콘"
              />
              <span
                className={css.scrap}
                // onChange={scrapHandler}
                onClick={handleScrap}
              >
                스크랩
              </span>
            </div>
          </div>
        </div>
        <div className={css.bannerWrapper}>
          <div className={css.bannerContent}>
            <span>첫 입사지원시,</span>
            <span>배민쿠폰 전원증정!</span>
          </div>
          <img
            className={css.bannerImage}
            src="https://cdn-icons-png.flaticon.com/512/8074/8074470.png"
            alt="배너이미지"
          />
        </div>
      </div>
    </>
  );
}

export default AsideDetail;
