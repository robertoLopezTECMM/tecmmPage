import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import './styles/rectoria.css'
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'


class RectoriaItem extends Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <div id="card-rectoriaItem" class="card">
        <div class="image">
          <img src={this.props.image}/>
        </div>
        <div class="content">
          <div id="nombre" class="header">{this.props.nombre}</div>
          <div class="meta">
            <a id="puesto">{this.props.cargo}</a>
          </div>
          <div id="correo" class="description">
            <i class="envelope icon"></i>
            <a target="_blank" href={this.props.mailTo}>{this.props.correo}</a>
          </div>
        </div>
        <div id="contacto" class="extra content">
          <span>
            <i class="phone icon"></i>
            {this.props.telefono}
          </span>
        </div>
      </div>
    );
  }
}

class Rectoria extends Component {

  constructor(){
    super();
    this.state={
      directores:[
       // {nombre: 'Hellen García Retamoza', image:"./recursos/img/directores/helen_garcia.jpg", cargo: 'Directora de Planeación y Desarrollo', telefono:"38-84-94-70", correo:'hellen.garcia@tecmm.edu.mx', mailTo:'mailto:hellen.garcia@tecmm.edu.mx'},
        {nombre: 'Paula Ortíz Rojas', image:"./recursos/img/directores/paula_ortiz.jpg", cargo: 'Director de Área Académica, Investigación e Innovación', telefono:"38-84-94-70", correo:'paula.ortiz@tecmm.edu.mx', mailTo:'mailto:director.academico@tecmm.edu.mx'},
        {nombre: 'Antonio Anguiano Apodaca', image:"./recursos/img/directores/antonio_anguiano.jpg", cargo: 'Director de Extensión y Vinculación', telefono:"38-84-94-70", correo:'antonio.anguiano@tecmm.edu.mx', mailTo:'mailto:antonio.anguiano@tecmm.edu.mx'},
        {nombre: 'Gerardo Reyes Chávez', image:"./recursos/img/directores/gerardo_reyes_2.jpg", cargo: 'Director de Administración y Finanzas', telefono:"38-84-94-70", correo:'gerardo.reyes@tecmm.edu.mx', mailTo:'mailto:gerardo.reyes@tecmm.edu.mx'},
        {nombre: 'Jorge Alberto Wells Mendoza', image:"./recursos/img/directores/jorge_wells.jpg", cargo: 'Director de TI', telefono:"38-84-94-70", correo:'jorge.wells@tecmm.edu.mx', mailTo:'mailto:jorge.wells@tecmm.edu.mx'},
        {nombre: 'Mónica Ofelia Villanueva Aceves', image:"./recursos/img/directores/monica_villanueva.jpg", cargo: 'Comisario Público', telefono:"38-84-94-70", correo:'monica.villanueva@tecmm.edu.mx', mailTo:'mailto:monica.villanueva@tecmm.edu.mx'},
        {nombre: 'Ernesto Alejandro Castellanos Silva', image:"./recursos/img/directores/ernesto_castellanos.jpg", cargo: 'Abogado General', telefono:"38-84-94-70", correo:'ernesto.castellanos@tecmm.edu.mx', mailTo:'mailto:ernesto.castellanos@tecmm.edu.mx'},
        {nombre: 'Juan Pablo Cerrillo Hernández', image:"./recursos/img/directores/juan_cerrillo.jpg", cargo: 'Unidad Académica Arandas', telefono:"01-348-78-32010", correo:'juan.cerrillo@tecmm.edu.mx', mailTo:'mailto:juan.cerrillo@tecmm.edu.mx'},
        {nombre: 'Luis Eduardo Jiménez Herrera', image:"./recursos/img/directores/luis_jimenez.jpg", cargo: 'Unidad Académica Chapala', telefono:"01-376-76-5-80-30", correo:'luis.jimenez@tecmm.edu.mx', mailTo:'mailto:luis.jimenez@tecmm.edu.mx'},
        //{nombre: 'Sergio Arturo Martínez Méndez', image:"./recursos/img/directores/sergio_martinez.jpg", cargo: 'Unidad Académica Cocula', telefono:"377-773-0030", correo:'sergio.martinez@tecmm.edu.mx', mailTo:'mailto:sergio.martinez@tecmm.edu.mx'},
        {nombre: 'Roberto Durán Michel', image:"./recursos/img/directores/roberto_duran.jpg", cargo: 'Unidad Académica El Grullo', telefono:"321-38-73435", correo:'roberto.duran@tecmm.edu.mx', mailTo:'mailto:roberto.duran@tecmm.edu.mx'},
        {nombre: 'Jorge Santiago Rodríguez González', image:"./recursos/img/directores/jorge_rodriguez.jpg", cargo: 'Unidad Académica La Huerta', telefono:"357-38-41884", correo:'jorge.santiago@tecmm.edu.mx', mailTo:'mailto:jorge.santiago@tecmm.edu.mx'},
        {nombre: 'Ma. Eugenia Amador Murguía', image:"./recursos/img/directores/maria_amador.jpg", cargo: 'Unidad Académica Lagos de Moreno', telefono:"01-(474)-403-39-74", correo:'maria.amador@tecmm.edu.mx', mailTo:'mailto:maria.amador@tecmm.edu.mx'},
        //{nombre: 'Álvaro Fabricio Ramírez Campos',image:"./recursos/img/directores/alvaro_ramirez.jpg", cargo: 'Unidad Académica Mascota', telefono:"01-388-38-60518", correo:'alvaro.ramirez@tecmm.edu.mx', mailTo:'mailto:alvaro.ramirez@tecmm.edu.mx'},
        {nombre: 'Ernesto Rosales Castañeda', image:"./recursos/img/directores/ernesto_rosales.jpg", cargo: 'Unidad Académica Tequila', telefono:"37-47-42-72-88", correo:'ernesto.rosales@tecmm.edu.mx', mailTo:'mailto:ernesto.rosales@tecmm.edu.mx'},
        {nombre: 'Gloria Luz Rodríguez Gil', image:"./recursos/img/directores/gloria_rodriguez.jpg", cargo: 'Unidad Académica Tala', telefono:"384-73-33000", correo:'gloria.rodriguez@tecmm.edu.mx', mailTo:'mailto:gloria.rodriguez@tecmm.edu.mx'},
        {nombre: 'Felipe Alfonso Ordoñez García', image:"./recursos/img/directores/felipe_ordonez.jpg", cargo: 'Unidad Académica Tamazula', telefono:"358-10-30060", correo:'alfonso.ordonez@tecmm.edu.mx', mailTo:'mailto:alfonso.ordonez@tecmm.edu.mx'},
        {nombre: 'Alejandra Medina Lozano', image:"./recursos/img/directores/alejandra_medina.jpg", cargo: 'Unidad Académica Puerto Vallarta', telefono:"322-226-56 00", correo:'alejandra.medina@tecmm.edu.mx', mailTo:'mailto:alejandra.medina@tecmm.edu.mx'},
        {nombre: 'María Alejandra Delgado López', image:"./recursos/img/directores/alejandra_delgado.jpg", cargo: 'Unidad Académica Zapopan', telefono:"36-82-11-80", correo:'alejandra.delgado@tecmm.edu.mx', mailTo:'mailto:alejandra.delgado@tecmm.edu.mx'},
        {nombre: 'Héctor Dávalos Tinajero', image:"./recursos/img/directores/hector_davalos.jpg", cargo: 'Unidad Académica Zapotlanejo', telefono:"373-73-56060", correo:'hector.davalos@tecmm.edu.mx', mailTo:'mailto:hector.davalos@tecmm.edu.mx'},
      ],
    }
  }



  render(){
    return(
      <div className="div-principalRectoria">
        <MenuCentral/>
        <div className="div-contenedorDirectores">

          <div className="div-director">
            <div id="directores" class="ui link cards">

            </div>

          </div>

          <div class="ui link cards">
            {this.state.directores.map((it)=>(
              <RectoriaItem image={it.image} nombre={it.nombre} cargo={it.cargo} correo={it.correo} mailTo={it.mailTo} telefono={it.telefono} />
            ))}
          </div>

        </div>
        <LinksFooter/>
      </div>
    );
  }
}

export default Rectoria;
