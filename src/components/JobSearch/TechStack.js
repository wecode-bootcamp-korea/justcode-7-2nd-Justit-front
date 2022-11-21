import { useEffect, useState } from 'react';
function TechStack({
  mockTech,
  techResult,
  techBtnActive,
  setTechBtnActive,
  btnActive,
}) {
  const total = [];
  const back = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const front = [3, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const fullStack = [1, 3, 6, 12, 13, 14, 17, 18, 20];
  const android = [1, 7, 21, 22];
  const ios = [7, 23, 24, 25, 26, 27];
  const [techBtnFilter, setTechBtnFilter] = useState([]);
  // const [techBtnActive, setTechBtnActive] = useState([]);
  const [techIsLoad, setTechisLoad] = useState(false);

  const toggleTechActive = e => {
    if (techBtnActive.filter(ele => ele == e.target.value).length > 0) {
      setTechBtnActive(techBtnActive.filter(el => el != e.target.value));
    } else {
      setTechBtnActive(prev => [...prev, e.target.value]);
    }
  };

  return (
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
  );
}

export default TechStack;
