import React, { useEffect } from 'react';
import './Card.scss';
import StackList from './StackList/StackList';

const Card = ({ img, company_name, title, stack, location, career }) => {
  // useEffect(() => {
  //   fetch('/data/CardListData.json')
  //     .then(res => res.json())
  //     .then(res => setCardList(res.data));
  // }, []);
  return (
    <div className={'main-cardList-wrapper '}>
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
export default Card;
