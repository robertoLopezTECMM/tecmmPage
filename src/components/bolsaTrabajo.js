import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/bolsaTrabajo.css';
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'

class BolsaTrabajo extends Component{




  constructor(props){
    super();
  }

  render(){

    return(

      <div className="divPrincipalBolsaTrabajo">
        <MenuCentral/>
        Componente Bolsa de Trabajo
        <LinksFooter/>
      </div>


    );
  }


}

export default BolsaTrabajo;
