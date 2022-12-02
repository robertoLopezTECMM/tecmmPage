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
import './styles/juntasDeGobierno.css'



class JuntasDeGobierno extends Component{

    constructor(props){
      super(props);
      this.state={
        carrerasArray:null,
      }

    }


  render(){
    return(
      <div className="div-principal-juntasDeGobierno">

      <MenuCentral/>

      <div className="div-oficios-juntasDeGobierno">
        <h1>JUNTAS DE GOBIERNO</h1>


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
                  <div className="div-ordenDia">
                    
                    <h2>SEGUNDA SESIÓN ORDINARIA 2020 H. JUNTA DE GOBIERNO DEL INSTITUTO TECNOLÓGICO JOSÉ MARIO MOLINA PASQUEL Y HENRÍQUEZ</h2>
                    
                    <p><a id="negritas">Lugar:</a> Se llevará a cabo de manera virtual a través de la plataforma para videoconferencias Zoom, desde Guadalajara, Jal. <br/> <a id="negritas">Fecha:</a> miércoles 17 de junio del 2020.<br/><a id="negritas">Hora:</a> 10:00 horas.</p>


                    <ol>
                      <li> <a>LISTA DE ASISTENCIA</a> </li>
                      <li> <a>ORDEN DEL DÍA</a> </li>
                      <li> <a>ACTA DE SESIÓN ANTERIOR</a> </li>
                      <li> <a>AVANCES DE ACUERDOS PREVIOS</a> </li>
                      <li> <a>INFORME DE ACTIVIDADES</a> </li>
                      <li> <a>CONTINUIDAD DE DIRECTORES</a> </li>
                      <li> <a>ESTATUS DE PERTINENCIA Y FACTIBILIDAD NUEVA UA</a> </li>
                      <li> <a>CONVENIO DE COMPRAS CONSOLIDADAS</a> </li>
                      <li> <a>PROYECTO DE EQUIPAMIENTO</a> </li>
                      <li> <a>ESTRUCTURA JURÍDICA</a> </li>
                      <li> <a>INFORME DE DATOS GENERALES Y ESTADOS FINANCIEROS</a> </li>
                      <li> <a>ASUNTOS GENERALES.</a> </li>
                      <li> <a>LECTURA DE ACUERDOS</a> </li>
                    </ol>
                  </div>
                  
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="div-lista-juntasDeGobierno">
                    <ul>

                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2019/Junta_de_Gobierno_28_de_Marzo_2019.pdf">1ra. Sesión Ordinaria 28/Marzo/2019</a>
                      </li>

                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2019/Junta_de_Gobierno_28_Febrero_2019.pdf">2da. Sesión Extraordinaria 28/Febrero/2019</a>
                      </li>

                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2019/Junta_de_Gobierno_17_Enero_2019.pdf">1ra. Sesión Extraordinaria 17/Enero/2019</a>
                      </li>

                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_28_Noviembre_2018.pdf">3ra. Sesión Ordinaria 28/Noviembre/2018</a>
                      </li>

                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_13_Noviembre_2018.pdf">4ta. Sesión Extraordinaria 13/Noviembre/2018</a>
                      </li>

                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_18_Octubre_2018.pdf">3ra. Sesión Extraordinaria 18/Octubre/2018</a>
                      </li>

                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gonierno_18_Julio_2018.pdf">2da. Sesión Ordinaria 18/Julio/2018</a>
                      </li>

                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_06_Junio_2018.pdf">2da. Sesión Extraordinaria 06/Junio/2018</a>
                      </li>

                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_23_Marzo_2018.pdf">1ra. Sesión Ordinaria 23/Marzo/2018</a>
                      </li>

                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2018/Junta_de_Gobierno_31_Enero_2018.pdf">1ra. Sesión Extraordinaria 31/Enero/2018</a>
                      </li>


                      <li>
                        <a href="http://tecmm.edu.mx/juntasDeGobierno(oficios)/2017/Junta_de_Gobierno_05_Diciembre_2017.pdf">3ra. Sesión Ordinaria 05/Diciembre/2017</a>
                      </li>

                    </ul>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

        </div>


      <LinksFooter/>

      </div>
    );
  }
}


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(JuntasDeGobierno, options);
