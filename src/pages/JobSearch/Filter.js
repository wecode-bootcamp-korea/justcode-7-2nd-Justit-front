import { useState, useEffect } from 'react';
import './JobSearch.scss';

function Filter(props) {
  const {
    onClose,
    mockTech,
    techBtnActive,
    setTechBtnActive,
    setFilterCount,
    locaBtnActive,
    setLocaBtnActive,
    searchParams,
    setSearchParams,
    removeParams,
  } = props;

  const [techOnClick, setTechOnClick] = useState(false);
  const [techOnClickId, setTechOnClickId] = useState([]);
  const [search, setSearch] = useState('');

  const handleTechOn = e => {
    const currentQuery = e.target.dataset.query.toString();
    setTechOnClickId(prev => [...prev, e.target.value]);
    setTechBtnActive(prev => [...prev, e.target.value]);
    setTechOnClick(true);
    setSearch('');
    setFilterCount(prev => prev + 1);
    searchParams.append('techStack', currentQuery);
    setSearchParams(searchParams);
  };

  const handleTechOff = e => {
    const currentQuery = e.target.dataset.query.toString();
    setTechOnClickId(techOnClickId.filter(el => el != e.target.value));
    setTechOnClick(techOnClickId.length > 1 ? true : false);
    setTechBtnActive(techBtnActive.filter(el => el != e.target.value));
    setFilterCount(prev => prev - 1);
    removeParams('techStack', currentQuery);
    setSearchParams(searchParams);
  };
  const onChangeSearch = e => {
    setSearch(e.target.value);
  };
  const filterTitle = mockTech.filter(p => {
    return p.text.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  const handleLoca = e => {
    const currentQuery = e.target.dataset.query.toString();
    setLocaBtnActive(e.target.value);
    searchParams.set('location', currentQuery);
    setSearchParams(searchParams);

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
  const handleLocaTotal = e => {
    setLocaBtnActive(e.target.value);
    searchParams.delete('location');
    setSearchParams(searchParams);
  };

  const filterReset = () => {
    setTechBtnActive([]);
    setTechOnClick(false);
    setFilterCount(0);
    setLocaBtnActive('전체');
    searchParams.delete('techStack');
    searchParams.delete('location');
    setSearchParams(searchParams);
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
                          data-query={mockTech.text}
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
                                      data-query={item.text}
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
                                      data-query={item.text}
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
                                  data-query={item.text}
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
                      onChange={handleLocaTotal}
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
                      data-query="서울"
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
                      data-query="강남"
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
                      data-query="구로"
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
                      data-query="분당"
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
                      data-query="마포"
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
                      data-query="서초"
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
                      data-query="경기"
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
                      data-query="인천"
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
