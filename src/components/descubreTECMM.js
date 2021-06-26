import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/descubreTECMM.css';


class DescubreTECMM extends Component{

  constructor(props){
    super();
  }

  render(){
    return(


      <div className="div-principal-cardsInteres">
        <h1> DESCUBRE EL TECMM </h1>
        <div className="div-imagen-cards">


            <a href="/Convocatorias">

              <img src='http://tecmm.edu.mx/imagesReact/images/descubreTECMM/convocatorias.jpg' style={{marginRight:"2px"}} className="img-card"/>

            </a>

            <a target="_blank" href="http://tecmm.edu.mx/documentos/2020/Gaceta-TecMM-2019.pdf">
              <img src='http://tecmm.edu.mx/imagesReact/images/descubreTECMM/Gaceta-TECMM.jpg' style={{marginRight:"2px"}} className="img-card"/>
            </a>



            <a target="_blank" href="http://tecmm.edu.mx/Carrera/Ingenieria-en-Gestion-Empresarial-en-Linea">
              <img src='http://tecmm.edu.mx/imagesReact/images/descubreTECMM/Formacion-Distancia.jpg' style={{marginRight:"2px"}} className="img-card"/>
            </a>

            <a href="http://www.posgrado.tecmm.edu.mx/">
              <img src='http://tecmm.edu.mx/imagesReact/images/descubreTECMM/Posgrados.jpg' className="img-card"/>
            </a>

        </div>
      </div>

    );
  }


}

export default DescubreTECMM;
