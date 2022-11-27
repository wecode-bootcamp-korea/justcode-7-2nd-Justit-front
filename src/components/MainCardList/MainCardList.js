import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainCardList.scss';
import StackList from './StackList/StackList';

const MainCardList = ({
  images,
  company_name,
  title,
  tech_stacks,
  location,
  career_max,
  career_min,
  view,
}) => {
  const navigate = useNavigate();
  const moveDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="main-cardList-wrapper " onClick={moveDetail}>
      <div className="image-area-wrapper">
        <img src={images[0].image} alt="" />
        <span className="view">{view}</span>
      </div>
      <div className="text-area-wrapper">
        <div className="company-name">{company_name}</div>
        <div className="title">{title}</div>
        <div className="stack">
          {tech_stacks &&
            tech_stacks.map(stack => {
              return <StackList key={stack.id} stack_name={stack.tech_stack} />;
            })}
        </div>
        <span className="company-location">{location}</span>
        <div>
          <span className="company-career">
            경력 {career_min}~{career_max} 년
          </span>
        </div>
      </div>
    </div>
  );
};
export default MainCardList;
