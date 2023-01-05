import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Card.scss';
import StackList from './StackList/StackList';

const Card = ({
  id,
  img,
  company_name,
  title,
  stack,
  location,
  career_min,
  career_max,
  view,
}) => {
  const [onMouse, setOnMouse] = useState(false);
  const navigate = useNavigate();
  const moveDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div
      className={'main-cardList-wrapper-f'}
      onMouseEnter={() => setOnMouse(true)}
      onMouseLeave={() => setOnMouse(false)}
      onClick={moveDetail}
    >
      <div className="image-area-wrapper">
        <img src={img} alt="" />
        {onMouse && (
          <div className="viewCount">
            <img src="/icons/eye.png" alt="view" width="10px" />
            <span>{view}</span>
          </div>
        )}
      </div>
      <div className="text-area-wrapper">
        <div className="company-name">{company_name}</div>
        <div className="title">{title}</div>
        <div className="stack">
          {stack &&
            stack.map((stack, index) => {
              return <StackList key={index} stack_name={stack.tech_stack} />;
            })}
        </div>
        <p className="company-location">{location}</p>
        <p className="company-career">
          {career_min != 0
            ? `경력 ${career_min}년~${career_max}년`
            : `신입~${career_max}년`}
        </p>
      </div>
    </div>
  );
};
export default Card;
