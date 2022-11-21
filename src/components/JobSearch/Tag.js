import { useState, useRef } from 'react';
function Tag(props) {
  let tagData = [
    { id: 1, className: '4.5days', text: '🍯 4.5일제' },
    { id: 2, className: 'homeWork', text: '🏠 재택근무' },
    { id: 3, className: 'flexibleWork', text: '⏰ 유연근무제' },
    { id: 4, className: 'timeWork', text: '🕙 시차출근제' },
    { id: 5, className: 'incentive', text: '💵 인센티브' },
    { id: 6, className: 'snack', text: '☕ 맛있는간식냠냠' },
    { id: 7, className: 'fastResponse', text: '⚡ 지원 응답이 빠른 기업' },
    { id: 8, className: 'macWork', text: '💻 맥북으로개발' },
    { id: 9, className: 'useNickname', text: '👩‍ 닉네임사용' },
    { id: 10, className: 'horizontal', text: '🙌 수평적조직' },
    { id: 11, className: 'investment', text: '💰 누적투자금100억이상' },
    { id: 12, className: 'stockAuction', text: '📈 스톡옵션제공' },
    { id: 13, className: 'bookSupport', text: '📗 도서구입비지원' },
  ];

  const { tagBtnActive, setTagBtnActive } = props;

  const scrollRef = useRef();

  const toggleActive = e => {
    if (tagBtnActive.filter(ele => ele == e.target.value).length > 0) {
      setTagBtnActive(tagBtnActive.filter(el => el != e.target.value));
    } else {
      setTagBtnActive(prev => [...prev, e.target.value]);
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
              onClick={toggleActive}
            >
              {item.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Tag;
