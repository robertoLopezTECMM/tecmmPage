import React, { Component } from 'react';
import MenuCentral from './menuCentral.js';
import LinksFooter from './linksFooter.js';
import './styles/transparencia.css';


class Transparencia extends Component{
    render(){
        return(
          <div className="transparenciaContainer">
                <MenuCentral/>    
                <h1>TRANSPARENCIA</h1>
                <div className='plataformas'>
                  <a href={'https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml?idEntidad=MTQ=&idSujetoObligado=MTM3OTE=#inicio'} className='plataforma'><span>Plataforma Nacional de Transparencia (SIPOT)</span></a>
                  <a href='https://transparencia.info.jalisco.gob.mx/transparencia/organismo/312' className='plataforma'>Plataforma Estatal de Transparencia</a>   
                  <a href='https://transparencia.jalisco.gob.mx/informacion_fundamental/281' className='plataforma'>Sistema Integral de Transparencia</a>      
                </div>       
                <LinksFooter/>   
          </div>
        );
      }
}
export default Transparencia;