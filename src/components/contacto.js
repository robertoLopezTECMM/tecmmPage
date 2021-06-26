import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/contacto.css'


class DirectorioItem extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render(){
    return(
      <div class="item">
          <div class="ui small image">
            <img src={this.props.imagen}/>
          </div>
          <div id="texto" class="middle aligned content">
            <div id="titulo" class="header">
              {this.props.nombre}
            </div>
            <div id="direccion" class="description">
              <p>{this.props.direccion}</p>
              <p>{this.props.telefono}</p>
            </div>
            <div class="extra">
              <a target="_blank" href={this.props.ubicacion}>
                <div id="ubicacion" class="ui right floated button">
                  Ubicación <i class="map marker alternate icon"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

    );
  }
}


class Contacto extends Component{

  constructor(props){
    super(props);
    this.state={
      directorio:[
        {nombre:"UNIDAD ACADÉMICA ARANDAS", ubicacion:"https://goo.gl/maps/nYScdndNByVweSXLA", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-arandas.jpg", direccion:"Av. José Guadalupe Tejeda 557 Arandas, Jalisco.", telefonoPrincipal:"tel:348-78-32020", telefono:"348-78-32020, 01-348-78-32010, Vinculación: 1119, Control Escolar: 1105"},
        {nombre:"UNIDAD ACADÉMICA CHAPALA", ubicacion:"https://goo.gl/maps/ebsh229kszMwFB7NA", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-chapala.jpg",  direccion:"Libramiento Chapala - Ajijic 200 Chapala, Jalisco.", telefonoPrincipal:"tel:01-376-76-5-80-30", telefono:"01-376-76-5-80-30, Vinculación: 108, 153, Control Escolar: 128, 155"},
        {nombre:"UNIDAD ACADÉMICA COCULA", ubicacion:"https://goo.gl/maps/zgVETh2HncocLZC37", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-cocula.jpg",  direccion:"Calle Tecnológico 1000, Lomas de Cocula, Cocula, Jalisco.", telefonoPrincipal:"tel:377-773-0030", telefono:"377-773-0030, Vinculación: 130, Control Escolar: 122"},
        {nombre:"UNIDAD ACADÉMICA EL GRULLO", ubicacion:"https://goo.gl/maps/kDBTV9e4hBjY6YS8A", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-grullo.jpg",  direccion:"CAMPUS EL GRULLO Km. 5 carretera El Grullo - Ejutla s/n, Puerta de Barro, El Grullo, Jalisco.", telefonoPrincipal:"tel:321-38-73435", telefono:"321-38-73435, Vinculación: 141, 142, 139, Control Escolar: 121"},
        {nombre:"UNIDAD ACADÉMICA LA HUERTA", ubicacion:"https://goo.gl/maps/rPpLtgWBH7wXvqjX7", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-huerta.jpg",  direccion:"Rafael Palomera No. 161, Col. El Maguey, La Huerta, Jalisco.", telefonoPrincipal:"tel:357-38-41884", telefono:"357-38-41884, 85 y 86, Vinculación: 135, 192, 130, Control Escolar: 131, 113"},
        {nombre:"UNIDAD ACADÉMICA LAGOS DE MORENO", ubicacion:"https://goo.gl/maps/fckWNpJKKiyTPKuNA", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-lagos.jpg",  direccion:"Libramiento Tecnológico 5000, Col. Portugalejo de los Romanes, Lagos de Moreno, Jalisco.", telefonoPrincipal:"tel:01-(474)-403-39-74", telefono:"01-(474)-403-39-74 / 403-39-91, Vinculación: 183, 191, Control Escolar: 184"},
        {nombre:"UNIDAD ACADÉMICA MASCOTA", ubicacion:"https://goo.gl/maps/poVc4USLCnXp3pMz5", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-mascota.jpg",  direccion:"Km. 100 Carretera Ameca-Mascota, Chan Rey, Mascota, Jalisco.", telefonoPrincipal:"388-38-52010", telefono:"38-85-20-10, Vinculación: 205, Control Escolar: 220"},
        {nombre:"UNIDAD ACADÉMICA PUERTO VALLARTA", ubicacion:"https://goo.gl/maps/YWXxfv48RGsBK4Hj7", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-vallarta.jpg",  direccion:"Corea del Sur no. 600 Col. El Mangal, Coapinole, Puerto Vallarta, Jalisco.", telefonoPrincipal:"tel:322-226-56-00", telefono:"322-226-56-00, Vinculación: 105, Control Escolar: 106, 120, 123"},
        {nombre:"UNIDAD ACADÉMICA TALA", ubicacion:"https://goo.gl/maps/xt65kiAaVrXi7zRp9", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-tala.jpg",  direccion:"Avenida Tecnológico S/N Tala, Jalisco.", telefonoPrincipal:"tel:384-73-33000", telefono:"384-73-33000, Vinculación: 217, 219 Control Escolar: 206, 236"},
        {nombre:"UNIDAD ACADÉMICA TAMAZULA", ubicacion:"https://goo.gl/maps/ETW7j4GSFmyFiVk66", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-tamazula.jpg",  direccion:"Carretera Tamazula Santa Rosa 329 Tamazula de Gordiano, Jalisco.", telefonoPrincipal:"tel:358-10-30060", telefono:"358-10-30060, Vinculación: 1022, 1023, 1029 Control Escolar: 1012, 1013"},
        {nombre:"UNIDAD ACADÉMICA TEQUILA", ubicacion:"https://goo.gl/maps/HUfNV1FDpKvn662JA", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-tequila.jpg",  direccion:"Dr. Joel Magallanes Rubio 501 Tequila, Jalisco.", telefonoPrincipal:"tel:37-47-42-72-88", telefono:"37-47-42-72-88, Vinculación: 1012, 1030 Control Escolar: 1019"},
        {nombre:"UNIDAD ACADÉMICA ZAPOTLANEJO", ubicacion:"https://goo.gl/maps/B3N8Gt7jdvbik2VR9  ", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-zapotlanejo.jpg",  direccion:"Carretera Libre Zapotlanejo-Tepatitlán Km 4.5 Av. Tecnológica No.300 Predio Huejotitán, Zapotlanejo, Jalisco.", telefonoPrincipal:"tel:373-73-56060", telefono:"373-73-56060, Vinculación: 14118, Control Escolar: 14130"},
        {nombre:"UNIDAD ACADÉMICA ZAPOPAN", ubicacion:"https://goo.gl/maps/x88Fo8KtjLqamwY86", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/campus-zapopan.jpg",  direccion:"Camino Arenero 1101 Zapopan, Jalisco.", telefonoPrincipal:"tel:36-82-11-80", telefono:"36-82-11-80, Vinculación: 153, Control Escolar: 141"},
        {nombre:"DIRECCIÓN GENERAL", ubicacion:"https://goo.gl/maps/ig3ReNArGwW8qra26", imagen:"http://tecmm.edu.mx/imagesReact/images/campus/direccion-general.jpg",  direccion:"Camino Arenero 1101, Edificio de Dirección General, Zapopan, Jalisco.", telefonoPrincipal:"tel:38-84-94-70", telefono:"38-84-94-70"},
      ]
    }
  }

  render(){
    return(
      <div className="div-principal-contacto">
        <MenuCentral/>

        <div className="div-directorio">
          <div class="ui items">
            {this.state.directorio.map((it)=>(
              <DirectorioItem nombre={it.nombre} ubicacion={it.ubicacion} imagen={it.imagen} direccion={it.direccion} telefono={it.telefono} telefonoPrincipal={it.telefonoPrincipal}/>
            ))}
          </div>
        </div>

        <LinksFooter/>

      </div>
    );
  }
}

const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Contacto, options);
