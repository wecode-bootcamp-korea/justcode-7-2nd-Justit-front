import { useEffect, useState } from 'react';
import './JobSearch.scss';
import Filter from './Filter';
import Tag from './Tag';
import Header from '../../components/Header/Header';
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/Card/Card';

function JobSearch() {
  let cateData = [
    {
      id: 1,
      className: 'backBtn',
      text: '서버/백엔드 개발자',
    },
    {
      id: 2,
      className: 'frontBtn',
      text: '프론트엔드 개발자',
    },
    {
      id: 3,
      className: 'webFullBtn',
      text: '웹 풀스택 개발자',
    },
    {
      id: 4,
      className: 'androBtn',
      text: '안드로이드 개발자',
    },
    {
      id: 5,
      className: 'iosBtn',
      text: 'IOS 개발자',
    },
  ];
  const [btnActive, setBtnActive] = useState([]); //카테고리
  const [popup, setPopup] = useState(false);
  const [mockData, setMockData] = useState([]);
  const [postData, setPostData] = useState([]); //DB데이터
  const [mockTech, setMockTech] = useState([]);
  const [fixNav, setFixNav] = useState(false);
  const [careerBox, setCareerBox] = useState(false);
  const [careerBtnActive, setCareerBtnActive] = useState('전체');
  const [techBtnActive, setTechBtnActive] = useState([]); //기술스택
  const [techBtnFilter, setTechBtnFilter] = useState([]);
  const [locaBtnActive, setLocaBtnActive] = useState('전체'); //지역
  const [filterCount, setFilterCount] = useState(0); //적용필터갯수
  const [tagBtnActive, setTagBtnActive] = useState([]); //태그
  let [searchParams, setSearchParams] = useSearchParams();

  const back = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const front = [3, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const fullStack = [1, 3, 6, 12, 13, 14, 17, 18, 20];
  const android = [1, 7, 21, 22];
  const ios = [7, 23, 24, 25, 26, 27];

  useEffect(() => {
    fetch('http://localhost:3000/data/CardListData.json')
      .then(res => res.json())
      .then(result => setMockData(result.data));
    fetch('http://localhost:3000/data/mockTech.json')
      .then(res => res.json())
      .then(result => setMockTech(result.data));
    // const handleFixNav = () => {
    //   if (window.scrollY > 530) {
    //     setFixNav(true);
    //   } else {
    //     setFixNav(false);
    //   }
    // };
    // window.addEventListener('scroll', handleFixNav);
    // return () => {
    //   window.removeEventListener('scroll', handleFixNav);
    // }; //사이트 변경으로 보류
  });

  // useEffect(() => {
  //   fetch(`http://localhost:8000/posts?${checkHasIncode(searchParams)}`)
  //     .then(res => res.json())
  //     .then(result => setPostData(result.data));
  // }, [searchParams]);

  const checkHasIncode = keyword => {
    const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글인지 식별해주기 위한 정규표현식

    if (keyword.match(check_kor)) {
      const encodeKeyword = encodeURI(keyword); // 한글 인코딩
      return encodeKeyword;
    } else {
      return keyword;
    }
  };

  const handlePopup = () => {
    setPopup(!popup);
  };

  const removeParams = (key, value) => {
    const allParams = searchParams.getAll(key);
    allParams.splice(allParams.indexOf(value), 1);
    searchParams.delete(key);
    allParams.forEach(item => {
      searchParams.append(key, item);
    });
  };

  const handleCareer = () => {
    setCareerBox(!careerBox);
  };
  const handleCareerBtn = e => {
    setCareerBtnActive(e.target.value);
    const currentQuery = e.target.dataset.query.toString();
    searchParams.set('career', currentQuery);
    setSearchParams(searchParams);
  };
  const handleCareerTotal = e => {
    setCareerBtnActive(e.target.value);
    searchParams.delete('career');
    setSearchParams(searchParams);
  };
  const handleCareerReset = () => {
    setCareerBtnActive('전체');
    searchParams.delete('career');
    setSearchParams(searchParams);
  };
  const handleResetBtn = () => {
    searchParams.delete('tag');
    searchParams.delete('techStack');
    searchParams.delete('location');
    searchParams.delete('career');
    setSearchParams(searchParams);
    setTechBtnActive([]);
    setLocaBtnActive('전체');
    setTagBtnActive([]);
    setFilterCount(0);
  };

  const toggleActive = e => {
    const currentQuery = e.target.dataset.query.toString();
    const prevQuery = searchParams.getAll('position');
    if (btnActive.filter(ele => ele == e.target.value).length > 0) {
      setBtnActive(btnActive.filter(el => el != e.target.value));
      removeParams('position', currentQuery);
      setSearchParams(searchParams);
    } else {
      setBtnActive(prev => [...prev, e.target.value]);
      searchParams.append('position', currentQuery);
      setSearchParams(searchParams);
    }
  };
  const handleTechOff = () => {
    setTechBtnFilter([]);
    setBtnActive([]);
    searchParams.delete('position');
    setSearchParams(searchParams);
  };
  useEffect(() => {
    handleTech(btnActive);
  }, [btnActive]); //동기처리

  const toggleTechActive = e => {
    const currentQuery = e.target.dataset.query.toString();
    // const prevQuery = searchParams.getAll('techStack');
    if (techBtnActive.filter(ele => ele == e.target.value).length > 0) {
      setTechBtnActive(techBtnActive.filter(el => el != e.target.value));
      setFilterCount(prev => prev - 1);
      removeParams('techStack', currentQuery);
      setSearchParams(searchParams);
    } else {
      setTechBtnActive(prev => [...prev, e.target.value]);
      setFilterCount(prev => prev + 1);
      searchParams.append('techStack', currentQuery);
      setSearchParams(searchParams);
    }
  };

  const handleTech = btnActive => {
    setTechBtnFilter([]);
    btnActive.map(item => {
      switch (item) {
        case '0':
          setTechBtnFilter(prev => [...prev, ...back]);
          break;
        case '1':
          setTechBtnFilter(prev => [...prev, ...front]);
          break;
        case '2':
          setTechBtnFilter(prev => [...prev, ...fullStack]);
          break;
        case '3':
          setTechBtnFilter(prev => [...prev, ...android]);
          break;
        case '4':
          setTechBtnFilter(prev => [...prev, ...ios]);
          break;
      }
    });
  };

  let techResult = [...new Set(techBtnFilter)];

  return (
    <>
      <Header />
      <main className="jobContainer">
        <div>
          <section className="jobWrap">
            <h1 className="jobTitle">직무 탐색</h1>
            <section className="cateContainer">
              <div className="cateBtn">
                <button
                  className={btnActive.length > 0 ? '' : ' active'}
                  onClick={handleTechOff}
                >
                  전체
                </button>

                {cateData.map((item, idx) => {
                  return (
                    <button
                      type="button"
                      key={item.id}
                      value={idx}
                      className={
                        item.className +
                        (btnActive.filter(el => el == idx).length > 0
                          ? ' active'
                          : '')
                      }
                      data-query={item.id}
                      onClick={toggleActive}
                    >
                      {item.text}
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="techContainer">
              {mockTech
                .filter(el => techResult.some(i => i == el.id))
                .map((item, idx) => {
                  return (
                    <button
                      type="button"
                      key={item.id}
                      value={item.id}
                      className={
                        item.className +
                        (techBtnActive.filter(el => el == item.id).length > 0
                          ? ' active'
                          : '')
                      }
                      data-query={item.text}
                      onClick={toggleTechActive}
                    >
                      <img src={item.src} width="20px" />
                      {item.text}
                    </button>
                  );
                })}
            </div>

            {/* <section className="jobCuration">
            <div>
              <div>
                <h1></h1>
                <div>
                  <a></a>
                  <button></button>
                  <button></button>
                </div>
              </div>
              <div></div>
            </div>
          </section> */}
          </section>
        </div>
        <div className="filterContainer">
          {/* {fixNav ? ( //사이트 변경되서 보류
          <div className="filterSec active">
            <div className="filterWrap">
              <div className="filterBtn active">
                <div>
                  <button className="filterYear">
                    <span>경력</span>
                    <img src="/icons/selectbottom.png" />
                  </button>
                </div>
                <button className="filterMore" onClick={handlePopup}>
                  <img src="/icons/filter.png" width="20px" />
                  <span>필터 더보기</span>
                  <em>{filterCount}</em>
                </button>
                네브
                {popup ? (
                  <Filter
                    onClose={setPopup}
                    mockTech={mockTech}
                    // setMockTech={setMockTech}
                    techBtnActive={techBtnActive}
                    setTechBtnActive={setTechBtnActive}
                    toggleTechActive={toggleTechActive}
                    setFilterCount={setFilterCount}
                    filterCount={filterCount}
                    setLocaBtnActive={setLocaBtnActive}
                    locaBtnActive={locaBtnActive}
                  />
                ) : null}
              </div>
              <Tag />
            </div>
          </div>
        ) : ( */}
          <div className="filterSec">
            <div className="filterWrap">
              <div className="filterBtn">
                <div className="filterCareer">
                  <button className="filterYear" onClick={handleCareer}>
                    <span>
                      {careerBtnActive == '전체' ? '경력' : careerBtnActive}
                    </span>
                    <img src="/icons/selectbottom.png" />
                  </button>
                  {careerBox && (
                    <div className="careerContainer">
                      <div className="careerYearWrap">
                        <div className="careerYear">
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="전체"
                                checked={careerBtnActive == '전체'}
                                onChange={handleCareerTotal}
                              />
                              전체
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="신입"
                                checked={careerBtnActive == '신입'}
                                onChange={handleCareerBtn}
                                data-query="0"
                              />
                              신입
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="1년"
                                checked={careerBtnActive == '1년'}
                                onChange={handleCareerBtn}
                                data-query="1"
                              />
                              1년
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="2년"
                                checked={careerBtnActive == '2년'}
                                onChange={handleCareerBtn}
                                data-query="2"
                              />
                              2년
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="3년"
                                checked={careerBtnActive == '3년'}
                                onChange={handleCareerBtn}
                                data-query="3"
                              />
                              3년
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="4년"
                                checked={careerBtnActive == '4년'}
                                onChange={handleCareerBtn}
                                data-query="4"
                              />
                              4년
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="5년"
                                checked={careerBtnActive == '5년'}
                                onChange={handleCareerBtn}
                                data-query="5"
                              />
                              5년
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="6년"
                                checked={careerBtnActive == '6년'}
                                onChange={handleCareerBtn}
                                data-query="6"
                              />
                              6년
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="7년"
                                checked={careerBtnActive == '7년'}
                                onChange={handleCareerBtn}
                                data-query="7"
                              />
                              7년
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="8년"
                                checked={careerBtnActive == '8년'}
                                onChange={handleCareerBtn}
                                data-query="8"
                              />
                              8년
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="9년"
                                checked={careerBtnActive == '9년'}
                                onChange={handleCareerBtn}
                                data-query="9"
                              />
                              9년
                            </label>
                          </div>
                          <div>
                            <label>
                              <input
                                type="radio"
                                name="career"
                                value="10년"
                                checked={careerBtnActive == '10년'}
                                onChange={handleCareerBtn}
                                data-query="10"
                              />
                              10년~
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="careerReset">
                        <button onClick={handleCareerReset}>초기화</button>
                      </div>
                    </div>
                  )}
                </div>

                <button className="filterMore" onClick={handlePopup}>
                  <img src="/icons/filter.png" width="20px" />
                  <span>필터 더보기</span>
                  <em>{filterCount}</em>
                </button>

                {popup ? (
                  <Filter
                    techBtnActive={techBtnActive}
                    setTechBtnActive={setTechBtnActive}
                    mockTech={mockTech}
                    onClose={setPopup}
                    toggleTechActive={toggleTechActive}
                    setFilterCount={setFilterCount}
                    filterCount={filterCount}
                    setLocaBtnActive={setLocaBtnActive}
                    locaBtnActive={locaBtnActive}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    removeParams={removeParams}
                  />
                ) : null}

                <button className="resetBtn" onClick={handleResetBtn}>
                  <img src="icons/reset.png" width="16px" />
                </button>
              </div>

              <Tag
                tagBtnActive={tagBtnActive}
                setTagBtnActive={setTagBtnActive}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                removeParams={removeParams}
              />
            </div>
          </div>

          {/* <section className="cardContainer">
            {mockData.map(cardList => {
              return (
                cardList.type === 'short' && (
                  <MainCardList
                    key={cardList.id}
                    type={cardList.type}
                    img={cardList.img}
                    company_name={cardList.company_name}
                    title={cardList.title}
                    stack={cardList.stack}
                    location={cardList.location}
                    career={cardList.career}
                  />
                )
              );
            })}
          </section> */}

          <section className="cardContainer">
            {mockData.map(cardList => {
              return (
                <Card
                  key={cardList.id}
                  img={cardList.img}
                  company_name={cardList.company_name}
                  title={cardList.title}
                  stack={cardList.stack}
                  location={cardList.location}
                  career={cardList.career}
                />
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default JobSearch;
