import { React, useEffect, useState } from 'react';
import css from './Bookmark.module.scss';
import { BASE_URL } from '../../config';

// 1. Aside에서 넘겨주는 key값과 AsideDetail에서
// 필요한 post_id값이 같은지 확인한 후 같으면 사용하기
// 2. scrap에 데이터를 저장한 후 post_id에 맞는 값 가져와서 넘겨주기
// 3. 해당 url path parameter값이 post_id와 같으면 그걸 가져와서 넘겨주기

function Bookmark() {
  const [scrap, setScrap] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/scrap`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setScrap(result.data));
  }, []);
  const handleDelete = index => {
    // event.preventDefault();
    const token = localStorage.getItem('token');
    fetch(`${BASE_URL}/scrap`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        posts_id: scrap[index].post_id,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'DELETE_SCRAP_SUCCESSFULLY') {
          // localStorage.setItem('token', '');
          alert('스크랩을 삭제하였습니다!');
          document.location.href = '/mypage/bookmark';
        }
      });
  };

  return (
    <div className={css.bookmark}>
      <h1>포지션 스크랩 리스트 ({scrap.length})</h1>
      {scrap.length > 0 ? (
        <div className={css.bookmarkWrapper}>
          {scrap.map(
            ({ images, title, company_name, stack_list, posts_id }, index) => (
              <div className={css.mainCardListWrapper} key={posts_id}>
                <div className={css.imageAreaWrapper}>
                  <img src={images} alt="이미지" />
                </div>
                <div className={css.textAreaWrapper}>
                  <div className={css.companyName}>{company_name}</div>
                  <div className={css.title}>{title}</div>
                  <div className={css.stack}>{stack_list.join(', ')}</div>
                </div>
                <div className={css.btnWrapper}>
                  <button
                    onClick={event => {
                      event.preventDefault();
                      handleDelete(index);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className={css.wrapper}>
          <i class="fa-regular fa-bookmark" />
          <p className={css.title}>스크랩한 포지션이 없어요.</p>
          <p className={css.desc}>관심있는 포지션을 찾아서 스크랩해보세요!</p>
          <button>포지션 찾아보기</button>
        </div>
      )}
    </div>
  );
}

export default Bookmark;
