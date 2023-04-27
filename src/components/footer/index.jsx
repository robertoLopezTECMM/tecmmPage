import React from 'react'
import './index.css'

export const Footer = () => {
  return (
    <div style={{borderTop:'0.5vh solid white'}}>
        <div className='ubicationContainer'>
          <div className='addressAndRedesContainer'>
            <div className='addressContainer'>
              <h3>TECNOLÓGICO SUPERIOR DE JALISCO</h3>
              <h3>DIRECCIÓN GENERAL</h3>
              <p>Camino Arenero 1101, Col. El Bajio</p>
              <p>Zapopan, Jalisco, C.P. 45017</p>
            </div>


            <div className='redesImgContainer'>
              <img src="https://developer.tecmm.mx/web-tsj-designs/redes.png" style={{ width: '60%' }}/>
            </div>
            
            <div className='visualCapabilitiesContainer'>
              <p> Página con capacidad lectora de pantalla para personas con discapacidad visual o con visión reducida a través de ChromeVox (Click Aquí) </p>
            </div>
          </div>
          <iframe className="direccionMap" frameborder="0"  allowfullscreen="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1866.1014843087728!2d-103.47415072403652!3d20.70198099652712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a9ef16c67019%3A0x110c6c4b5a95e2ba!2sTecnol%C3%B3gico%20Mario%20Molina!5e0!3m2!1ses!2smx!4v1575998888911!5m2!1ses!2smx"></iframe>
        </div>
        <img src="https://developer.tecmm.mx/web-tsj-designs/footerBanner.jpg" style={{ width: '100%'}}/>
    </div>
  )
}
