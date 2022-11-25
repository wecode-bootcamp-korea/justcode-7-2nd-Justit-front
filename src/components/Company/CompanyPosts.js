import React from 'react';
import css from './CompanyPosts.module.scss';

function CompanyPosts({ due_date, title, tech_stacks }) {
  return (
    <div className={css.CompanyPostsWrapper}>
      <div className={css.companyCard}>
        <div className={css.companyCardHeader}>
          <span className={css.span}>{due_date}</span>
          <img
            className={css.scrapImg}
            src="https://cdn-icons-png.flaticon.com/512/7073/7073727.png"
          />
        </div>
        <h2 className={css.companyCardTitle}>{title}</h2>
        <ul className={css.ul}>
          {tech_stacks.map(stack => {
            return (
              <li className={css.li} key={stack.id}>
                {stack.tech_stack}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CompanyPosts;
