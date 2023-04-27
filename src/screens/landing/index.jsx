import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CarouselLanding } from '../../components/carouselLanding'
import { CarouselNoticias } from '../../components/carouselNoticias';
import { ColorSeparator } from '../../components/colorSeparator';

import { PrincipalContainer } from '../../components/containers/principalContainer';
import { FooterLinks } from '../../components/footerLinks';
import { NavBar } from '../../components/navBar';

import './index.css'

const NewLanding = () => {
  return (
    <PrincipalContainer>
      <CarouselLanding/>
      <ColorSeparator titleSeparator={'EDUCACIÓN SUPERIOR TECNOLÓGICA'} color={'#54c98f'}/>
      <img style={{width:'100%'}} src="https://developer.tecmm.mx/web-tsj-designs/transitionBanner.jpg"/>
      <ColorSeparator titleSeparator={'NOTICIAS #TECSUPERIORJALISCO'} color={'#ff4d63'}/>
      <CarouselNoticias/>
      <ColorSeparator titleSeparator={'DESCUBRE EL #TECSUPERIORJALISCO'} color={'#308fff'}/>
      <div style={{display:'flex', width:'100%'}}>
        <img style={{width:'25%'}} src='https://developer.tecmm.mx/web-tsj-designs/transparenciaButton.jpg'/>
        <img style={{width:'25%'}}src='https://developer.tecmm.mx/web-tsj-designs/convocatoriasButton.jpg'/>
        <img style={{width:'25%'}}src='https://developer.tecmm.mx/web-tsj-designs/gacetasButton.jpg'/>
        <img style={{width:'25%'}}src='https://developer.tecmm.mx/web-tsj-designs/posgradosButton.jpg'/>
      </div>

      <FooterLinks/>

      <h1 className='textoPrueba1'>Texto de pruebas1</h1>
      <h1 className='textoPrueba2'>Texto de pruebas2</h1>
      <h1 className='textoPrueba3'>Texto de pruebas3</h1>
      <h1 className='textoPrueba4'>Texto de pruebas4</h1>
      <h1 className='textoPrueba5'>Texto de pruebas5</h1>
      <h1 className='textoPrueba6'>Texto de pruebas6</h1>
      <h1 className='textoPrueba7'>Texto de pruebas7</h1>
      <h1 className='textoPrueba8'>Texto de pruebas8</h1>
      <h1 className='textoPrueba9'>Texto de pruebas9</h1>
      <h1 className='textoPrueba10'>Texto de pruebas10</h1>
    </PrincipalContainer>
  )
}
export default NewLanding