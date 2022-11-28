import React from 'react';
import css from './Education.module.scss';

function Education() {
  return (
    <div className={css.edu}>
      <p>학력</p>
      <div className={css.eduWrapper}>
        <div className={css.bullet}>
          <i class="fa-regular fa-circle" />
        </div>
        <div className={css.time}>
          <input type="text" className={css.year} placeholder="YYYY.MM" />
          <span> 졸업(예정)</span>
        </div>
        <div className={css.school}>
          <select name="optionEducation" id={css.optionEducation}>
            <option value="0">학력 구분</option>
            <option value="1">고등학교</option>
            <option value="2">대학(2,3년)</option>
            <option value="3">대학교(4년)</option>
            <option value="4">대학원(석사)</option>
            <option value="5">대학원(박사)</option>
          </select>
          <input type="text" placeholder="학교명을 입력해주세요." />
          <input type="text" placeholder="학과명을 입력해주세요." />
        </div>
      </div>
    </div>
  );
}

export default Education;
