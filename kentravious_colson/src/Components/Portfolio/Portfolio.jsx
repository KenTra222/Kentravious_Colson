import React from 'react'
import portfolio from "../data/portfolio.js"
import { PortfolioItem } from '../PortfolioItem/PortfolioItem';
import './portfolio.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export const Portfolio = () => {
  return (
    
    <div className='portfolio_wrapper'>

          <div className='portfolio'>
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

              {portfolio.map(project => (
                <SwiperSlide>
                <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                link={project.link}
                />
                </SwiperSlide>
                ))}

                </Swiper>
          </div>
    </div>
            
  )
}
