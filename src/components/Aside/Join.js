import React, { useState, useEffect } from 'react';
import css from './Join.module.scss';

function Join({ closeBtn }) {
  const [companyInfo, setCompanyInfo] = useState([]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className={css.modalWrapper}>
      <div className={css.modalHeader}>
        <h2 className={css.modalHeaderTitle}>입사지원</h2>
        <img
          className={css.modalHeaderImg}
          src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png"
          onClick={closeBtn}
        />
      </div>
      <div className={css.modalContent}>
        <div className={css.moreWrite}>
          <span>📝 이력서 항목 추가하고, 서류 합격률을 높여보세요!</span>
          <img
            className={css.img}
            src="https://cdn-icons-png.flaticon.com/512/126/126490.png"
          />
        </div>
        <div className={css.modalTitle}>
          <h1 className={css.title}>ios 개발자 (신입)</h1>
          <h3 className={css.companyName}>럭스로보</h3>
        </div>
        <div className={css.modalForm}>
          <div className={css.formWrapper}>
            <h2 className={css.formTitle}>지원정보</h2>
            <button className={css.downloadBtn}>이력서 다운로드</button>
          </div>
          <div className={css.formInfo}>
            <h3 className={css.formName}>이름</h3>
            <span>송기민</span>
            <img
              className={css.img}
              src="https://cdn-icons-png.flaticon.com/512/126/126490.png"
            />
          </div>
          <div className={css.formInfo}>
            <h3 className={css.formName}>이메일</h3>
            <span>kimin@gmail.com</span>
            <img
              className={css.img}
              src="https://cdn-icons-png.flaticon.com/512/126/126490.png"
            />
          </div>
          <div className={css.formInfo}>
            <h3 className={css.formName}>연락처</h3>
            <span>연락처를 입력해주세요.</span>
            <img
              className={css.img}
              src="https://cdn-icons-png.flaticon.com/512/126/126490.png"
            />
          </div>
          <div className={css.formInfo}>
            <h3 className={css.formName}>출생년도</h3>
            <span>출생년도를 입력해주세요.</span>
            <img
              className={css.img}
              src="https://cdn-icons-png.flaticon.com/512/126/126490.png"
            />
          </div>
          <div className={css.formInfo}>
            <h3 className={css.formName}>경력기간</h3>
            <span>경력기간을 입력해주세요.</span>
            <img
              className={css.img}
              src="https://cdn-icons-png.flaticon.com/512/126/126490.png"
            />
          </div>
          <div className={css.formInfo}>
            <h3 className={css.formName}>최종학력</h3>
            <span>최종학력을 입력해주세요.</span>
            <img
              className={css.img}
              src="https://cdn-icons-png.flaticon.com/512/126/126490.png"
            />
          </div>
        </div>
        <div>
          <div>
            <span>첨부파일</span>
            <button>+추가</button>
          </div>
          <p>
            · PDF 첨부를 추천드려요! 점핏은 인사담당자가 PDF로 보기 편하게
            만들었어요:
          </p>
        </div>
        <div>
          <ul>
            <li>
              제출서류는 입사자 확정일로부터 180일까지 지원기업에게 제공됩니다.
            </li>
            <li>제출에 동의할 경우에만 입사지원 해주세요.</li>
            <li>동의하지 않을 경우 입사지원이 불가능합니다.</li>
          </ul>
          <p>
            점핏에서 첫 입사지원 시, 마케팅 수신에 동의하시면 첫 입사지원
            이벤트에 자동응모됩니다.
          </p>
        </div>
      </div>
      <button>지원하기</button>
    </div>
  );
}

export default Join;
