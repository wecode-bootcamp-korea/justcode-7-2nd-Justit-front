import { useRef } from 'react';
function Tag(props) {
  let tagData = [
    { id: 1, className: '4.5days', icon: '🍯 ', text: '4.5일제' },
    { id: 2, className: 'homeWork', icon: '🏠 ', text: '재택근무' },
    { id: 3, className: 'flexibleWork', icon: '⏰ ', text: '유연근무제' },
    { id: 4, className: 'timeWork', icon: '🕙 ', text: '시차출근제' },
    { id: 5, className: 'incentive', icon: '💵 ', text: '인센티브' },
    { id: 6, className: 'snack', icon: '☕ ', text: '맛있는간식냠냠' },
    {
      id: 7,
      className: 'fastResponse',
      icon: '⚡ ',
      text: '지원 응답이 빠른 기업',
    },
    { id: 8, className: 'macWork', icon: '💻 ', text: '맥북으로개발' },
    { id: 9, className: 'useNickname', icon: '👩‍ ', text: '닉네임사용' },
    { id: 10, className: 'horizontal', icon: '🙌 ', text: '수평적조직' },
    {
      id: 11,
      className: 'investment',
      icon: '💰 ',
      text: '누적투자금100억이상',
    },
    { id: 12, className: 'stockAuction', icon: '📈 ', text: '스톡옵션제공' },
    { id: 13, className: 'bookSupport', icon: '📗 ', text: '도서구입비지원' },
  ];

  const {
    tagBtnActive,
    setTagBtnActive,
    setSearchParams,
    searchParams,
    removeParams,
  } = props;

  const scrollRef = useRef();

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
      left: scrollRef.current.scrollLeft - scrollRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const rightMove = () => {
    scrollRef.current.scrollTo({
      left: scrollRef.current.scrollLeft + scrollRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };
  return (
    <div className="tagWrap">
      {scrollRef.current?.scrollLeft ? (
        <button className="prevBtn" onClick={leftMove}></button>
      ) : null}
      {scrollRef.current?.scrollLeft ? null : (
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
              data-query={item.text}
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
