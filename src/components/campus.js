import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import {withGetScreen} from 'react-getscreen'


import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/campus.css';





class CampusItem extends Component{
   constructor(props){
     super(props);
     this.state={

     }
   }

  render(){
    return(
      <div className="div-campusItem">

        <div className="div-h1-campusItem">
          <a href={this.props.link}>
            <h1 className="h1-campusItem"></h1>
          </a>
        </div>

        <img className="img-campusItem" src={this.props.image}/>
      </div>
    );
  }
}



class Campus extends Component {
  render() {
    return (
      <div className="div-principalCampus">

        <MenuCentral/>



        <div className="div-gridCampus">

        <h1 className="h1-extensiones">Unidades Académicas</h1>

          <Grid doubling columns={4}>

            <Grid.Row centered columns={4}>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-arandas.jpg'} name={"Arandas"} link="http://www.arandas.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-chapala.jpg'} name={"Chapala"} link="http://www.chapala.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-cocula.jpg'} name={"Cocula"} link="http://www.cocula.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-grullo.jpg'} name={"El Grullo"} link="http://www.elgrullo.tecmm.edu.mx/"/> </Grid.Column>
            </Grid.Row>


            <Grid.Row centered columns={4}>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-huerta.jpg'} name={"La Huerta"} link="http://lahuerta.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-lagos.jpg'} name={"Lagos de Moreno"} link="http://www.lagos.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-mascota.jpg'} name={"Mascota"} link="http://www.mascota.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-tala.jpg'} name={"Tala"} link="http://www.tala.tecmm.edu.mx/"/> </Grid.Column>
            </Grid.Row>


            <Grid.Row centered columns={4}>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-tamazula.jpg'} name={"Tamazula"} link="http://www.tamazula.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-tequila.jpg'} name={"Tequila"} link="http://tequila.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-vallarta.jpg'} name={"Puerto Vallarta"} link="http://vallarta.tecmm.edu.mx/"/></Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-zapopan.jpg'} name={"Zapopan"} link="http://www.zapopan.tecmm.edu.mx/"/> </Grid.Column>
            </Grid.Row>


            <Grid.Row centered columns={4}>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/campus-zapotlanejo.jpg'} name={"Zapotlanejo"} link="http://www.zapotlanejo.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/direccion-general.jpg'} name={"Direccion General"} link="http://tecmm.edu.mx/"/> </Grid.Column>
            </Grid.Row>

          </Grid>

        </div>

        <div className="div-gridCampus">

        <h1 className="h1-extensiones">Extensiones</h1>

          <Grid doubling columns={4}>

            <Grid.Row centered columns={4}>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/extenciones/tecolotlan.jpg'} name={"cocula"} link="http://www.cocula.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/extenciones/atemajac.jpg'} name={"cocula"} link="http://www.lahuerta.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/extenciones/tomatlan.jpg'} name={"laHuerta"} link="http://lahuerta.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/extenciones/ixtlahuacan.jpg'} name={"tala"} link="http://www.tala.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/extenciones/cuquio.jpg'} name={"tala"} link="http://www.tala.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/extenciones/huejuquilla.jpg'} name={"Tala"} link="http://www.tala.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/extenciones/totatiche.jpg'} name={"tala"} link="http://www.tala.tecmm.edu.mx/"/> </Grid.Column>
              <Grid.Column> <CampusItem image={'http://tecmm.edu.mx/imagesReact/images/campus/extenciones/tenamaxtlan.jpg'} name={"mascota"} link="http://www.lagos.tecmm.edu.mx/"/> </Grid.Column>

            </Grid.Row>


          </Grid>

        </div>


        <LinksFooter/>
      </div>
    );
  }
}

const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Campus, options);
