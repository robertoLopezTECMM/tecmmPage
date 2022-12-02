
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withGetScreen} from 'react-getscreen';

import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'

import './styles/valores.css';

class Valores extends Component {

  constructor(props){
    super(props);
    this.state = {
      celular:false
    }
  }

  componentWillMount(){
    if(this.props.isMobile()){
      this.setState({
        celular:true
      })


    }
  }

  render() {

    const celular=this.state.celular
    return(

      <div>

    {celular==true ?(
      <div className="div-principalValores">

        <MenuCentral/>



        <div className="div-contenido-valores">



            <img src="http://tecmm.edu.mx/imagesReact/images/drBienvenida.jpg"/>

            <h1>BIENVENIDA TECMM</h1>

            <p>A toda la comunidad universitaria de la red de Campus en Jalisco del
              Instituto Tecnológico José Mario Molina Pasquel y Henríquez (TecMM) les saludo en

              este año 2019 deseándoles los mejores parabienes y les comunico que con
              el inicio oficial de las actividades de nuestra Institución se vislumbra un
              nuevo panorama en el concierto académico de nuestro estado y de nuestro
              país, la creación del TecMM.</p>

              <p>En lo general hablamos de formar profesionales capacitados para la nueva
                economía del conocimiento y la realidad tecnológica actual y futura de nuestro
                entorno. Para lograr estos objetivos es necesario contar con el compromiso
                de todos quienes integramos esta gran comunidad, estudiantes, padres de
                familia, profesores, investigadores, trabajadores administrativos y directivos,
                un compromiso centrado en la mejora continua, con visión de futuro y una
                gran identidad de responsabilidad social.</p>

              <p>Conozco y sé de la calidad del talento humano con el que contamos, incorpo-
                raremos a los mejores docentes e investigadores para que nuestros estudiantes
                reciban la mejor formación posible, contamos sin duda con el apoyo
                del Tecnológico Nacional de México así como de la Secretaría de Innovación,
                Ciencia y Tecnología y el Gobierno del Estado de Jalisco, para el equipamiento
                de nuestros talleres y laboratorios. Asimismo, para contar con la mejor
                infraestructura educativa de punta, por lo que tenemos también el gran compromiso
                de entregar los mejores resultados.</p>

              <p>Somos una excelente opción de Educación Superior pública, somos
                Tecnológico Mario Molina.</p>

              <p>¡Bienvenidos!</p>

              <p>Atte:</p>
              <h4>DR. HÉCTOR SALGADO RODRÍGUEZ</h4>
              <h4>DIRECTOR GENERAL</h4>
              <br/>
              <br/>


        </div>



        <LinksFooter/>

      </div>

    ):(

        <div className="div-principalValores">

          <MenuCentral/>

          <div className="div-contenido-valores">

            <div className="div-informacion-contenido-valores">
              <h1>BIENVENIDA TECMM</h1>
              <p>A toda la comunidad universitaria de la red de Campus en Jalisco del
                Instituto Tecnológico José Mario Molina Pasquel y Henríquez (TecMM) les saludo en

                este año 2019 deseándoles los mejores parabienes y les comunico que con
                el inicio oficial de las actividades de nuestra Institución se vislumbra un
                nuevo panorama en el concierto académico de nuestro estado y de nuestro
                país, la creación del TecMM.</p>

              <p>En lo general hablamos de formar profesionales capacitados para la nueva
                  economía del conocimiento y la realidad tecnológica actual y futura de nuestro
                  entorno. Para lograr estos objetivos es necesario contar con el compromiso
                  de todos quienes integramos esta gran comunidad, estudiantes, padres de
                  familia, profesores, investigadores, trabajadores administrativos y directivos,
                  un compromiso centrado en la mejora continua, con visión de futuro y una
                  gran identidad de responsabilidad social.</p>

                <p>Conozco y sé de la calidad del talento humano con el que contamos, incorpo-
                  raremos a los mejores docentes e investigadores para que nuestros estudiantes
                  reciban la mejor formación posible, contamos sin duda con el apoyo
                  del Tecnológico Nacional de México así como de la Secretaría de Innovación,
                  Ciencia y Tecnología y el Gobierno del Estado de Jalisco, para el equipamiento
                  de nuestros talleres y laboratorios. Asimismo, para contar con la mejor
                  infraestructura educativa de punta, por lo que tenemos también el gran compromiso
                  de entregar los mejores resultados.</p>

                <p>Somos una excelente opción de Educación Superior pública, somos
                  Tecnológico Mario Molina.</p>

                <p>¡Bienvenidos!</p>

                <p>Atte:</p>
                <h4>DR. HÉCTOR SALGADO RODRÍGUEZ</h4>
                <h4>DIRECTOR GENERAL</h4>
                <br/>
                <br/>


            </div>


            <div className="imagenes-informacion-contenido-valores">

              <img src="http://tecmm.edu.mx/imagesReact/images/drBienvenida.jpg"/>
            </div>

          </div>



          <LinksFooter/>

        </div>
        )}
        </div>
      );
    }
  }


const options = {mobileLimit: 420, tabletLimit: 800}
export default withGetScreen(Valores, options);
