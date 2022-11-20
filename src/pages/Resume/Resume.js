import React from 'react';
import css from './Resume.module.scss';
import Link from '../../components/Link/Link';

function Resume() {
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
                    <a className={css.option}>기술스택</a>
                  </li>
                  <li className={css.topTitle}>
                    <a>링크</a>
                    <button type="button"></button>
                  </li>
                  <li className={css.topTitle}>
                    <a className={css.option_edu}>학력</a>
                  </li>
                  <li className={css.topTitle}>
                    <a className={css.option}>경력</a>
                  </li>
                </ul>
                <ul className={css.editBottom}>
                  <li className={css.required}>입사지원 시 필수 항목</li>
                  <li className={css.edit_required}>필수 항목</li>
                  <li className={css.edit_choice_required}>
                    선택필수 <span>(경력+스택)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={css.rightWrapper}>
              <div className={css.resumeContent}>
                <div className={css.name}>
                  <div className={css.photo}>
                    <i class="fa-solid fa-circle-plus"></i>
                    <span className={css.photoTitle}>사진 추가</span>
                    <span className={css.photoDesc}>1:1 비율 권장</span>
                  </div>
                  <div className={css.rightName}>
                    <p className={css.edit_name}>박성아</p>
                    <div className={css.email}>
                      <div className={css.address}>
                        <i class="fa-regular fa-envelope" />
                        sonia_0903@naver.com
                      </div>
                      <i class="fa-solid fa-briefcase" />
                      <input
                        type="text"
                        list="career"
                        placeholder="경력 선택"
                      />
                      <datalist id="career">
                        <option>목록1</option>
                        <option>목록2</option>
                        <option>목록3</option>
                      </datalist>
                    </div>
                    <div className={css.phone}>
                      <i class="fa-regular fa-calendar" />
                      <input type="text" placeholder="0000 년생" />
                      <i class="fa-solid fa-phone" />
                      <input type="text" placeholder="전화번호" />
                    </div>
                    <p className={css.desc}>
                      · 지원 현황에 대한 정보 및 포지션 추천정보를 받아볼
                      연락처를 입력해주세요.
                    </p>
                  </div>
                </div>
                <div className={css.introduce}>
                  <p>간단 소개</p>
                  <input
                    type="text"
                    placeholder="간결하게 요점만 요약해서 3~5줄 내로 읽기 쉬운 내용으로 작성해보세요."
                  />
                </div>
                <div className={css.job}>
                  <p>개발 직무</p>
                  <input type="text" list="job" placeholder="개발 직무" />
                  <datalist id="job">
                    <option>목록1</option>
                    <option>목록2</option>
                    <option>목록3</option>
                  </datalist>
                </div>
                <div className={css.spec}>
                  <p>기술 스택</p>
                  <input type="text" placeholder="기술 스택을 등록해주세요." />
                </div>
                <Link />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Resume;
