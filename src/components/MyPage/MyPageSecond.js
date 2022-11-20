import React from 'react';
import css from './MyPageSecond.module.scss';

function MyPageSecond() {
  return (
    <div className={css.second}>
      <h1>포지션 스크랩 리스트 (0)</h1>
      <div className={css.wrapper}>
        <i class="fa-regular fa-bookmark" />
        <p className={css.title}>스크랩한 포지션이 없어요.</p>
        <p className={css.desc}>관심있는 포지션을 찾아서 스크랩해보세요!</p>
        <button>포지션 찾아보기</button>
      </div>
    </div>
  );
}

export default MyPageSecond;
