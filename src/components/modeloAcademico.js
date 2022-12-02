import React, { Component } from 'react';
import ModeloAcademicoAnimacion from './modeloAcademicoAnimacion.js'
import LinksFooter from './linksFooter.js'
import MenuCentral from './menuCentral.js'
import './styles/modeloAcademico.css';






class ModeloAcademico extends Component {

  constructor(){
    super();
    this.state={

    }
  }


  render() {

    return (



      <div className="div-principal-modeloAcademico">

        <MenuCentral/>

        <ModeloAcademicoAnimacion/>

        <LinksFooter/>

      </div>
    );
  }
}

export default ModeloAcademico;
