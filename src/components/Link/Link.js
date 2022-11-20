import React, { useState } from 'react';
import css from './Link.module.scss';

function Link() {
  const [plusKey, setPlusKey] = useState(0);
  const [linkDatas, setLinkDatas] = useState([
    {
      iClass: 'fa-brands fa-github',
      labelName: 'Github',
      id: 'github',
      placeholder: 'https://github.com',
      deleteButton: false,
      key: -1,
    },
  ]);

  const pushNewLinkData = event => {
    event.preventDefault();
    setPlusKey(plusKey => plusKey + 1);
    const newLinkData = {
      iClass: 'fa-brands fa-github',
      labelName: 'new',
      id: 'new',
      placeholder: 'https://new.com',
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
              <button
                onClick={event => {
                  event.preventDefault();
                  deleteLinkData(linkData.key);
                }}
              >
                삭제하기
              </button>
            )}
          </div>
        </div>
      ))}
      <button onClick={pushNewLinkData}>추가하기</button>
    </div>
  );
}

export default Link;
