import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import {Route, Link, HashRouter, BrowserRouter, Switch,Router} from 'react-router-dom'
import Carousel from './components/carousel.js';
import DescubreTECMM from './components/descubreTECMM.js';
import Noticiero from './components/noticiero.js';
import LinksFooter from './components/linksFooter.js';
import MenuCentral from './components/menuCentral.js'
import Rodal from 'rodal';

import './landing.css';
import { ModalAvisos } from './components/modalAvisos.js';



class Landing extends Component {

  constructor(){
    super();
    this.state={
      selected: 0,
      showModal:true
    }

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }


  show(){
    this.setState({ showModal: true });
  }

  hide() {
    this.setState({ showModal: false });
  }

  render() {

    return (

      <div className="div-principalLanding">
        {/*<NoticieroLanding/>*/}
        <MenuCentral/>

        <div className="redes-lateral">

          <a href="https://www.facebook.com/tecmm">
            <img src="http://tecmm.edu.mx/imagesReact/images/menuRedesSociales/facebook.png"/>
          </a>

          <a href="https://twitter.com/mm_tec">
            <img src="http://tecmm.edu.mx/imagesReact/images/menuRedesSociales/twitter.png"/>
          </a>

          <a href="https://www.instagram.com/tecmm">
            <img src="http://tecmm.edu.mx/imagesReact/images/menuRedesSociales/instagram.png"/>
          </a>

          <a href="https://www.youtube.com/channel/UCUfv6a53VuKcEwo-XgF_mkw/featured">
            <img src="http://tecmm.edu.mx/imagesReact/images/menuRedesSociales/youtube.png"/>
          </a>

        </div>
        <ModalAvisos/>
        <Carousel/>
        <Noticiero/>
        <DescubreTECMM/>
        <LinksFooter/>

      </div>
    );
  }
}






const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Landing, options);
