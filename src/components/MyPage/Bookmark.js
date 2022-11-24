import { React, useEffect, useState } from 'react';
import css from './Bookmark.module.scss';

function Bookmark() {
  const [scrap, setScrap] = useState([]);
  useEffect(() => {
    // const token = localStorage.getItem('token');
    fetch('http://localhost:8000/mypage/scrap', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjY5MTc3NDEwfQ.-a6NQWcjWgwOF-Z5Z7HSM2NwhKCxTVkuFdCxxA1khDE',
      },
    })
      .then(response => response.json())
      .then(result => setScrap(result.data));
  }, []);

  const handleDelete = event => {
    event.preventDefault();
    // const token = localStorage.getItem('token'); 실제로는 이걸로 작업해야함
    fetch('http://localhost:8000/mypage/scrap', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjY5MTc3NDEwfQ.-a6NQWcjWgwOF-Z5Z7HSM2NwhKCxTVkuFdCxxA1khDE',
      },
      body: JSON.stringify({
        posts_id: scrap[0].post_id,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'DELETE_SCRAP_SUCCESSFULLY') {
          // localStorage.setItem('token', '');
          alert('스크랩을 삭제하였습니다!');
          document.location.href = '/MyPage/Bookmark';
        }
      });
  };

  return (
    <div className={css.bookmark}>
      <h1>포지션 스크랩 리스트 (0)</h1>
      <div className={css.wrapper}>
        <i class="fa-regular fa-bookmark" />
        <p className={css.title}>스크랩한 포지션이 없어요.</p>
        <p className={css.desc}>관심있는 포지션을 찾아서 스크랩해보세요!</p>
        <button>포지션 찾아보기</button>
      </div>
      {/* 공고에 관한 유일한 값을 받아옴 key={id} / stack list에 대한 map 실행*/}
      <div className={css.bookmarkWrapper}>
        {scrap.map(({ images, title, company_name, stack_list, posts_id }) => (
          <div className={css.mainCardListWrapper} key={posts_id}>
            <div className={css.imageAreaWrapper}>
              <img src={images} alt="이미지" />
            </div>
            <div className={css.textAreaWrapper}>
              <div className={css.companyName}>{company_name}</div>
              <div className={css.title}>{title}</div>
              <div className={css.stack}>
                {stack_list + `,`}
                {/* {stack_list.map(({ index, value }) => (
                <span key={index}>{value}</span>
              ))} */}
              </div>
            </div>
            <div className={css.btnWrapper}>
              <button onClick={handleDelete}>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmark;
