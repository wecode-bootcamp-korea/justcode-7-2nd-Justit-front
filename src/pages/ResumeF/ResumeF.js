import React from 'react';

import css from './ResumeF.module.scss';

function ResumeF() {
  return (
    <div className={css.background}>
      <div className={css.container}>
        <form>
          <div className={css.wholeWrapper}>
            <div className={css.leftWrapper}>
              <div className={css.editContent}>
                <p className={css.editTitle}>항목편집 ✍</p>
                <p className={css.editSubtitle}>원하는 항목을 편집해보세요.</p>
                <ul className={css.editTop}>
                  <li className={css.topTitle}>
                    <a>사진</a>
                    <button type="button"></button>
                  </li>
                  <li className={css.topTitle}>
                    <a>간단소개</a>
                    <button type="button"></button>
                  </li>
                  <li className={css.topTitle}>
                    <a>개발직무</a>
                    <button type="button"></button>
                  </li>
                  <li className={css.topTitle}>
                    <a>기술스택</a>
                  </li>
                  <li className={css.topTitle}>
                    <a>링크</a>
                    <button type="button"></button>
                  </li>
                  <li className={css.topTitle}>
                    <a>학력</a>
                  </li>
                  <li className={css.topTitle}>
                    <a>경력</a>
                  </li>
                  <li className={css.topTitle}>
                    <a>프로젝트</a>
                    <button type="button"></button>
                  </li>
                  <li className={css.topTitle}>
                    <a>교육이력</a>
                    <button type="button"></button>
                  </li>
                  <li className={css.topTitle}>
                    <a>기타사항</a>
                    <button type="button"></button>
                  </li>
                  <li className={css.topTitle}>
                    <a>자기소개서</a>
                    <button type="button"></button>
                  </li>
                  <li className={css.topTitle}>
                    <a>첨부파일</a>
                  </li>
                </ul>
                <ul className={css.editBottom}>
                  <li className={css.required}>입사지원 시 필수 항목</li>
                  <li className={css.edit_required}>필수 항목</li>
                  <li className={css.edit_choice_required}>
                    선택필수 <span>(경력+스택 / 첨부파일)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={css.rightWrapper}>
              <div className={css.resumeContent}>resume</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResumeF;
