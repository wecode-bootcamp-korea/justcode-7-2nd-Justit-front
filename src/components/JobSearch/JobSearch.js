import { useEffect, useState, useRef } from 'react';
import './JobSearch.scss';
// import TechStack from './TechStack';
import Filter from './Filter';
import MockCard from './MockCard';
import Tag from './Tag';
import { useResolvedPath } from 'react-router-dom';
import TechStack from './TechStack';
function JobSearch() {
  let cateData = [
    // {
    //   id: 1,
    //   className: 'totalBtn',
    //   text: '전체',
    // },
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
  const [btnActive, setBtnActive] = useState([]);
  const [btnActiveName, setBtnActiveName] = useState([]);
  const [popup, setPopup] = useState(false);
  const [mockData, setMockData] = useState([]);
  const [mockTech, setMockTech] = useState([]);
  const [fixNav, setFixNav] = useState(false);
  const [techBtnActive, setTechBtnActive] = useState([]);
  const [techBtnFilter, setTechBtnFilter] = useState([]);
  const [techIsLoad, setTechIsLoad] = useState(false);

  const back = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const front = [3, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const fullStack = [1, 3, 6, 12, 13, 14, 17, 18, 20];
  const android = [1, 7, 21, 22];
  const ios = [7, 23, 24, 25, 26, 27];

  useEffect(() => {
    fetch('http://localhost:3000/data/mockData.json')
      .then(res => res.json())
      .then(result => setMockData(result.data));
    fetch('http://localhost:3000/data/mockTech.json')
      .then(res => res.json())
      .then(result => setMockTech(result.data));

    const handleFixNav = () => {
      if (window.scrollY > 530) {
        setFixNav(true);
      } else {
        setFixNav(false);
      }
    };
    window.addEventListener('scroll', handleFixNav);
    return () => {
      window.removeEventListener('scroll', handleFixNav);
    };
  });

  const handlePopup = () => {
    setPopup(!popup);
  };

  const toggleActive = e => {
    if (btnActive.filter(ele => ele == e.target.value).length > 0) {
      setBtnActive(btnActive.filter(el => el != e.target.value));
    } else {
      setBtnActive(prev => [...prev, e.target.value]);
    }
  };
  useEffect(() => {
    handleTech(btnActive);
    console.log(btnActive);
  }, [btnActive]); //동기처리

  const toggleTechActive = e => {
    if (techBtnActive.filter(ele => ele == e.target.value).length > 0) {
      setTechBtnActive(techBtnActive.filter(el => el != e.target.value));
    } else {
      setTechBtnActive(prev => [...prev, e.target.value]);
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
      console.log(techBtnFilter);
    });
  };
  const handleTechOff = () => {
    setTechBtnFilter([]);
    setBtnActive([]);
  };

  let techResult = [...new Set(techBtnFilter)];
  let techMap = mockTech.filter(el => el.id == techResult);

  return (
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
                    value={idx}
                    className={
                      item.className +
                      (techBtnActive.filter(el => el == idx).length > 0
                        ? ' active'
                        : '')
                    }
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
        {fixNav ? (
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
                </button>
                {popup ? <Filter onClose={setPopup} /> : null}
              </div>
              <Tag />
            </div>
          </div>
        ) : (
          <div className="filterSec">
            <div className="filterWrap">
              <div className="filterBtn">
                <div>
                  <button className="filterYear">
                    <span>경력</span>
                    <img src="/icons/selectbottom.png" />
                  </button>
                </div>
                <button className="filterMore" onClick={handlePopup}>
                  <img src="/icons/filter.png" width="20px" />
                  <span>필터 더보기</span>
                </button>
                {popup ? <Filter onClose={setPopup} /> : null}
              </div>

              <Tag />
            </div>
          </div>
        )}
        <section className="cardContainer">
          {mockData.map(data => {
            return (
              <MockCard
                key={data.id}
                img={data.com_img}
                name={data.name}
                job={data.job}
                tech={data.tech_stack}
                location={data.location}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default JobSearch;
