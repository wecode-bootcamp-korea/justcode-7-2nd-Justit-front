import React from 'react';
import css from './DetailCardList.module.scss';
import StackList from '../MainCardList/StackList/StackList';

function DetailCardList({
  images,
  company_name,
  title,
  tech_stacks,
  location,
  career_min,
  career_max,
  view,
}) {
  return (
    <div className={css.mainCardListWrapper}>
      <div className={css.imageAreaWrapper}>
        <img src={images[0].image} alt="" />
        <span>{view}</span>
      </div>
      <div className={css.textAreaWrapper}>
        <div className={css.companyName}>{company_name}</div>
        <div className={css.title}>{title}</div>
        <div className={css.stack}>
          {tech_stacks.map(stack => {
            return <StackList key={stack.id} stack_name={stack.tech_stack} />;
          })}
        </div>
        <span className={css.companyLocation}>{location}</span>
        <span className={css.companyCareer}>
          {career_min}~{career_max}
        </span>
      </div>
    </div>
  );
}

export default DetailCardList;
