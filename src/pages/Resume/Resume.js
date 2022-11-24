import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Resume.module.scss';
import ResumeLink from '../../components/Resume/ResumeLink';
import OptionPeriod from '../../components/Resume/OptionPeriod';
// import OptionCareer from '../../components/Resume/OptionCareer';
import OptionStack from '../../components/Resume/OptionStack';
import Education from '../../components/Resume/Education';
import Career from '../../components/Resume/Career';

// 개발 기술 학교 옵션메뉴 아이디로 map 연결하기

function Resume() {
  const [photo, setPhoto] = useState(false);
  function photoSwitch(e) {
    setPhoto(!photo);
    e.preventDefault();
  }
  const [introduce, setIntroduce] = useState(false);
  function introduceSwitch(e) {
    setIntroduce(!introduce);
    e.preventDefault();
  }
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
                    <button
                      className={photo === true ? css.visible : css.disabled}
                      onClick={photoSwitch}
                    />
                  </li>
                  <li className={css.topTitle}>
                    <a>간단소개</a>
                    <button
                      className={
                        introduce === true ? css.visible : css.disabled
                      }
                      onClick={introduceSwitch}
                    />
                  </li>
                  <li className={css.topTitle}>
                    <a>개발직무</a>
                    <button className={css.visible} />
                  </li>
                  <li className={css.topTitle}>
                    <a className={css.option}>기술스택</a>
                  </li>
                  <li className={css.topTitle}>
                    <a>링크</a>
                    <button className={css.visible} />
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
                  {photo === true ? (
                    <div className={css.photo}>
                      <i class="fa-solid fa-circle-plus"></i>
                      <span className={css.photoTitle}>사진 추가</span>
                      <span className={css.photoDesc}>1:1 비율 권장</span>
                    </div>
                  ) : null}
                  <div className={css.rightName}>
                    <p className={css.edit_name}>박성아</p>
                    {/* input으로 설정 변경 예정 */}
                    <div className={css.email}>
                      <div className={css.address}>
                        <i class="fa-regular fa-envelope" />
                        sonia_0903@naver.com
                        <Link to="/MyPage/account">
                          <button>메일변경</button>
                        </Link>
                      </div>
                      <i class="fa-solid fa-briefcase" />
                      <OptionPeriod />
                    </div>
                    <div className={css.phone}>
                      <i class="fa-regular fa-calendar" />
                      <input
                        type="text"
                        placeholder="0000"
                        className={css.year}
                      />
                      <span>년생</span>
                      <i className="fa-solid fa-phone" id={css.phone} />
                      <input type="text" placeholder="전화번호" />
                    </div>
                    <p className={css.desc}>
                      · 지원 현황에 대한 정보 및 포지션 추천정보를 받아볼
                      연락처를 입력해주세요.
                    </p>
                  </div>
                </div>
                {introduce === true ? (
                  <div className={css.introduce}>
                    <p>간단 소개</p>
                    <input
                      type="text"
                      placeholder="간결하게 요점만 요약해서 3~5줄 내로 읽기 쉬운 내용으로 작성해보세요."
                    />
                  </div>
                ) : null}
                <div className={css.job}>
                  <p>개발 직무</p>
                  {/* <OptionCareer /> */}
                  <select name="optionCareer" id={css.optionCareer}>
                    <option value="">직무를 선택해주세요.</option>
                    <option value="">서버/백엔드 개발자</option>
                    <option value="">프론트엔드 개발자</option>
                    <option value="">웹/풀스택 개발자</option>
                    <option value="">안드로이드 개발자</option>
                    <option value="">IOS 개발자</option>
                    <option value="">크로스플랫폼 앱개발자</option>
                  </select>
                </div>
                <div className={css.specDiv}>
                  <p>기술 스택</p>
                  {/* <OptionStack /> */}
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
                <ResumeLink />
                <Education />
                <Career />
                <div className={css.btnWrapper}>
                  <button type="submit" className={css.submit}>
                    저장하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Resume;
