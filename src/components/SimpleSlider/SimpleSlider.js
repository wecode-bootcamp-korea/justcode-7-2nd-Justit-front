import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../../slick.scss';
import '../../slick-theme.scss';
import MainCardList from '../MainCardList/MainCardList';

const SimpleSlider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  const [cardList, setCardList] = useState([]); //카드리스트 데이터
  //롱 슬라이더 fetch
  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(res => setCardList(res.responseFastCompany));
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {cardList.map(cardList => {
          return (
            <MainCardList
              key={cardList.id}
              id={cardList.id}
              images={cardList.images[0].image}
              company_name={cardList.company_name}
              title={cardList.title}
              tech_stacks={cardList.tech_stacks}
              location={cardList.location}
              career_min={cardList.career_min}
              career_max={cardList.career_max}
              type={cardList.type}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
