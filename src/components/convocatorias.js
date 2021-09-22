import React, { Component } from 'react';
import Typist from 'react-typist';
import {withGetScreen} from 'react-getscreen'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/convocatorias.css'

class BecasItem extends Component{

  constructor(props){
    super(props);
    this.state={
      visible: false
    }
  }

  onClickMas=()=>{
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render(){
    return(
      <div id="card-beca" class="card" style={{width:"48%"}}>
        <div class="image">
          <img src={this.props.image}/>
        </div>
        <div class="content">
          <div class="header"><a style={{color:"#6D356C"}} href={this.props.link} target="_blank">{this.props.nombre}</a></div>
          <div class="description">
            {ReactHtmlParser(this.props.infoCard)}
          </div>
        </div>
        <div class="extra content">
          <span class="right floated">
            {this.props.fecha}
          </span>
        </div>
      </div>
    );
  }
}

class Convocatorias extends Component {

  constructor(){
    super();
    this.state={

      becasArray:[
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 001/CHAPALA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_001_CHAPALA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 001/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_001_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 002/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_002_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 003/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_003_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 004/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_004_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 005/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_005_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 006/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_006_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 007/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_007_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 001/TALA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_001_TALA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 001/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_001_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 002/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_002_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 003/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_003_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 004/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_004_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 005/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_005_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 006/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_006_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 007/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_007_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 008/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_008_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 009/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_009_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 001/ARANDAS/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_001_ARANDAS_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 001/LA HUERTA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_001_LAHUERTA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 002/LA HUERTA/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_002_LAHUERTA_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 001/ZAPOTLANEJO/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_001_ZAPOTLANEJO_2021.pdf', infoCard:''},
        {nombre: 'CONVOCATORIA PROFESOR ASIGNATURA "A" 002/ZAPOTLANEJO/2021', fecha:'', image:'', link:'./recursos/convocatorias/Convocatoria_002_ZAPOTLANEJO_2021.pdf', infoCard:''},

        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 001/CHAPALA/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_001_CHAPALA_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 001/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_001_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 002/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_002_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 003/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_003_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 004/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_004_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 005/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_005_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 006/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_006_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 007/ZAPOPAN/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_007_ZAPOPAN_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 001/TALA/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_001_TALA_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 001/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_001_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 002/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_002_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 003/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_003_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 004/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_004_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 005/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_005_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 006/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_006_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 007/TAMAZULA/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_007_TAMAZULA_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 001/ARANDAS/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_001_ARANDAS_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 001/LA HUERTA/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_001_LAHUERTA_2021.pdf', infoCard:''},
        {nombre: 'DICTAMEN PROFESOR ASIGNATURA "A" 001/ZAPOTLANEJO/2021', fecha:'', image:'', link:'./recursos/dictamenes/Dictamen_001_ZAPOTLANEJO_2021.pdf', infoCard:''},

      ]
    }
  }

  render() {
    return (
      <div className="div-principalConvocatorias">
        <MenuCentral/>
          <h1 style={{color:"#2DA19A", fontFamily:"Gotham-Ultra", fontSize:"4vh"}}>CONVOCATORIAS</h1>
          <div class="ui link cards">
            {this.state.becasArray.map((it)=>(
              <BecasItem nombre={it.nombre} fecha={it.fecha} image={it.image} link={it.link} infoCard={it.infoCard}/>
            ))}
          </div>
        <LinksFooter/>
      </div>
    );
  }
}

const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Convocatorias, options);
