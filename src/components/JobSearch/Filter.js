import './JobSearch.scss';

function Filter(props) {
  const { onClose } = props;

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
                  ></input>
                  <button className="techSearchBtn">
                    <img src="/icons/graymag.png" alt="검색" width="24px" />
                  </button>
                </div>
                <div></div>
                <div className="techRecoContainer">
                  <div className="techRecoWrap">
                    <h4>추천 기술스택</h4>
                    <div className="techRecoBtn">
                      <div>
                        <img src="/icons/java.png" alt="자바" width="20px" />
                        Java
                      </div>
                      <div>
                        <img
                          src="/icons/javascript.png"
                          alt="자바스크립트"
                          width="20px"
                        />
                        JavaScript
                      </div>
                      <div>
                        <img src="/icons/aws.png" alt="aws" width="20px" />
                        AWS
                      </div>
                      <div>
                        <img
                          src="/icons/python.png"
                          alt="파이썬"
                          width="20px"
                        />
                        Python
                      </div>
                      <div>
                        <img src="/icons/react.png" alt="리액트" width="20px" />
                        React
                      </div>
                      <div>
                        <img src="/icons/mysql.png" alt="sql" width="20px" />
                        MySQL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="locationContainer">
              <h2>지역</h2>
              <div className="locaCheckWrap">
                <div>
                  <label>
                    <input type="checkbox"></input>
                    전체
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox"></input>
                    서울
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox"></input>
                    강남
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox"></input>
                    구로/가산 디지털단지
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox"></input>
                    판교 테크노밸리
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox"></input>
                    마포
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox"></input>
                    서초
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox"></input>
                    경기
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox"></input>
                    인천
                  </label>
                </div>
              </div>
            </section>
          </div>
          <footer className="filterFooter">
            <button className="filterReset">초기화</button>
            <button className="filterApply">적용</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Filter;
