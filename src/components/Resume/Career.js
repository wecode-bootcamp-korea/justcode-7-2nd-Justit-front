import React from 'react';
import css from './Career.module.scss';

function Career() {
  return (
    <div className={css.career}>
      <p>경력(업무경험)</p>
      <div className={css.careerWrapper}>
        <div className={css.bullet}>
          <i class="fa-regular fa-circle" />
        </div>
        <div className={css.time}>
          <input
            type="text"
            className={css.year}
            placeholder="YYYY.MM-YYYY.MM"
          />
        </div>
        <div className={css.period}>
          <input
            id={css.noSpace}
            type="text"
            placeholder="회사명을 입력해주세요."
          />
          <input
            id={css.noSpace}
            type="text"
            placeholder="회사소개를 간단하게 입력해주세요."
          />
          <input id={css.noSpace} type="text" placeholder="부서명/직책" />
          <input
            id={css.noSpace}
            type="text"
            placeholder="주요업무 및 성과를 작성해주세요."
          />
          <select name="optionStack" id={css.optionStack}>
            <option value="">기술 스택을 선택해주세요.</option>
            <option value="">javascript</option>
            <option value="">html</option>
            <option value="">css</option>
            <option value="">react</option>
            <option value="">node.js</option>
            <option value="">C++</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Career;
