import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/contraloriaSocial.css'






class ContraloriaSocial extends Component{

    constructor(props){
      super(props);
      this.state={
        carrerasArray:null,
      }

    }






  render(){
    return(
      <div className="div-principal-contraloriaSocial">

      <MenuCentral/>

      <div className="div-contraloriaSocial">

        <img src="http://tecmm.edu.mx/imagesReact/images/contraloriaSocial/BotonContraloria.jpg"/>

        <div className="div-documentosContraloria">

          <a href="http://tecmm.edu.mx/documentos/contraloriaSocial/Guia-Contraloria-Social.pdf">
            <button className="button-enlaces">GUÍA OPERATIVA DE CONTRALORÍA SOCIAL</button>
          </a>

          <a href="http://tecmm.edu.mx/documentos/contraloriaSocial/proceso-quejas.pdf">
            <button className="button-enlaces">PROCEDIMIENTO PARA QUEJAS, DENUNCIAS O PETICIONES</button>
          </a>

          <a href="http://tecmm.edu.mx/documentos/contraloriaSocial/formato-quejas,denuncias,sugerencias-contraloria-social.pdf">
            <button className="button-enlaces">QUEJAS, DENUNCIAS O PETICIONES</button>
          </a>

          <a href="http://tecmm.edu.mx/documentos/contraloriaSocial/que-es-prodep.pdf">
            <button className="button-enlaces">¿QUÉ ES EL PRODEP?</button>
          </a>

          <a href="http://tecmm.edu.mx/documentos/contraloriaSocial/esquema-contraloria-social.pdf">
            <button className="button-enlaces">ESQUEMA DE CONTRALORIA SOCIAL</button>
          </a>

          <a href="http://tecmm.edu.mx/documentos/contraloriaSocial/programa-anual.pdf">
            <button className="button-enlaces">PROGRAMA ANUAL 2020</button>
          </a>

          <a href="http://tecmm.edu.mx/documentos/contraloriaSocial/lineamientos-contraloria-social.pdf">
            <button className="button-enlaces">LINEAMIENTOS DE CONTRALORIA SOCIAL</button>
          </a>

          <a href="https://dpii.acad-tecnm.mx/prodep/">
            <button className="button-enlaces">ENLACE<br/>TECNM<br/><br/></button>
          </a>

          <a href="http://tecmm.edu.mx/documentos/contraloriaSocial/Manual-2022.pdf">
            <button className="button-enlaces">MANUAL DE USUARIO<br/><br/></button>
          </a>

        </div>



        <div className="div-pregunta">
          <h1>¿Qué es la Contraloría Social?</h1>
          <p>La Contraloría Social es un grupo de beneficiarios, que, de manera organizada, verificaran el cumplimiento de las metas y la correcta aplicación de los recursos públicos asignados al Programa PRODEP.</p>
        </div>

        <div className="div-pregunta">
          <h1>¿Qué vigila la contraloría Social?</h1>
            <p>
            <ul>
              <li>Que se difunda la información suficiente, veraz y oportuna sobre la operación del programa.</li>
              <li>Que los otorgamientos de los apoyos sean con calidad, calidez, eficiente, eficaz, oportuno y de manera transparente.</li>
              <li>Que las autoridades competentes brinden atención a las quejas o denuncias, relacionadas al programa.</li>
            </ul>
            </p>

        </div>

        <div className="div-pregunta">
          <h1>¿Qué es un Comité de Contraloría Social?</h1>
          <p>Las formas de organización social constituidas por los beneficiarios referidas en el artículo 67 del Reglamento de la Ley General de Desarrollo Social, que llevan a cabo el seguimiento, supervisión y vigilancia de la ejecución, cumplimiento de las metas y acciones comprometidas, así como de la correcta aplicación de los recursos asignados a los mismos.</p>
        </div>

        <div className="div-pregunta">
          <h1>Objetivo de los Comités de Contraloría Social.</h1>
          <p>Colaborar en forma VOLUNTARIA ACTIVA y de manera representativa con organismos oficiales, seguimiento, supervisión y vigilancia de la ejecución, cumplimiento de las metas y acciones comprometidas en el Programa, así como de la correcta aplicación de los recursos asignados.</p>

        </div>


        <div className="div-pregunta">
          <h1>¿Cuáles son las funciones que deberán de cumplir los Comités de Contraloría Social?</h1>
          <p>
            <ul>
              <li>Representar los intereses y actuar como grupo de enlace entre la comunidad, las autoridades locales y autoridades centrales.</li>
              <li>Vigilar el adecuado manejo de los recursos financieros y que cumplan con el objetivo para el que fueron otorgados.</li>
              <li>Capturar y canalizar las Quejas o Denuncias a las áreas correspondientes.</li>
              <li>Reportar cualquier anomalía que se presente durante el proceso de la ejecución y culminación de los recursos Financieros.</li>
            </ul>
          </p>

        </div>

        <div className="div-pregunta">
          <h1>Medidas para promover la equidad de género entre hombres y mujeres en la integración de los Comités.</h1>
          <p>Dentro del Programa para el Desarrollo Profesional Docente (PRODEP) mismo que se rige por Reglas de operaciones emitidas por la Secretaría de Hacienda y Crédito Público, donde menciona en el objetivo para el Tipo superior, “Profesionalizar a las/los PTC, ofreciendo las mismas oportunidades a mujeres y hombres para acceder a los apoyos que otorga el Programa, a fin de que alcancen las capacidades de investigación-docencia, desarrollo tecnológico e innovación y con responsabilidad social…”</p>
          <p>Por lo anterior, podemos mencionar que para la formación de los comités deberán de ser de manera equitativa.</p>
        </div>




      </div>


      <LinksFooter/>

      </div>
    );
  }
}


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(ContraloriaSocial, options);
