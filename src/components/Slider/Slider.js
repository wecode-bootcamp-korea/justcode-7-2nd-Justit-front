import React, { Component, useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../../slick.scss';
import '../../slick-theme.scss';
import MainCardList from '../MainCardList/MainCardList';

const SimpleSlider = () => {
  const [cardList, setCardList] = useState([]); //카드리스트 데이터
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  // useEffect(() => {
  //   fetch('http://localhost:8000/')
  //     .then(res => res.json())
  //     .then(res => setCardList(res.randomPosts));
  // }, []);

  return (
    <div>
      <Slider {...settings}>
        {cardList.map((cardList, index) => {
          return (
            cardList.type === 'long' && (
              <MainCardList
                key={index}
                img={cardList.img}
                company_name={cardList.company_name}
                title={cardList.title}
                stack={cardList.stack}
                location={cardList.location}
                career={cardList.career}
                popular={cardList.popular}
              />
            )
          );
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
