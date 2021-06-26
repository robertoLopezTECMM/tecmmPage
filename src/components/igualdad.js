import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {withGetScreen} from 'react-getscreen'
import Typist from 'react-typist';
import './styles/igualdad.css';
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'


class Igualdad extends Component {

  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return (

      <div className="div-principal-igualdad">

        <MenuCentral/>

        <div className="div-portada-igualdad">
          <h1>
            <Typist> SISTEMA DE GESTIÓN DE IGUALDAD DE GÉNERO Y NO DISCRIMINACIÓN </Typist>
          </h1>
        </div>

        <div className="div-botones-igualdad">
          <ul className="ul-botones-igualdad">

            <li className="li-botones-igualdad">
              <Link
                activeClass="active"
                to="codigo-de-etica-y-conducta-del-tecmm"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div>
                  CÓDIGO DE ÉTICA Y CONDUCTA
                </div>
              </Link>
            </li>

            <li className="li-botones-igualdad">
              <Link
                activeClass="active"
                to="subcomite-de-etica"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                  <div>
                    SUBCOMITÉ DE ÉTICA
                  </div>
              </Link>
            </li>

            <li className="li-botones-igualdad">
              <Link
                activeClass="active"
                to="asesores-y-consejeros"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                  <div>
                    ASESORES Y CONSEJEROS
                  </div>
              </Link>
            </li>

            <li className="li-botones-igualdad">
              <Link
                activeClass="active"
                to="politica-de-igualdad-laboral"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div>
                  POLÍTICA DE IGUALDAD LABORAL
                </div>
              </Link>
            </li>

            <li className="li-botones-igualdad">
              <Link
                activeClass="active"
                to="cero-tolerancia"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div>
                  CERO TOLERANCIA
                </div>
              </Link>
            </li>


            <li className="li-botones-igualdad">
              <Link
                activeClass="active"
                to="lenguaje-incluyente"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <div>
                  LENGUAJE INCLUYENTE
                </div>
              </Link>
            </li>

            <li className="li-botones-igualdad">
              <a className="link-documentosDeApoyo" href="https://www.tecnm.mx/sgeg">
                <div>
                  DOCUMENTOS DE APOYO
                </div>
              </a>
            </li>

          </ul>
        </div>

        <div className="div-secciones-igualdad">
          <img src="http://tecmm.edu.mx/imagesReact/images/igualdad/1.jpg" id="codigo-de-etica-y-conducta-del-tecmm"/>
          <img src="http://tecmm.edu.mx/imagesReact/images/igualdad/2.jpg" id="subcomite-de-etica"/>
          <img src="http://tecmm.edu.mx/imagesReact/images/igualdad/AsesoresYConsejeros.jpg" id="asesores-y-consejeros"/>

          <img src="http://tecmm.edu.mx/imagesReact/images/igualdad/3.jpg" id="politica-de-igualdad-laboral"/>
          <img src="http://tecmm.edu.mx/imagesReact/images/igualdad/4.jpg" id="cero-tolerancia"/>
          <img src="http://tecmm.edu.mx/imagesReact/images/igualdad/5.jpg" id="lenguaje-incluyente"/>
        </div>





        <LinksFooter/>

      </div>
    );
  }
}


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Igualdad, options);
