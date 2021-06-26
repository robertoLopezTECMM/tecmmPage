import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import styled, { keyframes } from 'styled-components';
import { Grid, Image } from 'semantic-ui-react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import Rodal from 'rodal';

import 'rodal/lib/rodal.css';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';





import './styles/eneit.css'

class Eneit extends Component{
  constructor(){
    super()
    this.state={
      visible:false,
      lugaresMedicos:[
        {lugar:"Farmacias del Ahorro", link:'https://www.google.com/maps/place/Farmacias+del+Ahorro/@20.651106,-105.240439,4162m/data=!3m1!1e3!4m5!3m4!1s0x0:0x621995061715f6eb!8m2!3d20.6511055!4d-105.240439?hl=es'},
        {lugar:"Farmacia Guadalajara", link:'https://www.google.com/maps/place/Farmacia+Guadalajara/@20.655095,-105.237098,4162m/data=!3m1!1e3!4m5!3m4!1s0x0:0x1476dc93f2bc05e6!8m2!3d20.6550949!4d-105.2370978?hl=es'},
        {lugar:"Farmacia Benavides", link:'https://www.google.com/maps/place/Farmacia+Benavides/@20.654224,-105.235738,4162m/data=!3m1!1e3!4m5!3m4!1s0x0:0xf11759257b118cd9!8m2!3d20.6542241!4d-105.2357382?hl=es'},
        {lugar:"Hospital San Javier", link:'https://www.google.com/maps/place/Hospital+San+Javier+Puerto+Vallarta/@20.652137,-105.240176,4162m/data=!3m1!1e3!4m5!3m4!1s0x0:0x7b7bc4975fc669f9!8m2!3d20.6521374!4d-105.2401758?hl=es'},
        {lugar:"IMSS Hospital General Zona 42", link:'https://www.google.com/maps/place/IMSS+Hospital+General+de+Zona+42/@20.638051,-105.231875,4162m/data=!3m1!1e3!4m5!3m4!1s0x0:0x6d6de1a7208deedf!8m2!3d20.6380511!4d-105.2318754?hl=es'},
        {lugar:"Hospital Naval", link:'https://www.google.com/maps/place/Hospital+Naval+Puerto+Vallarta+Jalisco/@20.66145,-105.244405,4161m/data=!3m1!1e3!4m5!3m4!1s0x0:0x93fe6940a29cd94b!8m2!3d20.66145!4d-105.244405?hl=es'},
      ],
      lugaresTiendas:[
        {lugar:"OXXO 1", link:'https://www.google.com/maps/place/OXXO/@20.651658,-105.241165,520m/data=!3m1!1e3!4m5!3m4!1s0x0:0x330d6c9f4b576f3e!8m2!3d20.6516581!4d-105.2411648?hl=es'},
        {lugar:"OXXO 2", link:'https://www.google.com/maps/place/oxxo/@20.651897,-105.240515,520m/data=!3m1!1e3!4m5!3m4!1s0x0:0x326c1fa3f5a6bd69!8m2!3d20.6518968!4d-105.2405148?hl=es'},
        {lugar:"OXXO 3", link:'https://www.google.com/maps/place/Oxxo+Icon/@20.649657,-105.242102,260m/data=!3m1!1e3!4m5!3m4!1s0x0:0x385bac4bbc40af92!8m2!3d20.6496567!4d-105.2421022?hl=es'},
        {lugar:"Walmart", link:'https://www.google.com/maps/place/Walmart+Pitillal/@20.656521,-105.238186,4162m/data=!3m1!1e3!4m5!3m4!1s0x0:0x5238addc76be589a!8m2!3d20.6565206!4d-105.2381858?hl=es'},
        {lugar:"Soriana", link:'https://www.google.com/maps/place/Soriana+S%C3%BAper+Playa+de+Oro/@20.650667,-105.241864,4162m/data=!3m1!1e3!4m5!3m4!1s0x0:0xbc229b3d3444723!8m2!3d20.6506674!4d-105.2418635?hl=es'},
      ],
      lugaresRestaurantes:[
        {lugar:"Restaurant Jardin Del Sol", link:'https://www.google.com/maps/place/Restaurant+Jardin+Del+Sol/@20.650303,-105.242435,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0x44e7b7ef5894b1bd!8m2!3d20.650303!4d-105.242435?hl=es'},
        {lugar:"Los Girasoles", link:'https://www.google.com/maps/place/Los+Girasoles/@20.653091,-105.236015,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0x25424a84d66531f5!8m2!3d20.6530914!4d-105.2360146?hl=es'},
        {lugar:"Pollo Feliz", link:'https://www.google.com/maps/place/Pollo+Feliz/@20.653977,-105.235763,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0xa28849849d2de3cb!8m2!3d20.6539766!4d-105.2357625?hl=es'},
        {lugar:"Mr. Burguer", link:'https://www.google.com/maps/place/Mr.Burguer/@20.654206,-105.235994,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0x6bd8196a6f1a9b7a!8m2!3d20.6542064!4d-105.2359939?hl=es'},
        {lugar:"Buffet King", link:'https://www.google.com/maps/place/Buffet+King/@20.654706,-105.236293,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0xaacc9458e561f338!8m2!3d20.6547063!4d-105.2362933?hl=es'},
        {lugar:"Mochi", link:'https://www.google.com/maps/place/Mochi/@20.654809,-105.231286,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0xe387a7bbd57c1b71!8m2!3d20.6548092!4d-105.2312856?hl=es'},
        {lugar:"Outback Steakhouse", link:'https://www.google.com/maps/place/Outback+Steakhouse/@20.649516,-105.239158,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0x5237702eb30b2a47!8m2!3d20.6495157!4d-105.2391582?hl=es'},
        {lugar:"Tacos Candora", link:'https://www.google.com/maps/place/Tacos+Candora/@20.649921,-105.242247,1040m/data=!3m1!1e3!4m5!3m4!1s0x0:0x8bc8600c9fc79af2!8m2!3d20.6499211!4d-105.2422468?hl=es'},
        {lugar:"SubWay", link:'https://www.google.com/maps/place/Subway/@20.644088,-105.238413,1040m/data=!3m1!1e3!4m5!3m4!1s0x0:0x4717e915dc9ab1de!8m2!3d20.6440878!4d-105.238413?hl=es'},
        {lugar:"La Palapa Restaurant Buffet", link:'https://www.google.com/maps/place/La+Palapa+Restaurant+Buffet/@20.651428,-105.243774,1040m/data=!3m1!1e3!4m5!3m4!1s0x0:0x361b849c627c7af6!8m2!3d20.651428!4d-105.2437737?hl=es'},
        {lugar:"Vips La Isla Puerto Vallarta", link:'https://www.google.com/maps/place/Vips+La+Isla+Puerto+Vallarta/@20.644803,-105.237771,1040m/data=!3m1!1e3!4m5!3m4!1s0x0:0xe5f5a39d1601b3ae!8m2!3d20.6448029!4d-105.2377705?hl=es'},
      ],
      lugaresRecreacion:[
        {lugar:"NNB Plaza Peninsula", link:'https://www.google.com/maps/place/NNB+Plaza+Peninsula/@20.646338,-105.239217,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0x55ec00fa513e462f!8m2!3d20.646338!4d-105.239217?hl=es'},
        {lugar:"La Isla Shopping Village", link:'https://www.google.com/maps/place/La+Isla+Shopping+Village/@20.644504,-105.238213,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0x396c5356930853d6!8m2!3d20.6445035!4d-105.2382128?hl=es'},
        {lugar:"Plaza Caracol", link:'https://www.google.com/maps/place/Plaza+Caracol/@20.640908,-105.233117,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0xe8707dbaf58af40b!8m2!3d20.6409083!4d-105.2331174?hl=es'},
        {lugar:"Galerias Vallarta", link:'https://www.google.com/maps/place/Galerias+Vallarta/@20.657773,-105.239948,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0x1438980c8ea4de60!8m2!3d20.6577725!4d-105.2399482?hl=es'},
        {lugar:"Malecón Puerto Vallarta", link:'https://www.google.com/maps/place/Malec%C3%B3n+Puerto+Vallarta/@20.61177,-105.234357,16651m/data=!3m1!1e3!4m5!3m4!1s0x0:0x76bd29415031f60e!8m2!3d20.6117696!4d-105.234357?hl=es'},

      ],
      lugaresBancos:[
        {lugar:"BBVA Bancomer", link:'https://www.google.com/maps/place/BBVA+Bancomer+Villa+Vallarta/@20.633919,-105.230452,1041m/data=!3m1!1e3!4m5!3m4!1s0x0:0x5a8db35fdd6eab28!8m2!3d20.6339189!4d-105.2304515?hl=es'},
        {lugar:"Santander", link:'https://www.google.com/maps/place/Santander/@20.6344373,-105.2306051,2078m/data=!3m1!1e3!4m5!3m4!1s0x0:0xa6367425082cb728!8m2!3d20.634959!4d-105.231184?hl=es'},
        {lugar:"Banorte", link:'https://www.google.com/maps/place/Grupo+Financiero+Banorte+Sucursal/@20.633242,-105.230087,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0x9b0cd9d3559ce160!8m2!3d20.633242!4d-105.230087?hl=es'},
        {lugar:"HSBC", link:'https://www.google.com/maps/place/HSBC/@20.64131,-105.232746,4162m/data=!3m1!1e3!4m5!3m4!1s0x0:0xb58c398742a8bc01!8m2!3d20.6413095!4d-105.2327461?hl=es'},
        {lugar:"Banamex", link:'https://www.google.com/maps/place/Banamex/@20.647089,-105.239464,2081m/data=!3m1!1e3!4m5!3m4!1s0x0:0x30c0ac15048869d6!8m2!3d20.6470891!4d-105.239464?hl=es'},

      ],
      servicioActual:[],
      participantes:[
        {lugar:"TECMM", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/TECMM.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITAguascalientes.png'},
        {lugar:"I.T. Apatzingan", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITApatzingan.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITBahiaBanderas.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITCelaya.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITCiudadGuzman.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITCoalcoman.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITColima.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITCostaGrande.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITJiquilpan.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITLaPiedad.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITLazaroCardenas.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITLeon.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITLLano.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITLoreto.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITLosReyes.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITMazatlan.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITMorelia.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITNochistlan.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITNorteNayarit.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITOcotlan.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITPabellonArteaga.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITParuandiro.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITPatzcuaro.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITPurhepecha.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITPurisimaRincon.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITSurNayarit.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITTacambaro.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITTepic.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITTlajomulco.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITUruapan.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITValleMorelia.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITZacatecasSur.png'},
        {lugar:"I.T. Aguascalientes", link:'http://tecmm.edu.mx/imagesReact/images/eneit/participantes/ITZamora.png'},

      ],
      areasParticipacion:[
        {area:"aeronautica", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/AERONAUTICA.png'},
        {area:"agroindustria", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/AGROINDUSTRIAS.png'},
        {area:"automotriz", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/AUTOMOTRIZ.png'},
        {area:"automatizacion", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/AUTOMATIZACION.png'},
        {area:"ciencias", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/CIENCIAS.png'},
        {area:"educacion", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/EDUCACION.png'},
        {area:"energia", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/ENERGIA.png'},
        {area:"nanotecnologia", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/NANOTECNOLOGIA.png'},
        {area:"salud", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/SALUD.png'},
        {area:"tecnologias", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/TECNOLOGIAS.png'},
      ],
      categoriasGanadores:[
        {area:"alimentos", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/AERONAUTICA.png'},
        {area:"innovacionSocial", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/AGROINDUSTRIAS.png'},
        {area:"proceso", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/AUTOMOTRIZ.png'},
        {area:"productoServicio", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/AUTOMATIZACION.png'},
        {area:"software", image:'http://tecmm.edu.mx/imagesReact/images/eneit/areas/CIENCIAS.png'},
      ],

      ganadores:[
        {area:"alimentos", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"primerLugar"},
        {area:"alimentos", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"segundoLugar"},
        {area:"alimentos", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"tercerLugar"},

        {area:"innovacionSocial", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"primerLugar"},
        {area:"innovacionSocial", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"segundoLugar"},
        {area:"innovacionSocial", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"tercerLugar"},

        {area:"proceso", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"primerLugar"},
        {area:"proceso", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"segundoLugar"},
        {area:"proceso", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"tercerLugar"},

        {area:"productoServicio", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"primerLugar"},
        {area:"productoServicio", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"segundoLugar"},
        {area:"productoServicio", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"tercerLugar"},

        {area:"software", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"primerLugar"},
        {area:"software", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"segundoLugar"},
        {area:"software", proyecto:"nombreProyectoGanador", institucion:"institucion", integrantes:"integrante1, integrante2, integrante3", puesto:"tercerLugar"},

      ],

      mapa:"",
    }
    this.clickServicio = this.clickServicio.bind(this);
    this.clickLugar = this.clickLugar.bind(this);
    this.clickAreaGanadores = this.clickAreaGanadores.bind(this);
  }

  clickLugar(evt, lugar){
    console.log(evt)
    this.setState({
      mapa:evt
    })
  }

  clickServicio(evt){
    console.log(evt.target.id)

    switch(evt.target.id){
      case "hospitales":
        this.setState({
          servicioActual:this.state.lugaresMedicos,
        })
      break;

      case "bancos":
        this.setState({
          servicioActual:this.state.lugaresBancos,
        })
      break;

      case "recreacion":
        this.setState({
          servicioActual:this.state.lugaresRecreacion,
        })
      break;

      case "tiendas":
        this.setState({
          servicioActual:this.state.lugaresTiendas,
        })
      break;

      case "restaurantes":
        this.setState({
          servicioActual:this.state.lugaresRestaurantes,
        })
      break;
    }
  }

  clickAreaGanadores(evt){
    switch (evt.target.id) {
      case "alimentos":
          alert("alimentos")
        break;

      case "innovacionSocial":
          alert("innovacionSocial")
        break;

      case "proceso":
          alert("proceso")
        break;

      case "productoServicio":
          alert("productoServicio")
        break;

      case "software":
          alert("software")
        break;

      default:

    }
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
      this.setState({ visible: false });
  }

  render(){

    const display={
      display:"block"
    }




    return(
      <div>


        <Rodal width="700" height="500" visible={this.state.visible} onClose={this.hide.bind(this)}>
           <div>
            <img className="img-aviso" src="http://tecmm.edu.mx/imagesReact/images/eneit/logo-eneit.png"/>
           </div>

           <div className="div-aviso">
            <h1>¡¡¡ AVISO !!!</h1>
            <p>Por las condiciones de clima el evento social de hoy jueves a las 8 de la noche en la playa, se cambia a salón VALLARTA!</p>
            <h2>¡¡¡ LOS ESPERAMOS !!!</h2>
           </div>
        </Rodal>
        <div className="div-botones-eneit">
          <img className="img-logosGobierno" src="http://tecmm.edu.mx/imagesReact/images/eneit/logos-gobierno-blancos.png"/>

          <ul className="ul-botones-eneit">

            <li className="li-botones-eneit">
              <Link
                activeClass="active"
                to="evento"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <div>Evento</div>
              </Link>
            </li>

            <li className="li-botones-eneit">
              <Link
                activeClass="active"
                to="participantes"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <div>Participantes</div>
              </Link>
            </li>

            <li className="li-botones-eneit">
              <Link
                activeClass="active"
                to="ganadores"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <div>Ganadores</div>
              </Link>
            </li>

            <li className="li-botones-eneit">
              <Link
                activeClass="active"
                to="ponentes"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <div>Ponentes</div>
              </Link>
            </li>

            <li className="li-botones-eneit">
              <Link
                activeClass="active"
                to="programa"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <div>Programa</div>
              </Link>
            </li>

            <li className="li-botones-eneit">
              <Link
                activeClass="active"
                to="servicios"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <div>Servicios</div>
              </Link>
            </li>

            <li className="li-botones-eneit">
              <Link
                activeClass="active"
                to="hospedaje"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <div>Hospedaje</div>
              </Link>
            </li>

            <li className="li-botones-eneit">
              <Link
                activeClass="active"
                to="documentos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <div>Documentos</div>
              </Link>
            </li>
          </ul>
        </div>



        <div id="video" className="div-section1">

          <video autoplay="true" muted loop className="video-eneit">
            <source src="http://tecmm.edu.mx/imagesReact/images/eneit/Eneit-2019-TecMM.mp4" type="video/mp4"/>
            Your browser does not support HTML5 video.


          </video>
          <img style={display} className="img-gif" src="http://tecmm.edu.mx/imagesReact/images/eneit/logo-eneit-blanco-amarillo.png"/>

          <a target="_blank" href="http://tecmm.edu.mx/documentos/eneit/horarios-evaluacion-eneit-2019.pdf">
            <button className="button-descargaConvocatoria">Horarios de Evaluación <i class="download icon"></i> </button>
          </a>
        </div>


        <div id="evento" className="div-evento">
          <h2>EVENTO</h2>
          <Bounce>

            <p className="p-evento-descripcion">El <a>Tecnológico Nacional de México</a> designó al <a>Instituto Tecnológico José Mario Molina Pasquel y Henríquez Campus Puerto Vallarta,</a> como sede del Evento Nacional Estudiantil de Innovación Tecnológica 2019, Etapa Regional Zona 3.</p>
            <p className="p-evento-descripcion">En el marco del evento participarán mas de <a>170 proyectos</a> de <a>34 Institutos Tecnológicos</a> y <a>más de 1,000 estudiantes, asesores, jurados y ponentes.</a> </p>
          </Bounce>

          <div id="areasParticipacion">
            <Fade right>
              <h1 className="h1-evento-titulo">ÁREAS DE PARTICIPACIÓN</h1>
            </Fade>

            <div className="div-areasParticipacion">
              <Fade top cascade>
                <Grid.Row centered columns={4}>
                  {this.state.areasParticipacion.map((it)=>(
                    <Tada>
                      <img className="img-areas" src={it.image}/>
                    </Tada>
                  ))}
                </Grid.Row>
              </Fade>
            </div>

            <div id="reviveEneit">
              <h2>REVIVE ENEIT 2018</h2>
              <iframe className="iframe-eneit2018"  src="https://www.youtube.com/embed/MkSYS0DqnUU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

          </div>
        </div>




        <div id="participantes" className="div-evento">
          <h1>PARTICIPANTES</h1>
          <div className="div-gridParticipantes">

            <Grid.Row centered columns={4}>


                {this.state.participantes.map((it)=>(
                  <Tada>
                    <img className="img-participante" src={it.link}/>
                  </Tada>
                ))}


            </Grid.Row>

          </div>

        </div>


        <div id="ganadores" className="div-evento">
          <h1>GANADORES</h1>

          <div className="div-ganadores">
          <a target="_blank" href="http://tecmm.edu.mx/documentos/eneit/Ganadores%20absolutos.pdf">
            <div className="div-documentoGanadores">

              <h3>GANADORES ABSOLUTOS ENEIT 2019 ETAPA REGIONAL ZONA III</h3>
            </div>
          </a>

          <a target="_blank" href="http://tecmm.edu.mx/documentos/eneit/Acreditados%20Eneit.pdf">
            <div className="div-documentoGanadores">

              <h3>ACREDITADOS ENEIT 2019 ETAPA REGIONAL ZONA III</h3>
            </div>
          </a>
          </div>

        </div>



        <div id="ponentes" className="div-evento">
          <h2>PONENTES</h2>


          <div className="div-ponentes">

            <div id="secretario" class="ui card">
              <div class="image">
                <img src="http://tecmm.edu.mx/imagesReact/images/eneit/ponentes/alfonso-pompa-eneit-2019.jpeg"/>
              </div>
              <div class="content">
                <a class="header">Mtro. Alfonso Pompa Padilla</a>

                <div class="description">
                  Innovación, más que Tecnología
                </div>
              </div>

            </div>

            <Grid doubling columns={4}>

              <Grid.Row centered columns={4}>
                <div class="ui link cards">


                  <div id="ponente" class="card">
                    <div class="image">
                      <img src="http://tecmm.edu.mx/imagesReact/images/eneit/ponentes/jorge-robles-eneit-2019.jpg"/>
                    </div>
                    <div class="content">
                      <div class="header">Jorge Robles</div>
                     {/*<div class="meta">
                        <a>Friends</a>
                      </div>*/}
                      <div class="description">
                        Las cinco emociones del Internet of Things
                      </div>
                    </div>
                  </div>

                  <div id="ponente" class="card">
                    <div class="image">
                      <img src="http://tecmm.edu.mx/imagesReact/images/eneit/ponentes/vidal-paz-eneit-2019.jpeg"/>
                    </div>
                    <div class="content">
                      <div class="header">Vidal Paz</div>
                      {/*<div class="meta">
                        <span class="date">Coworker</span>
                      </div>*/}
                      <div class="description">
                        Big Data & Blockchain en las empresas
                      </div>
                    </div>
                  </div>

                  <div id="ponente" class="card">
                    <div class="image">
                      <img src="http://tecmm.edu.mx/imagesReact/images/eneit/ponentes/felipe-ordonez-eneit-2019.jpeg"/>
                    </div>
                    <div class="content">
                      <div class="header">Alfonso Ordoñez</div>
                      {/*<div class="meta">
                        <span class="date">Coworker</span>
                      </div>*/}
                      <div class="description">
                        Perfil del emprendimiento en la agroindustria 4.0
                      </div>
                    </div>
                  </div>

                  <div id="ponente" class="card">
                    <div class="image">
                      <img src="http://tecmm.edu.mx/imagesReact/images/eneit/ponentes/Eduardo-iniguez-eneit-2019.jpeg"/>
                    </div>
                    <div class="content">
                      <div class="header">Eduardo Iñiguez</div>
                      {/*<div class="meta">
                        <a>Coworker</a>
                      </div>*/}
                      <div class="description">
                        Enactus México "El rol de los universitarios emprendedores en México"
                      </div>
                    </div>
                  </div>

                  <div id="ponente" class="card">
                    <div class="image">
                      <img src="http://tecmm.edu.mx/imagesReact/images/eneit/ponentes/luis-aguirre-eneit-2019.jpg"/>
                    </div>
                    <div class="content">
                      <div class="header">Luis Aguirre</div>
                      {/*<div class="meta">
                        <a>Coworker</a>
                      </div>*/}
                      <div class="description">
                        Para emprender hay que vender
                      </div>
                    </div>
                  </div>

                  <div id="ponente" class="card">
                    <div class="image">
                      <img src="http://tecmm.edu.mx/imagesReact/images/eneit/ponentes/martha-ibarra-eneit-2019.jpeg"/>
                    </div>
                    <div class="content">
                      <div class="header">Martha Ibarra</div>

                      <div class="description">
                        Tips para lograr un pitch de impacto
                      </div>
                    </div>
                  </div>

                  {/*<div id="ponente" class="card">
                    <div class="image">
                      <img src="http://tecmm.edu.mx/imagesReact/images/eneit/ponentes/jose-ramirez-eneit-2019.jpg"/>
                    </div>
                    <div class="content">
                      <div class="header">José Ramírez</div>

                      <div class="description">
                        Rocki El Robot Kinestésico
                      </div>
                    </div>
                  </div>*/}


                </div>
              </Grid.Row>

            </Grid>



          </div>
        </div>


        <div id="programa" className="div-evento">
          <h2>PROGRAMA</h2>
          <h3 style={{fontSize:"2.5vh", fontFamily:"Gotham-Ultra", color:"#f8af41"}}>LUGAR DEL EVENTO</h3>
          <h3 style={{fontSize:"2vh", fontFamily:"Gotham"}}><p style={{fontSize:"2vh", fontFamily:"Gotham-Ultra", color:"#6D356C"}}>HOTEL KRYSTAL</p>Avenida de las Garzas S/N, Zona Hotelera Norte Puerto Vallarta, Jalisco, México</h3>
          <h3 style={{fontSize:"2vh", fontFamily:"Gotham"}}><p style={{fontSize:"2vh", fontFamily:"Gotham-Ultra", color:"#6D356C"}}>HOTEL HILTON</p>Avenida de las Garzas 136-1, Zona Hotelera Norte Puerto Vallarta, Jalisco, México</h3>

          <div className="div-martes">
            <Bounce top cascade>
              <h1>MARTES 24 DE SEPTIEMBRE</h1>
              <table>
                <tr>
                  <th>Horario</th>
                  <th>Evento</th>
                  <th>Lugar</th>
                </tr>

                <tr>
                  <td>09:00 a 16:00</td>
                  <td>Registro de Participantes</td>
                  <td>Lobby de Salón Jalisco</td>
                </tr>

                <tr>
                  <td>09:00 a 19:00</td>
                  <td>Montaje de proyectos en los stands</td>
                  <td>Salón Jalisco</td>
                </tr>

                <tr>
                  <td>14:00 a 16:00</td>
                  <td>Comida</td>
                  <td>Libre</td>
                </tr>

                <tr>
                  <td>17:00 a 17:45</td>
                  <td>Reunión informativa con estudiantes y asesores de la categoría de HackaTec</td>
                  <td>Salón Vallarta</td>
                </tr>

                <tr>
                  <td>18:00</td>
                  <td>Arranque HackaTec</td>
                  <td>Salón Jalisco C</td>
                </tr>

                <tr>
                  <td>18:00 a 19:00</td>
                  <td>Reunión informativa con estudiantes y asesores</td>
                  <td>Salón Vallarta</td>
                </tr>

                <tr>
                  <td>19:00 a 21:00</td>
                  <td>Cena</td>
                  <td>Libre</td>
                </tr>
              </table>
            </Bounce>
          </div>


          <div className="div-miercoles">
          <Bounce top cascade>
            <h1>MIÉRCOLES 25 DE SEPTIEMBRE</h1>
            <table>
              <tr>
                <th>Horario</th>
                <th>Evento</th>
                <th>Lugar</th>
              </tr>

              <tr>
                <td>07:00 a 08:30</td>
                <td>Desayuno</td>
                <td>Libre</td>
              </tr>

              <tr>
                <td>09:00 a 10:00</td>
                <td>Eduardo Iñiguez<br/>Enactus México "El rol de los universitarios emprendedores en México"</td>
                <td>Salón Vallarta</td>
              </tr>


              <tr>
                <td>09:40 a 10:00</td>
                <td>José Ramírez<br/>Rocki El Robot Kinestésico </td>
                <td>Salón Vallarta</td>
              </tr>


              <tr>
                <td>10:00 a 11:00</td>
                <td>Martha Ibarra<br/>Tips para lograr un pitch de impacto</td>
                <td>Salón Vallarta</td>
              </tr>

              <tr>
                <td>11:00 a 11:45</td>
                <td>Jorge Robles<br/>Las cinco emociones del Internet of Things, Big Data y Blockchain en las empresas</td>
                <td>Salón Vallarta</td>
              </tr>

              <tr>
                <td>11:45 a 12:30</td>
                <td>Vidal Paz<br/>Big Data y Blockchain en las empresas</td>
                <td>Salón Vallarta</td>
              </tr>

              <tr>
                <td>12:30 a 13:15</td>
                <td>Luis Aguirre<br/>Para emprender hay que vender</td>
                <td>Salón Vallarta</td>
              </tr>

              <tr>
                <td>12:30 a 14:00</td>
                <td>Visitas guiadas a los stands programadas para instituciones superiores y empresarios</td>
                <td>Salón Jalisco</td>
              </tr>

              <tr>
                <td>13:15 a 14:00</td>
                <td>Alfonso Ordoñez<br/>Perfil del emprendimiento en la agroindustria 4.0</td>
                <td>Salón Vallarta</td>
              </tr>

              <tr>
                <td>14:00 a 15:30</td>
                <td>Comida</td>
                <td>Libre</td>
              </tr>

              <tr>
                <td>15:30 a 16:30</td>
                <td>Recorrido de las autoridades e invitados especiales a los stands</td>
                <td>Salón Jalisco</td>
              </tr>

              <tr>
                <td>16:30 a 17:10</td>
                <td>Ceremonia de inauguración y corte de listón</td>
                <td>Salón Vallarta</td>
              </tr>

              <tr>
                <td>17:00 a 18:30</td>
                <td>Visitas guiadas a los stands programadas para instituciones superiores y empresarios</td>
                <td>Salón Vallarta</td>
              </tr>

              <tr>
                <td>17:25</td>
                <td>Conferencia Magistral - Mtro. Alfonso Pompa Padilla<br/>Secretario de Innovación, Ciencia y Tecnología</td>
                <td>Salón Jalisco</td>
              </tr>

              <tr>
                <td>19:00 a 21:00</td>
                <td>Cena</td>
                <td>Libre</td>
              </tr>


            </table>
            </Bounce>
          </div>

          <div className="div-jueves">
            <Bounce top cascade>
              <h1>JUEVES 26 DE SEPTIEMBRE</h1>
              <table>
                <tr>
                  <th>Horario</th>
                  <th>Evento</th>
                  <th>Lugar</th>
                </tr>

                <tr>
                  <td>07:00 a 08:30</td>
                  <td>Desayuno</td>
                  <td>Libre</td>
                </tr>

                <tr>
                  <td>09:00 a 14:00</td>
                  <td>Evaluaciones presenciales en sala</td>
                  <td>SALA KRYSTAL 1<br/>
                      SALA KRYSTAL 2<br/>
                      SALÓN AGAVE<br/>
                      SALÓN BANDERAS<br/>
                      SALÓN TONALÁ<br/>
                      SALÓN VALLARTA<br/>
                  </td>
                </tr>

                <tr>
                  <td>14:00 a 16:00</td>
                  <td>Comida</td>
                  <td>Libre</td>
                </tr>

                <tr>
                  <td>16:00 a 18:00</td>
                  <td>Evaluaciones presenciales en stands</td>
                  <td>Salón Jalisco A y B</td>
                </tr>

                <tr>
                  <td>18:00</td>
                  <td>Cierre HackaTec</td>
                  <td>Salón Jalisco C</td>
                </tr>

                <tr>
                  <td>18:00</td>
                  <td>Desmontaje de stands</td>
                  <td>Salón Jalisco</td>
                </tr>

                <tr>
                  <td>20:00 a 22:00</td>
                  <td>Actividad social cultural</td>
                  <td>Playa Hoteles Hilton y Krystal</td>
                </tr>

              </table>
            </Bounce>
          </div>

          <div className="div-viernes">
            <Bounce top cascade>
              <h1>VIERNES 27 DE SEPTIEMBRE</h1>

              <table>
                <tr>
                  <th>Horario</th>
                  <th>Evento</th>
                  <th>Lugar</th>
                </tr>

                <tr>
                  <td>08:00 a 09:30</td>
                  <td>Desayuno</td>
                  <td>Libre</td>
                </tr>

                <tr>
                  <td>10:00 a 11:00</td>
                  <td>Ceremonia de premiación y clausura</td>
                  <td>Salón Vallarta</td>
                </tr>

              </table>
            </Bounce>
          </div>

        </div>

        <div id="servicios" className="div-evento">
          <h2>SERVICIOS</h2>
          <div className="div-servicios">
            <Zoom top>
              <img id="hospitales" onClick={this.clickServicio.bind(this)} src="http://tecmm.edu.mx/imagesReact/images/eneit/HOSPITALES.jpg"/>
            </Zoom>

            <Zoom bottom>
              <img id="bancos" onClick={this.clickServicio.bind(this)} src="http://tecmm.edu.mx/imagesReact/images/eneit/BANCOS.jpg"/>
            </Zoom>

            <Zoom top>
              <img id="recreacion" onClick={this.clickServicio.bind(this)} src="http://tecmm.edu.mx/imagesReact/images/eneit/RECREACION.jpg"/>
            </Zoom>

            <Zoom bottom>
              <img id="tiendas" onClick={this.clickServicio.bind(this)} src="http://tecmm.edu.mx/imagesReact/images/eneit/TIENDAS.jpg"/>
            </Zoom>

            <Zoom top>
              <img id="restaurantes" onClick={this.clickServicio.bind(this)} src="http://tecmm.edu.mx/imagesReact/images/eneit/RESTAURANTES.jpg"/>
            </Zoom>
          </div>

          <div className="div-servicios-lugares">

            <ul>
              {this.state.servicioActual.map((it)=>(
                <Bounce top>
                  <li>
                    <a target="_blank" href={it.link}>
                      <h1 className="h1-lugarServicios" id={it.lugar} onClick={this.clickLugar.bind(this, it.link)}>{it.lugar}  <i class="map outline icon"></i></h1>
                    </a>
                  </li>
                </Bounce>
              ))}
            </ul>

          </div>

        </div >

        <div id="hospedaje" className="div-evento">

          <h1>HOSPEDAJE</h1>
          <div className="div-hoteles">
            <Fade left cascade>
              <div className="div-krystal">
                <h2>Hotel Krystal</h2>
                <p>Avenida de las Garzas S/N <br/> Zona Hotelera Norte <br/> Puerto Vallarta, Jalisco, Mexico <br/> Tel: 52(322)226-0700 / 01800 KRYSTAL (5797 825) <br/> www.krystal-hotels.com</p>
                <h2>PLAN TODO INCLUIDO POR PERSONA</h2>
                <p>(Hospedaje, Desayuno, Comida y cena)</p>
                <h2>CÓDIGO DE RESERVACION: <a>ENEIT</a></h2>
                <h2>PRECIOS</h2>

                <p>Doble: $1,349.00 (p/p)<br/>Sencilla: $2,249.00 (p/p)<br/>Alimentos para HACKATEC: $200.00 (p/p)</p>

                <img src="http://tecmm.edu.mx/imagesReact/images/eneit/hoteles/krystal-1.jpg"/>
                <img src="http://tecmm.edu.mx/imagesReact/images/eneit/hoteles/krystal-2.jpg"/>

              </div>
            </Fade>

            <Fade right cascade>
              <div className="div-hilton">
                <h2>Hotel Hilton</h2>
                <p>Avenida de las Garzas 136-1 <br/> Zona Hotelera Norte, 48333 <br/> Puerto Vallarta, Jalisco, Mexico <br/> Tel: 32-21-76-11-77 (Horario exclusivo de 09:00 a 19:00)  <br/> www.hiltonpvr.com</p>
                <h2>PLAN TODO INCLUIDO POR PERSONA</h2>
                <p>(Hospedaje, Desayuno, Comida y cena)</p>
                <h2>CÓDIGO DE RESERVACION: <a>ENEIT 2019</a></h2>
                <h2>PRECIOS</h2>
                <p>Doble: $1,500.00 (p/p)<br/>Sencilla: $2,700.00 (p/p)<br/><br/></p>

                <img id="img-hilton" src="http://tecmm.edu.mx/imagesReact/images/eneit/hoteles/hilton-1.jpg"/>
                <img id="img-hilton" src="http://tecmm.edu.mx/imagesReact/images/eneit/hoteles/hilton-2.jpg"/>
              </div>
            </Fade>

          </div>
        </div>

        <div id="documentos" className="div-evento">

          <h2>DOCUMENTOS</h2>

          {/*<div class="ui three column grid">
            <div class="column">
              <div class="ui fluid card">
                <div class="image">
                  <i class="file alternate outline icon"></i>
                </div>
                <div class="content">
                  <a class="header">CONVOCATORIA ENEIT 2019</a><br/>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="ui fluid card">
                <div class="image">
                  <img src="/images/avatar/large/helen.jpg"/>
                </div>
                <div class="content">
                  <a class="header">CONVOCATORIA HACKATEC 2019</a>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="ui fluid card">
                <div class="image">
                  <img src="/images/avatar/large/elliot.jpg"/>
                </div>
                <div class="content">
                  <a class="header">MANUAL ENEIT 2019</a><br/>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="ui fluid card">
                <div class="image">
                  <img src="/images/avatar/large/elliot.jpg"/>
                </div>
                <div class="content">
                  <a class="header">CIRCULARES ENEIT 2019</a><br/>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="ui fluid card">
                <div class="image">
                  <img src="/images/avatar/large/elliot.jpg"/>
                </div>
                <div class="content">
                  <a class="header">ORGANIGRAMA</a><br/>
                </div>
              </div>
            </div>

          </div>*/}

          <div className="div-documentos">

            <div className="div-documento">
              <a target="_blank" href="http://tecmm.edu.mx/documentos/eneit/convocatoria-eneit-2019.pdf">
                <i class="file alternate outline icon"></i>
                <h3>CONVOCATORIA ENEIT 2019</h3>
              </a>
            </div>

            <div className="div-documento">
              <a target="_blank" href="http://tecmm.edu.mx/documentos/eneit/manual-eneit-2019.pdf">
                <i class="file alternate outline icon"></i>
                <h3>MANUAL ENEIT 2019</h3>
              </a>
            </div>

            <div className="div-documento">
              <a target="_blank" href="http://tecmm.edu.mx/documentos/eneit/horarios-evaluacion-eneit-2019.rar">
                <i class="file alternate outline icon"></i>
                <h3>HORARIOS DE EVALUACIÓN</h3>
              </a>
            </div>

            <div className="div-documento">
              <a target="_blank" href="http://tecmm.edu.mx/documentos/eneit/programa-eneit-2019.pdf">
                <i class="file alternate outline icon"></i>
                <h3>PROGRAMA ENEIT 2019</h3>
              </a>
            </div>


          </div>

        </div>








      </div>
    )
  }
}

export default Eneit;
