
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import ModeloAcademicoAnimacion from './modeloAcademicoAnimacion.js'
import LinksFooter from './linksFooter.js'

import './styles/modeloAcademicoMovil.css';





class ModeloAcademicoMovil extends Component {

  constructor(){
    super();
    this.state={

    }
  }


  render() {

    return (



      <div className="div-principal-modeloAcademicoMovil">
        <MenuCentral/>


        <div className="div-slides-ModeloAcademicoMovil">
          <img id="hoja-1" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-1.png'}/>
          <img id="hoja-2" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-2.png'}/>
          <img id="hoja-3" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-3.png'}/>
          <img id="hoja-4" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-4.png'}/>
          <img id="hoja-5" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-5.png'}/>
          <img id="hoja-6" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-6.png'}/>
          <img id="hoja-7" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-7.png'}/>
          <img id="hoja-8" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-8.png'}/>
          <img id="hoja-9" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-9.png'}/>
          <img id="hoja-10" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-10.png'}/>
          <img id="hoja-11" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-11.png'}/>
          <img id="hoja-12" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-12.png'}/>
          <img id="hoja-13" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-13.png'}/>
          <img id="hoja-14" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-14.png'}/>
          <img id="hoja-15" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-15.png'}/>
          <img id="hoja-16" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-16.png'}/>
          <img id="hoja-17" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-17.png'}/>
          <img id="hoja-18" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-18.png'}/>
          <img id="hoja-19" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-19.png'}/>
          <img id="hoja-20" className="img-modeloAcademico-slide" src={'http://tecmm.edu.mx/imagesReact/images/hoja-20.png'}/>
        </div>


        <LinksFooter/>

      </div>
    );
  }
}

export default ModeloAcademicoMovil;
