import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import useGetNoticias from '../../hooks/useGetNoticias';




const ItemNoticia = ({noticia}) =>{
    return(
        <div className='itemNoticiaContainer'>
            <div className='itemNoticiaTitleContainer'>
                <p>{noticia.titulo}</p>
            </div> 
            <img style={{width:'100%', objectFit:'cover'}} src={noticia.imagenPrincipal}/>

        </div>
    )
}

export const CarouselNoticias = () => {
    const {noticias} = useGetNoticias() 


    useEffect(() => {
        console.log('noticias: ', noticias)
    }, [noticias])
    

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}

        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {noticias.length>0 ? noticias.map(noticia =>{
            return(
                <SwiperSlide>
                    <ItemNoticia noticia={noticia}/>
                </SwiperSlide>
            )

        }):null}
            {/* <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide>
            <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide>
            <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide>
            <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide>
            <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide>
            <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide> */}
      </Swiper>
    </>
  )
}
