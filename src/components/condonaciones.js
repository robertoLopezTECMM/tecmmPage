import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/condonaciones.css'



class Condonaciones extends Component{

    constructor(props){
      super(props);
      this.state={
        carrerasArray:null,
        logeado:false,
        username: '',
        password: '',
      }

    }


  
  

  


  render(){

    return(
      <div className="CondonacionesContainer">

      <MenuCentral/>

      <div >
        <h1>CONDONACIONES</h1>


        
            <p> <a id="resaltado">EL INSTITUTO TECNOLÓGICO JOSÉ MARIO MOLINA PASQUEL Y HENRÍQUEZ</a> convoca a las y los estudiantes del instituto a participar en el otorgamiento de una condonación para continuar sus estudios en el nivel de licenciatura para el semestre <a id="resaltado">Agosto 2020 - Enero 2021</a>,  para obtener dichas condonaciones, los solicitantes deberán cumplir los requisitos que en la convocatoria se describen. </p>
            <div className="enlacesCondonaciones">
                <a target="_blank" href="http://tecmm.edu.mx/convocatorias(PDF)/convocatoria-condonaciones-ago.2020-ene.2021.pdf">Convocatoria <i class="file alternate icon"></i></a><br/>
                <a target="_blank" href="http://tecmm.edu.mx/convocatorias(PDF)/adendum-convocatoria-condonaciones-ago.2020-ene.2021.pdf">Adendum <i class="file alternate icon"></i></a><br/>
                <a target="_blank" href="http://201.144.18.7/CONDONACIONES/">Plataforma de Registro <i class="linkify icon"></i></a>
            </div>
        

        

        </div>


      <LinksFooter/>

      </div>
    );
  }
}


export default Condonaciones;
