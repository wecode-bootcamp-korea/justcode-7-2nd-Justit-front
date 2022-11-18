import { useEffect, useState } from 'react';
import './JobSearch.scss';
import TechStack from './TechStack';
import Filter from './Filter';
import MockCard from './MockCard';
import Tag from './Tag';
function JobSearch() {
  let cateData = [
    {
      id: 1,
      className: 'totalBtn',
      text: '전체',
    },
    {
      id: 2,
      className: 'backBtn',
      text: '서버/백엔드 개발자',
    },
    {
      id: 3,
      className: 'frontBtn',
      text: '프론트엔드 개발자',
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
  const [fixNav, setFixNav] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/data/mockData.json')
      .then(res => res.json())
      .then(result => setMockData(result.data));
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
      // setBtnActiveName(
      //   btnActiveName.filter(el => el != `${e.target.className}`)
      // );
      // console.log(btnActiveName);
    } else {
      setBtnActive(prev => [...prev, e.target.value]);
      // setBtnActiveName(prev => [...prev, e.target.className]);
      // console.log(btnActiveName);
    }
  };

  return (
    <main className="jobContainer">
      <div>
        <section className="jobWrap">
          <h1 className="jobTitle">직무 탐색</h1>
          <section className="cateContainer">
            <div className="cateBtn">
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
          <TechStack btnActive={btnActive} />

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
