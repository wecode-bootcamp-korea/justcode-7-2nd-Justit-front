import React, { useState, useEffect } from 'react';
import Aside from '../../components/Aside/Aside';
import css from './Detail.module.scss';

function Detail() {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    fetch('../../../public/Data/CompanyData.json')
      .then(res => res.json())
      .then(res => setCompanyData(res.data));
  }, []);

  console.log(companyData);

  return (
    <div className={css.detailWrapper}>
      <div className={css.mainInfo}>
        <div className={css.header}>
          <h1>웹서비스 프론트엔드 개발</h1>
          <a>피처링</a>
        </div>
        <div className={css.positionInfo}>
          <dl className={css.infoTitle}>
            <dt className={css.dt}>기술스택</dt>
            <div className={css.skillIcon}>
              <dd className={css.dd}>HTML5</dd>
              <dd className={css.dd}>CSS3</dd>
              <dd className={css.dd}>React</dd>
            </div>
          </dl>
          <dl className={css.infoTitle}>
            <dt className={css.dt}>주요업무</dt>
            <dd className={css.dd}>• 피처링 웹서비스 프론트엔드 개발</dd>
            <dd className={css.dd}>
              • 유튜브, 인스타그램 등 SNS 채널 분석 데이터를 효과적으로 보여줄
              수있는 서비스 프론트 설계 및 구현
            </dd>
          </dl>
          <dl className={css.infoTitle}>
            <dt className={css.dt}>자격요건</dt>
            <dd className={css.dd}>
              • React, Vue, Angular 등 한가지 이상의 경험 또는 그에 준하는
              역량을 갖춘 분
            </dd>
            <dd className={css.dd}>• 상용 웹사이트 서비스 출시 경험</dd>
          </dl>
          <dl className={css.infoTitle}>
            <dt className={css.dt}>우대사항</dt>
            <dd className={css.dd}>• 자기 주도적 개발리딩이 가능 하신분</dd>
            <dd className={css.dd}>• SaaS 서비스 개발 경험</dd>
            <dd className={css.dd}>
              • HTML , CSS, javascript 마크업에 대한 이해도
            </dd>
          </dl>
          <dl className={css.infoTitle}>
            <dt className={css.dt}>복지 및 혜택</dt>
            <dd className={css.dd}>
              • 오전 8시 ~ 11시 자율 출근해요. 주간 단위로 구성원이 자발적으로
              출근시간을 설정하고 공유합니다.
            </dd>
            <dd className={css.dd}>
              • 월 1회 오아시스 제도를 운영해요. 2시간 늦게 출근하거나 일찍
              퇴근할 수 있어요.
            </dd>
            <dd className={css.dd}>
              • 눈치보지 않고 자유롭게 연차/반차/오아시스 사용이 가능해요.
            </dd>
          </dl>
        </div>
        <div className={css.positionDetail}>
          <dl className={css.detailList}>
            <dt className={css.dt}>경력</dt>
            <dd className={css.dd}>무관</dd>
          </dl>
          <dl className={css.detailList}>
            <dt className={css.dt}>학력</dt>
            <dd className={css.dd}>무관</dd>
          </dl>
          <dl className={css.detailList}>
            <dt className={css.dt}>마감일</dt>
            <dd className={css.dd}>상시</dd>
          </dl>
          <dl className={css.detailList}>
            <dt className={css.dt}>근무지역</dt>
            <dd className={css.dd}>
              서울 강남구 테헤란로 어디어디어디
              <p>
                <a className={css.mapView}>지도보기</a>
                <span>·</span>
                <button className={css.adressBtn}>주소복사</button>
              </p>
            </dd>
          </dl>
        </div>
        <div className={css.positionContent}>
          <h2>기업/서비스 소개</h2>
          <div className={css.imgWrapper}>
            <button className={css.imgPrevBtn}></button>
            <button className={css.imgNextBtn}></button>
            <div className={css.contentImg}>
              <img src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
              <img src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
              <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            </div>
          </div>
          <div>
            피처링은 영향력 있는 사람들이 진짜 영향력을 발휘 할수 있도록
            '공정하고 측정 가능한 진짜 인플루언서'를 위한 서비스를 만들고
            있습니다.
          </div>
        </div>
        <div className={css.moreButton}>
          <button>기업/서비스 소개 더 보기</button>
        </div>
      </div>
      <Aside />
    </div>
  );
}

export default Detail;
