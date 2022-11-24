import React, { useState } from 'react';
import css from './ResumeLink.module.scss';

function ResumeLink() {
  const [plusKey, setPlusKey] = useState(0);
  const [linkDatas, setLinkDatas] = useState([
    {
      iClass: 'fa-brands fa-github',
      labelName: 'Github',
      id: 'Github',
      placeholder: 'https://github.com',
      deleteButton: false,
      key: -1,
    },
    {
      iClass: 'fa-solid fa-user',
      labelName: 'Notion',
      id: 'Notion',
      placeholder: 'https://notion.so',
      deleteButton: false,
      key: -1,
    },
    {
      iClass: 'fa-brands fa-blogger',
      labelName: 'Blog',
      id: 'Blog',
      placeholder: 'https://blog.com',
      deleteButton: false,
      key: -1,
    },
  ]);

  const pushNewLinkData = event => {
    event.preventDefault();
    setPlusKey(plusKey => plusKey + 1);
    const newLinkData = {
      iClass: 'fa-solid fa-user',
      labelName: '링크 제목을 입력해주세요.',
      id: 'new',
      placeholder: 'http://, https://를 포함해 작성해주세요.',
      deleteButton: true,
      key: plusKey,
    };
    setLinkDatas(linkDatas.concat(newLinkData));
  };

  const deleteLinkData = key => {
    setLinkDatas(linkDatas.filter(linkData => linkData.key !== key));
  };

  return (
    <div className={css.link}>
      <p>링크</p>
      {linkDatas.map((linkData, index) => (
        <div className={css.githubWrapper} key={index}>
          <i className={linkData.iClass} />
          <div className={css.github}>
            <label for={linkData.id}>{linkData.labelName}</label>
            <input
              name={linkData.id}
              id={linkData.id}
              type="text"
              placeholder={linkData.placeholder}
            />
            {linkData.deleteButton && (
              <i
                class="fa-solid fa-trash-can"
                id={css.delBtn}
                onClick={event => {
                  event.preventDefault();
                  deleteLinkData(linkData.key);
                }}
              />
            )}
          </div>
        </div>
      ))}
      <button className={css.addBtn} onClick={pushNewLinkData}>
        <i class="fa-solid fa-circle-plus" />
        링크 추가
      </button>
    </div>
  );
}

export default ResumeLink;
