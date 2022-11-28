import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../../slick-image.scss';
import '../../slick-theme-image.scss';
import './ImageSlider.scss';

const ImageSlider = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [imageList, setImageList] = useState([]); //이미지리스트 데이터
  //롱 슬라이더 fetch
  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(res => setImageList(res.randomPosts));
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {imageList.map(imageList => {
          return (
            <div className="image-slider-wrapper">
              <img
                className="image-slider-img"
                src={imageList.images[0].image}
                alt={imageList.company_name}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ImageSlider;
