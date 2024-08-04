import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import styles from '../styles/Home.module.css';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      },
      infinite: true,
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const HomePage: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

useEffect(() => {
  setIsReady(true);
}, []);

if (!isReady) return null;

return (
  <Slider {...settings}>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </Slider>
);
};

export default HomePage;
