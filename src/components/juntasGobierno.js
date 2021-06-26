import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/juntasGobierno.css'



class JuntasGobierno extends Component{

    constructor(props){
      super(props);
      this.state={
        carrerasArray:null,
        logeado:false,
        username: '',
        password: '',
      }
      this.login = this.login.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    login() {
      if(this.state.username=="tecmmJuntaGob" && this.state.password=="juntagob2020"){
        alert("Bienvenido");
        sessionStorage.setItem("juntasAuth", "true")
        this.setState({
          logeado:true
        })

      }else{
        alert("las credenciales son incorrectas")
      }
    }
  
  
    onChange(e){
      this.setState({[e.target.name]:e.target.value});
    }
  
    componentWillMount(){
      const isAuth=sessionStorage.getItem('juntasAuth')

      this.setState({
          logeado:isAuth
      })
    }
  


  render(){
    const isLogged = this.state.logeado
    return(
      <div className="juntasGobiernoContainer">

      <MenuCentral/>

      <div >
        <h1>JUNTAS DE GOBIERNO</h1>

        {isLogged ?
          <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Sesiones Anteriores</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                  <div className="ordenDiaContainer">

                  <h2>TERCERA SESIÓN ORDINARIA 2020 H. JUNTA DE GOBIERNO DEL INSTITUTO TECNOLÓGICO JOSÉ MARIO MOLINA PASQUEL Y HENRÍQUEZ</h2>

                  <div className="lugarFechaContainer">
                  <p><a id="negritas">Fecha:</a> Jueves 13 de Agosto del 2020.</p>
                  <p><a id="negritas">Hora:</a> 09:00 horas.</p>
                  <p><a id="negritas">Lugar:</a> Se llevará a cabo de manera virtual a través de la plataforma para videoconferencias Zoom, desde Guadalajara, Jal.</p>
                  </div>

                  <ol>
                  <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/lista-asistencia.pdf" target="_blank" className="link1">LISTA DE ASISTENCIA Y DECLARACIÓN DEL QUÓRUM LEGAL</a></li>
                  <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/orden-del-dia.pdf" target="_blank" className="link1">LECTURA, Y EN SU CASO APROBACIÓN DEL ORDEN DEL DÍA</a> </li>
                  <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/acta-segunda-sesion-2020.pdf" target="_blank" className="link1">LECTURA, Y EN SU CASO APROBACIÓN DEL ACTA DE SESIÓN ANTERIOR</a> </li>
                  <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/avance-acuerdos-previos.pdf" target="_blank" className="link1">REVISION DEL AVANCE EN LA EJECUCIÓN DE ACUERDOS PREVIOS</a> </li>
                  <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/informe-de-actividades-8-agosto-2020.pdf" target="_blank" className="link1">PRESENTACIÓN, Y EN SU CASO APROBACIÓN DEL INFORME DE ACTIVIDADES DEL DIRECTOR GENERAL MAYO A JULIO 2020</a> </li>
                  <li> 
                    <a className="link1">PRESENTACIÓN, Y EN SU CASO APROBACIÓN DEL ANTEPROYECTO DE PRESUPUESTO 2021</a> 
                    <ul>
                      <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/plan-accion.pdf" target="_blank" className="link1">PLAN DE ACCIÓN Y MATRIZ DE INDICADORES DE RESULTADOS</a> </li>
                      <li> <a  href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/plantilla-2021.pdf" target="_blank" className="link1">ORGANIGRAMA Y PLANTILLA DE PERSONAL 2021</a> </li>
                      <li> <a  href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/anteproyecto-presupuesto.pdf" target="_blank" className="link1">PRESUPUESTO</a></li>
                    </ul>
                  </li>

                  <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/anteproyecto-adquisiciones-2021.pdf" target="_blank" className="link1">PRESENTACIÓN, Y EN SU CASO APROBACIÓN DEL ANTEPROYECTO DEL PROGRAMA ANUAL DE ADQUISICIONES 2021</a> </li>
                  <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/adecuacion-presupuestal.pdf" target="_blank" className="link1">SOLICITUD, Y EN SU CASO APROBACIÓN DE ADECUACIONES PRESUPUESTALES 2020</a> </li>
                  <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/actualizacion-politicas-tecmm.pdf" target="_blank" className="link1">PRESENTACIÓN, Y EN SU CASO APROBACIÓN DE LA MODIFICACIÓN DE LAS POLÍTICAS DE LINEAMIENTOS PARA LAS ADQUISICIONES, LAS ENAJENACIONES, ARRENDAMIENTOS DE BIENES Y CONTRATACIÓN DE SERVICIOS DEL INSTITUTO TECNOLÓGICO JOSÉ MARIO MOLINA PASQUEL Y HENRÍQUEZ</a> </li>

                  <li> 
                    <a className="link1">ASUNTOS GENERALES.</a> 
                    <ul>
                      <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/informe-estatus-lagos.pdf" target="_blank" className="link1">INFORME DE ESTATUS DE LAS EDIFICACIONES EN PROCESO EN LA UNIDAD ACADÉMICA DE LAGOS DE MORENO</a> </li>
                      <li> <a className="link1">PUNTOS ADICIONALES PARA INTEGRARSE AL PRINCIPIO DE LA SESIÓN</a> </li>
                    </ul>
                  </li>
                  <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/lectura-acuerdos.pdf" target="_blank" className="link1">LECTURA DE ACUERDOS</a> </li>
                  <li> <a href="http://tecmm.edu.mx/juntasGobierno(pdf)/terceraSesion2020/clausura-sesion.pdf" target="_blank" className="link1">CLAUSURA DE LA SESIÓN</a> </li>
                  
                  
                  </ol>

                  </div>

                  </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                  <div className="sesionesAnterioresContainer">
                  <ul>

                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2019/Junta_de_Gobierno_28_de_Marzo_2019.pdf">1ra. Sesión Ordinaria 28/Marzo/2019</a>
                  </li>

                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2019/Junta_de_Gobierno_28_Febrero_2019.pdf">2da. Sesión Extraordinaria 28/Febrero/2019</a>
                  </li>

                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2019/Junta_de_Gobierno_17_Enero_2019.pdf">1ra. Sesión Extraordinaria 17/Enero/2019</a>
                  </li>

                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_28_Noviembre_2018.pdf">3ra. Sesión Ordinaria 28/Noviembre/2018</a>
                  </li>

                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_13_Noviembre_2018.pdf">4ta. Sesión Extraordinaria 13/Noviembre/2018</a>
                  </li>

                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_18_Octubre_2018.pdf">3ra. Sesión Extraordinaria 18/Octubre/2018</a>
                  </li>

                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gonierno_18_Julio_2018.pdf">2da. Sesión Ordinaria 18/Julio/2018</a>
                  </li>

                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_06_Junio_2018.pdf">2da. Sesión Extraordinaria 06/Junio/2018</a>
                  </li>

                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_23_Marzo_2018.pdf">1ra. Sesión Ordinaria 23/Marzo/2018</a>
                  </li>

                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_31_Enero_2018.pdf">1ra. Sesión Extraordinaria 31/Enero/2018</a>
                  </li>


                  <li>
                  <a target="_blank" id="sesionAnterior" href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2017/Junta_de_Gobierno_05_Diciembre_2017.pdf">3ra. Sesión Ordinaria 05/Diciembre/2017</a>
                  </li>

                  </ul>
                  </div>
                  </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
          :
          <div className="loginJuntasContainer">

            <img src="http://tecmm.edu.mx/imagesReact/images/logo-tecmm.png"/>
            <p>Para acceder a toda la información relacionada a las juntas de gobierno, asi como temas relacionados, favor de introducir su usuario y contraseña.</p>
            <div className="loginForm">
              <div className="inputsContainer">
                <input onChange={this.onChange} name="username" type="text" placeholder="usuario"/>
                <input onChange={this.onChange} name="password" type="password" placeholder="contraseña"/>
                <button onClick={this.login}>INGRESAR</button>
              </div>
            </div>
          </div>
        }

        

        </div>


      <LinksFooter/>

      </div>
    );
  }
}


export default JuntasGobierno;
