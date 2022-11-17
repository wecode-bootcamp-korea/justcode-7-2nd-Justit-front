import React from 'react';
import './MainCardList.scss';
import StackList from './StackList/StackList';

const MainCardList = ({
  type,
  img,
  company_name,
  title,
  stack,
  location,
  career,
}) => {
  return (
    <div className={'main-cardList-wrapper ' + type}>
      <div className="image-area-wrapper">
        <img src={img} alt="" />
      </div>
      <div className="text-area-wrapper">
        <div className="company-name">{company_name}</div>
        <div className="title">{title}</div>
        <div className="stack">
          {stack &&
            stack.map((stack, index) => {
              return <StackList key={index} stack_name={stack.name} />;
            })}
        </div>
        <span className="company-location">{location}</span>
        <span className="company-career">{career}</span>
      </div>
    </div>
  );
};
export default MainCardList;
