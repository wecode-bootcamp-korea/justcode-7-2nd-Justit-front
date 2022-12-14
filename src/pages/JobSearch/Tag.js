import { useEffect, useRef, useState } from 'react';
function Tag(props) {
  let tagData = [
    {
      id: 1,
      className: '4.5days',
      icon: 'π― ',
      text: '4.5μΌμ ',
      filter: 'FOUR_DOT_FIVE_DAYS',
    },
    {
      id: 2,
      className: 'homeWork',
      icon: 'π  ',
      text: 'μ¬νκ·Όλ¬΄',
      filter: 'WORK_AT_HOME_COMPANY',
    },
    {
      id: 3,
      className: 'flexibleWork',
      icon: 'β° ',
      text: 'μ μ°κ·Όλ¬΄μ ',
      filter: 'FLEXIBLE_WORK',
    },
    {
      id: 4,
      className: 'timeWork',
      icon: 'π ',
      text: 'μμ°¨μΆκ·Όμ ',
      filter: 'DIFFERENCE_WORK_TIME',
    },
    {
      id: 5,
      className: 'incentive',
      icon: 'π΅ ',
      text: 'μΈμΌν°λΈ',
      filter: 'INCENTIVE_COMPANY',
    },
    {
      id: 6,
      className: 'snack',
      icon: 'β ',
      text: 'λ§μλκ°μλ λ ',
      filter: 'SNACK',
    },
    {
      id: 7,
      className: 'fastResponse',
      icon: 'β‘ ',
      text: 'μ§μ μλ΅μ΄ λΉ λ₯Έ κΈ°μ',
      filter: 'QUICKLY_FEEDBACK_COMPANY',
    },
    {
      id: 8,
      className: 'macWork',
      icon: 'π» ',
      text: 'λ§₯λΆμΌλ‘κ°λ°',
      filter: 'MACBOOK',
    },
    {
      id: 9,
      className: 'useNickname',
      icon: 'π©β ',
      text: 'λλ€μμ¬μ©',
      filter: 'NICKNAME',
    },
    {
      id: 10,
      className: 'horizontal',
      icon: 'π ',
      text: 'μνμ μ‘°μ§',
      filter: 'HORIZONTAL_CULTURE',
    },
    {
      id: 11,
      className: 'investment',
      icon: 'π° ',
      text: 'λμ ν¬μκΈ100μ΅μ΄μ',
      filter: 'INVESTMENT_MORE_100',
    },
    {
      id: 12,
      className: 'stockAuction',
      icon: 'π ',
      text: 'μ€ν‘μ΅μμ κ³΅',
      filter: 'STOCK_OPTION',
    },
    {
      id: 13,
      className: 'bookSupport',
      icon: 'π ',
      text: 'λμκ΅¬μλΉμ§μ',
      filter: 'FREE_BOOK',
    },
  ];

  const {
    tagBtnActive,
    setTagBtnActive,
    setSearchParams,
    searchParams,
    removeParams,
  } = props;
  const scrollRef = useRef();
  const [scrollX, setScrollX] = useState(0);
  const [maxScrollX, setMaxScrollX] = useState();

  const toggleActive = e => {
    const currentQuery = e.target.dataset.query.toString();
    if (tagBtnActive.filter(ele => ele == e.target.value).length > 0) {
      setTagBtnActive(tagBtnActive.filter(el => el != e.target.value));
      removeParams('tag', currentQuery);
      setSearchParams(searchParams);
    } else {
      setTagBtnActive(prev => [...prev, e.target.value]);
      searchParams.append('tag', currentQuery);
      setSearchParams(searchParams);
    }
  };
  const leftMove = () => {
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft - 400,
      behavior: 'smooth',
    });
  };

  const rightMove = () => {
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + 400,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollRef.current.addEventListener('scroll', () => {
      setScrollX(Math.ceil(scrollRef.current.scrollLeft));
      setMaxScrollX(
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    });
  });

  return (
    <div className="tagWrap">
      {scrollX != 0 ? (
        <button className="prevBtn" onClick={leftMove}></button>
      ) : null}
      {scrollX == maxScrollX ? null : (
        <button className="nextBtn" onClick={rightMove}></button>
      )}

      <div className="tagContainer" ref={scrollRef}>
        {tagData.map((item, idx) => {
          return (
            <button
              type="button"
              key={item.id}
              value={idx}
              className={
                item.className +
                (tagBtnActive.filter(el => el == idx).length > 0
                  ? ' active'
                  : '')
              }
              data-query={item.filter}
              onClick={toggleActive}
            >
              {item.icon}
              {item.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Tag;
