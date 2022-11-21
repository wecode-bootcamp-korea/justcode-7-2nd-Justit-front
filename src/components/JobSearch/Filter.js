import { useState, useEffect } from 'react';
import './JobSearch.scss';

function Filter(props) {
  const {
    onClose,
    mockTech,
    techBtnActive,
    setTechBtnActive,
    toggleTechActive,
    setFilterCount,
    filterCount,
    locaBtnActive,
    setLocaBtnActive,
  } = props;
  const [mockFilter, setMockFilter] = useState([]);
  const [techOnClick, setTechOnClick] = useState(false);
  const [techOnClickId, setTechOnClickId] = useState([]);
  const [search, setSearch] = useState('');

  const handleTechOn = e => {
    setTechOnClickId(prev => [...prev, e.target.value]);
    setTechBtnActive(prev => [...prev, e.target.value]);
    setTechOnClick(true);
    setSearch('');
    setFilterCount(prev => prev + 1);
  };

  const handleTechOff = e => {
    setTechOnClickId(techOnClickId.filter(el => el != e.target.value));
    setTechOnClick(techOnClickId.length > 1 ? true : false);
    setTechBtnActive(techBtnActive.filter(el => el != e.target.value));
    setFilterCount(prev => prev - 1);
  };
  const onChangeSearch = e => {
    setSearch(e.target.value);
  };
  const filterTitle = mockTech.filter(p => {
    return p.text.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  const handleLoca = e => {
    setLocaBtnActive(e.target.value);

    if (e.target.value == '전체') {
      locaBtnActive == '전체'
        ? setFilterCount(prev => prev)
        : setFilterCount(prev => prev - 1);
    } else {
      locaBtnActive == '전체'
        ? setFilterCount(prev => prev + 1)
        : setFilterCount(prev => prev);
    }
  };

  const filterReset = () => {
    setTechBtnActive([]);
    setTechOnClick(false);
    setFilterCount(0);
    setLocaBtnActive('전체');
  };

  return (
    <div className="modalWrap">
      <div className="filterModalContainer">
        <div className="filterWrap">
          <header className="filterTitleWrap">
            <h1>필터 더보기</h1>
            <img
              className="xbox"
              src="icons/xbox.png"
              alt="엑스"
              width="14px"
              height="14px"
              onClick={() => onClose(false)}
            />
          </header>

          <div className="filterContentWrap">
            <section className="techSection">
              <h2>기술스택</h2>
              <div className="techStackContainer">
                <div className="techSearch">
                  <input
                    className="techSearchInput"
                    placeholder="ex)javascript"
                    onChange={onChangeSearch}
                    value={search}
                  ></input>
                  <button className="techSearchBtn">
                    <img src="/icons/graymag.png" alt="검색" width="24px" />
                  </button>
                </div>
                {search ? (
                  <div className="techSearchResult">
                    <ul>
                      {filterTitle.map(mockTech => (
                        <li
                          key={mockTech.id}
                          value={mockTech.id}
                          onClick={handleTechOn}
                        >
                          <img
                            src={mockTech.src}
                            alt="필터아이콘"
                            width="20px"
                          />
                          {mockTech.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div className="techRecoContainer">
                  <div className="techRecoWrap">
                    {techBtnActive.length > 0 ? (
                      <>
                        <h4>선택한 기술 스택</h4>
                        <div className="techRecoBtn">
                          {techBtnActive.map(ele => {
                            return mockTech
                              .filter(el => el.id == ele)
                              .map(item => {
                                return (
                                  <button type="button" key={item.id}>
                                    <img src={item.src} width="20px" />
                                    {item.text}
                                    <button
                                      type="button"
                                      value={item.id}
                                      className="closeBtn"
                                      onClick={handleTechOff}
                                    >
                                      ✕
                                    </button>
                                  </button>
                                );
                              });
                          })}
                        </div>
                      </>
                    ) : techOnClick ? (
                      <>
                        <h4>선택한 기술 스택</h4>
                        <div className="techRecoBtn">
                          {techOnClickId.map(ele => {
                            return mockTech
                              .filter(el => el.id == ele)
                              .map(item => {
                                return (
                                  <button type="button" key={item.id}>
                                    <img src={item.src} width="20px" />
                                    {item.text}
                                    <button
                                      type="button"
                                      value={item.id}
                                      className="closeBtn"
                                      onClick={handleTechOff}
                                    >
                                      ✕
                                    </button>
                                  </button>
                                );
                              });
                          })}
                        </div>
                      </>
                    ) : (
                      <>
                        <h4>추천 기술스택</h4>
                        <div className="techRecoBtn">
                          {mockTech
                            .filter(
                              el =>
                                el.id == 1 ||
                                el.id == 14 ||
                                el.id == 9 ||
                                el.id == 4 ||
                                el.id == 12 ||
                                el.id == 10
                            )
                            .map(item => {
                              return (
                                <button
                                  type="button"
                                  key={item.id}
                                  value={item.id}
                                  onClick={handleTechOn}
                                >
                                  <img
                                    className="RecoIcon"
                                    src={item.src}
                                    width="20px"
                                  />
                                  {item.text}
                                </button>
                              );
                            })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
            <section className="locationContainer">
              <h2>지역</h2>
              <div className="locaCheckWrap">
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="전체"
                      checked={locaBtnActive == '전체'}
                      onChange={handleLoca}
                    ></input>
                    전체
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="서울"
                      checked={locaBtnActive == '서울'}
                      onChange={handleLoca}
                    ></input>
                    서울
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="강남"
                      checked={locaBtnActive == '강남'}
                      onChange={handleLoca}
                    ></input>
                    강남
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="구로"
                      checked={locaBtnActive == '구로'}
                      onChange={handleLoca}
                    ></input>
                    구로
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="분당"
                      checked={locaBtnActive == '분당'}
                      onChange={handleLoca}
                    ></input>
                    분당
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="마포"
                      checked={locaBtnActive == '마포'}
                      onChange={handleLoca}
                    ></input>
                    마포
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="서초"
                      checked={locaBtnActive == '서초'}
                      onChange={handleLoca}
                    ></input>
                    서초
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="경기"
                      checked={locaBtnActive == '경기'}
                      onChange={handleLoca}
                    ></input>
                    경기
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="location"
                      value="인천"
                      checked={locaBtnActive == '인천'}
                      onChange={handleLoca}
                    ></input>
                    인천
                  </label>
                </div>
              </div>
            </section>
          </div>
          <footer className="filterFooter">
            <button className="filterReset" onClick={filterReset}>
              초기화
            </button>
            <button className="filterApply" onClick={() => onClose(false)}>
              적용
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Filter;
