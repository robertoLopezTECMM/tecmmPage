import React, { Component } from 'react';


import './styles/patentesInvestigacion.css';

import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'

class PatentesItem extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.expediente}</td>
        <td>{this.props.fecha}</td>
        <td>{this.props.tipo}</td>
        <td>{this.props.aplicacion}</td>
        <td>{this.props.titulo}</td>
      </tr>
    );
  }
}


class Landing extends Component {

  constructor(){
    super();
    this.state={
      patentesArray:[
        {expediente:"MX/a/2018/002983", fecha:"09/03/2018", tipo:"Patente", aplicacion:"Aplicación farmacéutica", titulo:"suspensión antiviral potencializadora para tratamiento de fibras y su metodo de preparacion"},
        {expediente:"MX/a/2018/002984", fecha:"09/03/2018", tipo:"Patente", aplicacion:"Aplicación farmacéutica", titulo:"Formulación para Solidificar Sangre de Origen Animal"},
        {expediente:"MX/a/2018/002985", fecha:"09/03/2018", tipo:"Patente", aplicacion:"Aplicación farmacéutica", titulo:"Complejos Bimetálicos con Cationes Divalentes con Efecto Inhibidor de la Replicación del VHS"},
        {expediente:"MX/a/2018/003831", fecha:"27/03/2018", tipo:"Patente", aplicacion:"Sector de la Construcción", titulo:"Sistema de Bloques para Construcción Modular"},
        {expediente:"MX/u/2018/000172", fecha:"27/03/2018", tipo:"Modelo de Utilidad", aplicacion:"Sector Salud", titulo:"Prótesis Mecánica de Mano Controlada por Señales EGG"},
        {expediente:"MX/u/2018/000170", fecha:"27/03/2018", tipo:"Modelo de Utilidad", aplicacion:"Sector Industrial", titulo:"Dispositivo para Inmovilizar Ruedas de Motocicleta"},
        {expediente:"MX/u/2018/000183", fecha:"03/04/2018", tipo:"Modelo de Utilidad", aplicacion:"Sector Salud", titulo:"Prótesis Mecánica de Pie"},
        {expediente:"MX/u/2018/000171", fecha:"27/03/2018", tipo:"Modelo de Utilidad", aplicacion:"Sector Salud", titulo:"Dispositivo de Traducción de Lenguaje Subvocal"},
        {expediente:"MX/f/2018/000801", fecha:"16/03/2018", tipo:"Diseño Industrial", aplicacion:"Sector Industrial", titulo:"Modelo Industrial de Contenedor"},
        {expediente:"MX/f/2018/000802", fecha:"16/03/2018", tipo:"Diseño Industrial", aplicacion:"Sector Industrial", titulo:"Modelo Industrial de Vehículo"},
        {expediente:"MX/f/2018/000803", fecha:"16/03/2018", tipo:"Diseño Industrial", aplicacion:"Sector Industrial", titulo:"Modelo Industrial de Pulsera"},
        {expediente:"MX/a/2017/009670", fecha:"26/03/2018", tipo:"Patente", aplicacion:"Aplicación farmacéutica", titulo:"Proceso de Síntesis de un Agente Entrecruzante para la Fabricación de Hidrogeles"},
        {expediente:"MX/a/2016/009264", fecha:"15/07/2016", tipo:"Patente", aplicacion:"Aplicación farmacéutica", titulo:"Composición Cosmética para la Exfoliación Química con Acción Controlada de Fenol"},
        {expediente:"MX/u/2016/000187", fecha:"10/05/2016", tipo:"Modelo de Utilidad", aplicacion:"Sector Salud", titulo:"Dispositivo de Rehabilitación de Extremidades con Accesorios Intercambiables y Control Electrónico"},
        {expediente:"MX/u/2016/000197", fecha:"20/05/2016", tipo:"Modelo de Utilidad", aplicacion:"Sector Industrial", titulo:"Sistema de Unión Mecánico Basado en Pernos Ensamblados para Dispositivos Mecánicos Móviles"},
        {expediente:"MX/f/2016/003002", fecha:"28/09/2016", tipo:"Diseño Industrial", aplicacion:"Sector Industrial", titulo:"Modelo Industrial de Cubículo para Oficina"},
        {expediente:"MX/f/2016/001810", fecha:"09/06/2016", tipo:"Diseño Industrial", aplicacion:"Sector Industrial", titulo:"Modelo Industrial de Portal"},
        {expediente:"MX/a/2014/002997 ", fecha:"13/03/2014", tipo:"Patente", aplicacion:"Sector Salud", titulo:"Dispositivo Rehabilitador de Tobillos Lesionados"},
      ]
    }
  }

  render(){
    return (

      <div className="div-principal-patentesInvestigacion">

        <MenuCentral/>

        <div className="div-patentes">
          <table>
            <tr>
              <th>Expediente</th>
              <th>Fecha</th>
              <th>Tipo<br/>de Solicitud</th>
              <th>Sector de<br/>Aplicación Industrial</th>
              <th>Título</th>
            </tr>

            {this.state.patentesArray.map((it)=>(
              <PatentesItem expediente={it.expediente} fecha={it.fecha} tipo={it.tipo} aplicacion={it.aplicacion} titulo={it.titulo}/>
            ))}
          </table>
        </div>


        <LinksFooter/>

      </div>
    );
  }
}



export default Landing;
