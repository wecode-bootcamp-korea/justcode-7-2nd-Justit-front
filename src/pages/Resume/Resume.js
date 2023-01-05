import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Resume.module.scss';
import Header from '../../components/Header/Header';

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

  //전체 정보 가져오기
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   fetch('http://localhost:8000/resume/get', {
  //     method: 'GET',
  //     headers: {
  //       authorization: token,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(result => setData(result.userInfo));
  // }, []);
  // let user_mail = data.email;
  // let user_name = data.users_name;

  const [getInfo, setGetInfo] = useState({
    users_name: '',
    email: '',
    phone_number: '',
    birth: '',
    career: '',
    resume_image: '',
    introduce: '',
    position_id: '',
    tech_stack_id: '',
    education_year_month: '',
    education_id: '',
    resume_education_name: '',
    education_department: '',
    career_year_month: '',
    resume_career_name: '',
    career_introduce: '',
    career_department: '',
    career_tech_stack_id: '',
    result: '',
  });

  //getInfo가 변경될 때
  const onChange = e => {
    const { name, value } = e.target;
    setGetInfo({
      ...getInfo,
      [name]: value,
    });
  };
  //전체 정보 가져오기
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/resume/getall', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setGetInfo(result.resumeInfo));
  }, []);
  //전체 정보 저장하기
  const handlePost = event => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/resume/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify(getInfo),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SAVED_RESUME') {
          localStorage.setItem('token', result.token);
          alert('이력서를 저장했습니다!');
          // document.location.href = '/resume';
        }
      });
  };
  //전체정보 업데이트
  const handleUpdate = event => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/resume/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify(getInfo),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'UPDATED_RESUME') {
          localStorage.setItem('token', result.token);
          alert('이력서를 수정했습니다!');
          // document.location.href = '/resume';
        }
      });
  };

  return (
    <>
      <Header />
      <div className={css.background}>
        <div className={css.container}>
          <form onSubmit={e => e.preventDefault()}>
            <div className={css.wholeWrapper}>
              <div className={css.leftWrapper}>
                <div className={css.editContent}>
                  <p className={css.editTitle}>항목편집 ✍</p>
                  <p className={css.editSubtitle}>
                    원하는 항목을 편집해보세요.
                  </p>
                  <ul className={css.editTop}>
                    <li className={css.topTitle}>
                      <span>사진</span>
                      <button
                        className={photo === true ? css.visible : css.disabled}
                        onClick={photoSwitch}
                      />
                    </li>
                    <li className={css.topTitle}>
                      <span>간단소개</span>
                      <button
                        className={
                          introduce === true ? css.visible : css.disabled
                        }
                        onClick={introduceSwitch}
                      />
                    </li>
                    <li className={css.topTitle}>
                      <span>개발직무</span>
                      <button className={css.visible} />
                    </li>
                    <li className={css.topTitle}>
                      <span className={css.option}>기술스택</span>
                    </li>
                    <li className={css.topTitle}>
                      <span>링크</span>
                      <button className={css.visible} />
                    </li>
                    <li className={css.topTitle}>
                      <span className={css.option_edu}>학력</span>
                    </li>
                    <li className={css.topTitle}>
                      <span className={css.option}>경력</span>
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
                      <div
                        className={css.photo}
                        name="resume_image"
                        onChange={onChange}
                        defaultValue={getInfo?.resume_image}
                      >
                        <i class="fa-solid fa-circle-plus"></i>
                        <span className={css.photoTitle}>사진 추가</span>
                        <span className={css.photoDesc}>1:1 비율 권장</span>
                      </div>
                    ) : null}
                    <div className={css.rightName}>
                      <input
                        className={css.edit_name}
                        name="users_name"
                        type="text"
                        placeholder="이름"
                        onChange={onChange}
                        defaultValue={getInfo?.users_name}
                      />
                      <div className={css.email}>
                        <i class="fa-regular fa-envelope" />
                        <input
                          className={css.address}
                          name="email"
                          type="text"
                          placeholder="이메일"
                          onChange={onChange}
                          defaultValue={getInfo?.email}
                        />
                        <Link to="/mypage/account">
                          <button>메일변경</button>
                        </Link>

                        <i class="fa-solid fa-briefcase" />
                        <select
                          name="career"
                          id={css.optionPeriod}
                          onChange={onChange}
                          defaultValue={getInfo?.career}
                          key={getInfo?.career}
                        >
                          <option value="0">경력</option>
                          <option value="1">신입</option>
                          <option value="2">1년차</option>
                          <option value="3">2년차</option>
                          <option value="4">3년차</option>
                          <option value="5">4년차</option>
                          <option value="6">5년차</option>
                          <option value="7">6년차</option>
                          <option value="8">7년차</option>
                          <option value="9">8년차</option>
                          <option value="10">9년차</option>
                          <option value="11">10년차</option>
                        </select>
                      </div>
                      <div className={css.phone}>
                        <i class="fa-regular fa-calendar" />
                        <input
                          type="text"
                          name="birth"
                          placeholder="0000"
                          className={css.year}
                          onChange={onChange}
                          defaultValue={getInfo?.birth}
                        />
                        <span>년생</span>
                        <i className="fa-solid fa-phone" id={css.phone} />
                        <input
                          type="text"
                          name="phone_number"
                          placeholder="전화번호"
                          onChange={onChange}
                          defaultValue={getInfo?.phone_number}
                        />
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
                        name="introduce"
                        placeholder="간결하게 요점만 요약해서 3~5줄 내로 읽기 쉬운 내용으로 작성해보세요."
                        onChange={onChange}
                        defaultValue={getInfo?.introduce}
                      />
                    </div>
                  ) : null}
                  <div className={css.job}>
                    <p>개발 직무</p>
                    <select
                      name="position_id"
                      id={css.optionCareer}
                      onChange={onChange}
                      defaultValue={getInfo?.position_id}
                      key={getInfo?.position_id}
                    >
                      <option value="0">직무를 선택해주세요.</option>
                      <option value="1">서버/백엔드 개발자</option>
                      <option value="2">프론트엔드 개발자</option>
                      <option value="3">웹/풀스택 개발자</option>
                      <option value="4">안드로이드 개발자</option>
                      <option value="5">IOS 개발자</option>
                      <option value="6">크로스플랫폼 앱개발자</option>
                    </select>
                  </div>
                  <div className={css.specDiv}>
                    <p>기술 스택</p>
                    <select
                      name="tech_stack_id"
                      id={css.optionStack}
                      onChange={onChange}
                      defaultValue={getInfo?.tech_stack_id}
                      key={getInfo?.tech_stack_id}
                    >
                      <option value="0">기술 스택을 선택해주세요.</option>
                      <option value="1">javascript</option>
                      <option value="2">html</option>
                      <option value="3">css</option>
                      <option value="4">react</option>
                      <option value="5">node.js</option>
                      <option value="6">C++</option>
                    </select>
                  </div>
                  <div className={css.link}>
                    <p>링크</p>
                    <div className={css.githubWrapper}>
                      <i class="fa-brands fa-github" />
                      <div className={css.github}>
                        <label>Github</label>
                        <input type="text" placeholder="https://github.com" />
                      </div>
                    </div>
                    <div className={css.githubWrapper}>
                      <i class="fa-solid fa-user" />
                      <div className={css.github}>
                        <label>Notion</label>
                        <input type="text" placeholder="https://notion.so" />
                      </div>
                    </div>
                    <div className={css.githubWrapper}>
                      <i class="fa-brands fa-blogger" />
                      <div className={css.github}>
                        <label>Blog</label>
                        <input type="text" placeholder="https://blog.com" />
                      </div>
                    </div>
                  </div>
                  <div className={css.edu}>
                    <p>학력</p>
                    <div className={css.eduWrapper}>
                      <div className={css.bullet}>
                        <i class="fa-regular fa-circle" />
                      </div>
                      <div className={css.time}>
                        <input
                          type="text"
                          name="education_year_month"
                          className={css.year}
                          placeholder="YYYY.MM"
                          onChange={onChange}
                          defaultValue={getInfo?.education_year_month}
                        />
                        <span> 졸업(예정)</span>
                      </div>
                      <div className={css.school}>
                        <select
                          name="education_id"
                          id={css.optionEducation}
                          onChange={onChange}
                          defaultValue={getInfo?.education_id}
                          key={getInfo?.education_id}
                        >
                          <option value="0">학력 구분</option>
                          <option value="1">고등학교</option>
                          <option value="2">대학(2,3년)</option>
                          <option value="3">대학교(4년)</option>
                          <option value="4">대학원(석사)</option>
                          <option value="5">대학원(박사)</option>
                        </select>
                        <input
                          type="text"
                          name="resume_education_name"
                          placeholder="학교명을 입력해주세요."
                          onChange={onChange}
                          defaultValue={getInfo?.resume_education_name}
                        />
                        <input
                          type="text"
                          name="education_department"
                          placeholder="학과명을 입력해주세요."
                          onChange={onChange}
                          defaultValue={getInfo?.education_department}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={css.career}>
                    <p>경력(업무경험)</p>
                    <div className={css.careerWrapper}>
                      <div className={css.bullet}>
                        <i class="fa-regular fa-circle" />
                      </div>
                      <div className={css.time}>
                        <input
                          type="text"
                          name="career_year_month"
                          className={css.year}
                          placeholder="YYYY.MM-YYYY.MM"
                          onChange={onChange}
                          defaultValue={getInfo?.career_year_month}
                        />
                      </div>
                      <div className={css.period}>
                        <input
                          id={css.noSpace}
                          type="text"
                          name="resume_career_name"
                          placeholder="회사명을 입력해주세요."
                          onChange={onChange}
                          defaultValue={getInfo?.resume_career_name}
                        />
                        <input
                          id={css.noSpace}
                          type="text"
                          name="career_introduce"
                          placeholder="회사소개를 간단하게 입력해주세요."
                          onChange={onChange}
                          defaultValue={getInfo?.career_introduce}
                        />
                        <input
                          id={css.noSpace}
                          type="text"
                          name="career_department"
                          placeholder="부서명/직책"
                          onChange={onChange}
                          defaultValue={getInfo?.career_department}
                        />
                        <input
                          id={css.noSpace}
                          type="text"
                          name="result"
                          placeholder="주요업무 및 성과를 작성해주세요."
                          onChange={onChange}
                          defaultValue={getInfo?.result}
                        />
                        <select
                          name="career_tech_stack_id"
                          id={css.optionStack}
                          onChange={onChange}
                          defaultValue={getInfo?.career_tech_stack_id}
                          key={getInfo?.career_tech_stack_id}
                        >
                          <option value="0">기술 스택을 선택해주세요.</option>
                          <option value="1">javascript</option>
                          <option value="2">html</option>
                          <option value="3">css</option>
                          <option value="4">react</option>
                          <option value="5">node.js</option>
                          <option value="6">C++</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className={css.btnWrapper}>
                    <button
                      type="submit"
                      className={css.submit}
                      onClick={handlePost}
                    >
                      저장하기
                    </button>
                    <button
                      type="submit"
                      className={css.submit}
                      onClick={handleUpdate}
                    >
                      수정하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Resume;
