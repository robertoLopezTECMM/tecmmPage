import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import {Route, Link, HashRouter, BrowserRouter, Switch,Router} from 'react-router-dom'

import LinksFooter from './linksFooter.js';
import MenuCentral from './menuCentral.js'






class EnConstruccion extends Component {

  constructor(){
    super();
    this.state={
      selected: 0,
    }
  }




  render() {

    return (

      <div className="div-principalLanding">

        <MenuCentral/>


        <div style={{width:"100%"}}>
          <img style={{width:"100%"}} src="http://tecmm.edu.mx/imagesReact/images/building.png"/>
        </div>


        <LinksFooter/>



      </div>
    );
  }
}



export default EnConstruccion
