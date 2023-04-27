import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const CarouselLanding = () => {
  return (
    <Carousel
        width="100%"
        showIndicators={false}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        autoPlay
        infiniteLoop
        emulateTouch
    >
        <div>
            <img src="https://tecmm.edu.mx/recursos/carousel/admitidos-distancia.jpg" />
            
        </div>
        <div>
            <img src="https://tecmm.edu.mx/recursos/carousel/Becas-patronato.jpg" />
            
        </div>

    </Carousel>
  )
}
