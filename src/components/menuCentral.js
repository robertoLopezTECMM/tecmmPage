import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Nav from 'react-bootstrap/Nav'
import './styles/menuCentral.css';

class MenuCentral extends Component {
  constructor(){
    super();
    this.state={
      width:0,

    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu(e){
    this.setState({
      width:"60%"

    })
  }

  closeMenu(e){
    this.setState({
      width:"0px"
    })
  }

  render() {

    const styleDrawer = {
      width:this.state.width
    }

    const handleSelect = eventKey => alert(`selected ${eventKey}`);

    return (
      <div>
      {/*MENU MOVIL*/}
        <div style={styleDrawer} id="mySidenav" class="sidenav">
          <img class="tecmmicon" src="http://tecmm.edu.mx/imagesReact/images/logo-tecmm-blanco.png"/>
          <a class="closebtn" onClick={this.closeMenu.bind(this)}><i class="times icon"></i></a>
          <a>
            SOMOS TECMM
            <ul>
              <li>
                <a href="/quienesSomos">Quiénes Somos</a>
              </li>

              <li>
                <a href="/rectoria">Rectoria</a>
              </li>

              {/*<li>
                <a href="#bienvenida">Bienvenida</a>
              </li>*/}

              <li>
                <a href="/modeloAcademico">Modelo Académico</a>
              </li>
            </ul>
          </a>

          <a href="/admision">ADMISIÓN</a>
          <a href="/vidaEstudiantil">VIDA ESTUDIANTIL</a>
          <a href="/contacto">CONTACTO</a>
          <a href="/igualdad">SGIG</a>
          <a href="/quejasYdenuncias">QUEJAS Y DENUNCIAS</a>
        </div>
        <span className="span-menuMovilButton" onClick={this.openMenu.bind(this)}>&#9776;</span>
      {/*MENU MOVIL*/}



    <div className="div-principalMenuCentral">

      <div className="div-menuGobMx">
        <img src="https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg"/>

        <div className="div-linksMenuGobMx">
          <ul>
            <li> <a target="_blank" href="https://www.gob.mx/gobierno">Gobierno</a> </li>
            <li> <a target="_blank" href="https://www.participa.gob.mx/">Participa</a> </li>
            <li> <a target="_blank" href="https://datos.gob.mx/">Datos</a> </li>
            <li> <a target="_blank" href="https://www.gob.mx/gobierno"><i class="search icon"></i></a> </li>
          </ul>
        </div>

      </div>


      <a href="/">
        <img className="img-banner" src="http://tecmm.edu.mx/imagesReact/images/banner-tecmm-nuevo.jpg"/>
        <img className="img-banner-movil" src="http://tecmm.edu.mx/imagesReact/images/banner-tecmm-2020-movil.jpg"/>

      </a>

      <Nav id="menuCentralBootstrap" variant="pills" activeKey="1">
        <Dropdown >
          <Dropdown.Toggle id="dropdownBootstrap">SOMOS TECMM</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/quienesSomos" id="dropdownItemBootstrap">Quienes Somos</Dropdown.Item>
            <Dropdown.Item href="/rectoria" id="dropdownItemBootstrap">Rectoria</Dropdown.Item>
            <Dropdown.Item href="/modeloAcademico" id="dropdownItemBootstrap">Modelo Académico</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Item id="navItemBootstrap">
          <Nav.Link id="navLinkBootstrap" href="/admision">
            ADMISIÓN
          </Nav.Link>
        </Nav.Item>
        <Nav.Item id="navItemBootstrap">
          <Nav.Link id="navLinkBootstrap" href="/vidaEstudiantil">
            VIDA ESTUDIANTIL
          </Nav.Link>
        </Nav.Item>
        <Nav.Item id="navItemBootstrap">
          <Nav.Link id="navLinkBootstrap" href="/contacto">
            CONTACTO
          </Nav.Link>
        </Nav.Item>
        <Nav.Item id="navItemBootstrap">
          <Nav.Link id="navLinkBootstrap" href="/igualdad">
            SGIG
          </Nav.Link>
        </Nav.Item>
        <Nav.Item id="navItemBootstrap">
          <Nav.Link id="navLinkBootstrap" href="/quejasYDenuncias">
            QUEJAS Y DENUNCIAS
          </Nav.Link>
        </Nav.Item>
      </Nav>

    </div>

    </div>
    );
  }
}

export default MenuCentral;
