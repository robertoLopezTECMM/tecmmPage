import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import Rodal from 'rodal';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import 'rodal/lib/rodal.css';
import './styles/vidaEstudiantil.css'
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'


class VidaEstudiantilSeccionLeft extends Component{

  constructor(){
    super();
    this.state={
      contactosArray:[
        {nombre: 'C. Francisco Javier Gutiérrez Torres',campus:'Arandas', linkCorreo:'mailto:francisco.gutierrez@tecmm.edu.mx',correo:'francisco.gutierrez@tecmm.edu.mx', telefono:'3481052705'},
        {nombre: 'C. Dayana Euridice Rameño Valadez',campus:'Chapala', linkCorreo:'mailto:dayana.rameno@chapala.tecmm.edu.mx',correo:'dayana.rameno@chapala.tecmm.edu.mx', telefono:'3319441289'},
        {nombre: 'Ing. Gilberto Lepe García',campus:'Cocula', linkCorreo:'mailto:gilberto.lepe@cocula.tecmm.edu.mx',correo:'gilberto.lepe@cocula.tecmm.edu.mx', telefono:'3751121753'},
        {nombre: 'MVZ. Jorge Rodríguez Martínez',campus:'El Grullo', linkCorreo:'mailto:jorge.rodriguez@elgrullo.edu.mx',correo:'jorge.rodriguez@elgrullo.edu.mx', telefono:'3211006309'},
        {nombre: 'Lic. Azucena Osorio Real',campus:'La Huerta', linkCorreo:'mailto:azucena.osorio@lahuerta.tecmm.edu.mx',correo:'azucena.osorio@lahuerta.tecmm.edu.mx', telefono:'3151100671'},
        {nombre: 'Lic. Juan Diego Ávila Ávila',campus:'Lagos de Moreno', linkCorreo:'mailto:diego.avila@lagos.tecmm.edu.mx',correo:'diego.avila@lagos.tecmm.edu.mx', telefono:'4741137472'},
        {nombre: 'Lic. María del Rocío Santana de Santiago',campus:'Mascota', linkCorreo:'mailto:vinculacion@mascota.tecmm.edu.mx',correo:'vinculacion@mascota.tecmm.edu.mx', telefono:'3222788703'},
        {nombre: 'Lic. Asdruval Rafael Ortíz Cuevas',campus:'Puerto Vallarta', linkCorreo:'mailto:asdruval.ortiz@vallarta.tecmm.edu.mx',correo:'asdruval.ortiz@vallarta.tecmm.edu.mx', telefono:'3221705736'},
        {nombre: 'Mtra. Iliana Navarro Tapia',campus:'Tala', linkCorreo:'mailto:iliana.navarro@tala.tecmm.edu.mx',correo:'iliana.navarro@tala.tecmm.edu.mx', telefono:'3317118205'},
        {nombre: 'Lic. Rogelio Ramírez Moreno',campus:'Tamazula', linkCorreo:'mailto:rogelio.ramirez@tamazula.tecmm.edu.mx',correo:'rogelio.ramirez@tamazula.tecmm.edu.mx', telefono:'3411348375'},
        {nombre: 'Lic. Luis Antonio Benítez Rubio',campus:'Tequila', linkCorreo:'mailto:luis.benitez@tequila.tecmm.edu.mx',correo:'luis.benitez@tequila.tecmm.edu.mx', telefono:'3312416888'},
        {nombre: 'Lic. Edgar Rodolfo Ruíz Becerra',campus:'Zapopan', linkCorreo:'mailto:edgar.ruiz@zapopan.tecmm.edu.mx',correo:'edgar.ruiz@zapopan.tecmm.edu.mx', telefono:'3315708870'},
        {nombre: 'Lic. Ricardo Navarro Rubio',campus:'Zapotlanejo', linkCorreo:'mailto:ricardo.navarro@zapotlanejo.tecmm.edu.mx',correo:'ricardo.navarro@zapotlanejo.tecmm.edu.mx', telefono:'8671760337'},

      ],
      contactos:false,
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ contactos: true });
  }

  hide() {
    this.setState({ contactos: false });
  }

  render(){

    const button={
      display:this.props.button
    }

    return(
      <div id="morado" className="div-seccionVidaEstudiantil">

        <Rodal customStyles={{overflowY:"scroll"}} width="900" height="600" visible={this.state.contactos} onClose={this.hide.bind(this)}>
          <div className="div-listaContactos">
            <div class="ui items">
              {this.state.contactosArray.map((it)=>(
                <div class="item">
                  <div class="ui small image">
                    <img src="http://tecmm.edu.mx/imagesReact/images/directores/no-foto.jpg" />
                  </div>
                  <div class="middle aligned content">
                    <div class="header">
                      {it.nombre}
                    </div>
                    <div class="description">
                      <a>{it.campus}</a><br/>
                      <a target="_blank"href={it.linkCorreo}>{it.correo}</a><br/>
                      <a>{it.telefono}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Rodal>

        <Fade right>
          <img className="img-seccionVidaEstudiantil" src={this.props.imagen}/>
        </Fade>

        <Fade left>
          <div className="div-textoSeccion">
            <h1>{this.props.titulo}</h1>
            <p>{this.props.texto}</p>
            <button onClick={this.show.bind(this)} style={button}>INSCRÍBETE</button>
          </div>
        </Fade>
      </div>
    );
  }
}

class VidaEstudiantilSeccionRight extends Component{
  constructor(){
    super();
    this.state={
      contactosArray:[
        {nombre: 'C. Francisco Javier Gutiérrez Torres',campus:'Arandas', linkCorreo:'mailto:francisco.gutierrez@tecmm.edu.mx',correo:'francisco.gutierrez@tecmm.edu.mx', telefono:'3481052705'},
        {nombre: 'C. Dayana Euridice Rameño Valadez',campus:'Chapala', linkCorreo:'mailto:dayana.rameno@chapala.tecmm.edu.mx',correo:'dayana.rameno@chapala.tecmm.edu.mx', telefono:'3319441289'},
        {nombre: 'Ing. Gilberto Lepe García',campus:'Cocula', linkCorreo:'mailto:gilberto.lepe@cocula.tecmm.edu.mx',correo:'gilberto.lepe@cocula.tecmm.edu.mx', telefono:'3751121753'},
        {nombre: 'MVZ. Jorge Rodríguez Martínez',campus:'El Grullo', linkCorreo:'mailto:jorge.rodriguez@elgrullo.edu.mx',correo:'jorge.rodriguez@elgrullo.edu.mx', telefono:'3211006309'},
        {nombre: 'Lic. Azucena Osorio Real',campus:'La Huerta', linkCorreo:'mailto:azucena.osorio@lahuerta.tecmm.edu.mx',correo:'azucena.osorio@lahuerta.tecmm.edu.mx', telefono:'3151100671'},
        {nombre: 'Lic. Juan Diego Ávila Ávila',campus:'Lagos de Moreno', linkCorreo:'mailto:diego.avila@lagos.tecmm.edu.mx',correo:'diego.avila@lagos.tecmm.edu.mx', telefono:'4741137472'},
        {nombre: 'Lic. María del Rocío Santana de Santiago',campus:'Mascota', linkCorreo:'mailto:vinculacion@mascota.tecmm.edu.mx',correo:'vinculacion@mascota.tecmm.edu.mx', telefono:'3222788703'},
        {nombre: 'Lic. Asdruval Rafael Ortíz Cuevas',campus:'Puerto Vallarta', linkCorreo:'mailto:asdruval.ortiz@vallarta.tecmm.edu.mx',correo:'asdruval.ortiz@vallarta.tecmm.edu.mx', telefono:'3221705736'},
        {nombre: 'Mtra. Iliana Navarro Tapia',campus:'Tala', linkCorreo:'mailto:iliana.navarro@tala.tecmm.edu.mx',correo:'iliana.navarro@tala.tecmm.edu.mx', telefono:'3317118205'},
        {nombre: 'Lic. Rogelio Ramírez Moreno',campus:'Tamazula', linkCorreo:'mailto:rogelio.ramirez@tamazula.tecmm.edu.mx',correo:'rogelio.ramirez@tamazula.tecmm.edu.mx', telefono:'3411348375'},
        {nombre: 'Lic. Luis Antonio Benítez Rubio',campus:'Tequila', linkCorreo:'mailto:luis.benitez@tequila.tecmm.edu.mx',correo:'luis.benitez@tequila.tecmm.edu.mx', telefono:'3312416888'},
        {nombre: 'Lic. Edgar Rodolfo Ruíz Becerra',campus:'Zapopan', linkCorreo:'mailto:edgar.ruiz@zapopan.tecmm.edu.mx',correo:'edgar.ruiz@zapopan.tecmm.edu.mx', telefono:'3315708870'},
        {nombre: 'Lic. Ricardo Navarro Rubio',campus:'Zapotlanejo', linkCorreo:'mailto:ricardo.navarro@zapotlanejo.tecmm.edu.mx',correo:'ricardo.navarro@zapotlanejo.tecmm.edu.mx', telefono:'8671760337'},

      ],
      contactos:false,
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ contactos: true });
  }

  hide() {
    this.setState({ contactos: false });
  }

  render(){

    const button={
      display:this.props.button
    }

    return(

      <div id="verde" className="div-seccionVidaEstudiantil">

        <Rodal customStyles={{overflowY:"scroll"}} width="900" height="600" visible={this.state.contactos} onClose={this.hide.bind(this)}>

          <div className="div-listaContactos">
            <div class="ui items">
              {this.state.contactosArray.map((it)=>(
                <div class="item">
                  <div class="ui small image">
                    <img src="http://tecmm.edu.mx/imagesReact/images/directores/no-foto.jpg" />
                  </div>
                  <div class="middle aligned content">
                    <div class="header">
                      {it.nombre}
                    </div>
                    <div class="description">
                      <a>{it.campus}</a><br/>
                      <a target="_blank"href={it.linkCorreo}>{it.correo}</a><br/>
                      <a>{it.telefono}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </Rodal>
        <Fade right>
          <div className="div-textoSeccion">
            <h1>{this.props.titulo}</h1>
            <p>{this.props.texto}</p>
            <button onClick={this.show.bind(this)} style={button}>INSCRÍBETE</button>
          </div>
        </Fade>

        <Fade left>
          <img className="img-seccionVidaEstudiantil" src={this.props.imagen}/>
        </Fade>
      </div>
    );
  }
}


class VidaEstudiantil extends Component {

  constructor(){
    super();
    this.state={
      requisitos:false,
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }


  show() {
    this.setState({ requisitos: true });
  }

  hide() {
    this.setState({ requisitos: false });
  }


  render() {



    return (

      <div className="div-principalVidaEstudiantil">

        <MenuCentral/>

        <div>
          <Rodal customStyles={{backgroundImage:"url('http://tecmm.edu.mx/imagesReact/images/aguilaFondo.jpg')", backgroundPosition:"top", backgroundSize:"cover", backgroundRepeat:"no-repeat", overflowY:"scroll"}} width="900" height="600" visible={this.state.requisitos} onClose={this.hide.bind(this)}>

            <div className="div-modalRequisitos">
              <ul>
                <li>Contar con más del 70% de créditos y solicitar al departamento de control escolar, constancia de créditos.</li>
                <li>Vinculación realiza plática de inducción ó información del servicio social, se presenta el listado de instituciones con quien se tiene convenio y que exclusivamente se podrá realizar el servicio social.</li>
                <li>El departamento de vinculación expide carta de presentación dirigida a la dependencia donde el alumno realizará el servicio social.</li>
                <li>La dependencia recibe la carta de presentación y expide una carta de aceptación la cual deberá ser entregada por el alumno al departamento de vinculación.</li>
                <li>El alumno entregará 3 repo  rtes bimestrales de las actividades que realice el departamento de vinculación. (cada 2 meses) Se debe realizar un reporte final.</li>
                <li>La dependencia expedirá una carta de terminación de servicio social dirigida al director y a la coordinación de vinculación.</li>
                <li>El departamento de vinculación. Expide carta de liberación de servicio social.</li>
              </ul>
            </div>

          </Rodal>

        <div id="morado" className="div-seccionVidaEstudiantil">
          <Fade right>
            <img className="img-seccionVidaEstudiantil" src="http://tecmm.edu.mx/imagesReact/images/vidaEstudiantil/servicioSocialVidaEstudiantil.jpg"/>
          </Fade>

          <Fade left>
            <div className="div-textoSeccion">
              <h1>Servicio Social</h1>
              <p>Se entiende por Servicio Social el trabajo de carácter temporal y obligatorio, que institucionalmente presten y ejecuten los estudiantes en beneficio de la sociedad. Los estudiantes de las Instituciones adscritas al TecNM prestan el Servicio Social para cumplir con los créditos de sus planes de estudios.</p>
              <button onClick={this.show.bind(this)}>REQUISITOS</button>
            </div>
          </Fade>
        </div>


        <div id="verde" className="div-seccionVidaEstudiantil">

          <Fade right>
            <div className="div-textoSeccion">
              <h1>MI TECMM</h1>
              <p>La plataforma edcore es el sistema de gestión escolar que integra a las 13 Unidades Académicas del TecMM del Estado de Jalisco, siendo una de las redes más grandes de México.</p>
              <a target="_blank" href="http://www.tecmm.edu.mx/admision">
                <button>MI TECMM ALUMNOS</button>
              </a>
            </div>
          </Fade>

          <Fade left>
            <img className="img-seccionVidaEstudiantil" src="http://tecmm.edu.mx/imagesReact/images/vidaEstudiantil/edcoreVidaEstudiantil.jpg"/>
          </Fade>
        </div>


          <VidaEstudiantilSeccionLeft button=""
                                      texto="El Tecnológico Mario Molina en compromiso con la comunidad universitaria, cuenta con espacios que permiten a los estudiantes desarrollar sus habilidades deportivas, alrededor de sus 13 unidades académicas se imparten talleres deportivos, entre los cuales destacan: Fútbol, Basquetbol, Voleibol, entre otras más."
                                      imagen="http://tecmm.edu.mx/imagesReact/images/vidaEstudiantil/futbol.jpg"
                                      titulo="Actividades Deportivas"/>

          <VidaEstudiantilSeccionRight button=""
                                       texto="Las disciplinas de arte y cultura, tienen la facultad de mejorar la calidad de vida de los estudiantes del Tecnológico Mario Molina, siguiendo esta ideología el TecMM oferta distintas actividades culturales las cuales se realizan a manera de taller o club, con esto buscamos una formación óptima en nuestros egresados."
                                       imagen="http://tecmm.edu.mx/imagesReact/images/vidaEstudiantil/pintura.jpg"
                                       titulo="Actividades Culturales"/>

          <VidaEstudiantilSeccionLeft button=""
                                      texto="El TecMM fomenta actividades cívicas en la formación de sus estudiantes, con el objetivo de fortalecer las acciones que promueven el amor a la Patria y la identidad nacional, desarrollando ciudadanos responsables, participativos, sanos e identificados con su institución educativa, su comunidad y su país."
                                      imagen="http://tecmm.edu.mx/imagesReact/images/vidaEstudiantil/escolta.jpg"
                                      titulo="Actividades Cívicas"/>

          <VidaEstudiantilSeccionRight button="none"
                                       texto="Donde participan las 13 Unidades Académicas del Instituto Tecnológico José Mario Molina Pasquel y Henríquez (Arandas, Chapala, Cocula, El Grullo, La Huerta, Lagos de Moreno, Mascota, Tala, Tamazula, Tequila, Zapopan y Zapotlanejo). Con las disciplinas Académicas (Spelling Bee, Robótica, Programación); Culturales (Pintura, Oratoria, Fotografía y Música); Deportivas (Fútbol , Basquetbol, Atletismo, Voleibol y Ajedrez); Cívicas (Escoltas y Bandas de Guerra) y Sociales (Señorita Tec)"
                                       imagen="http://tecmm.edu.mx/imagesReact/images/vidaEstudiantil/intercampus.jpg"
                                       titulo="Juegos Intercampus"/>
        </div>

        <LinksFooter/>

      </div>
    );
  }
}


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(VidaEstudiantil, options);
