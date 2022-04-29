import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import {withGetScreen} from 'react-getscreen'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/noticia.css';



class Noticia extends Component {
  constructor(){
    super();
    this.state={
      noticias:[],
      showInfo: "block",
      show:false,
      tiulo:"",
      pathTitulo:"",
      contenido:[],
      imagenPrincipal:"",
      imagenesExtra:[],
      imagenExtraSeleccionada:"2",
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.buttonMostrarInfo = this.buttonMostrarInfo.bind(this);
  }

  componentWillMount(){
    const url = 'https://dashboard.tecmm.edu.mx/dashboardScript.php'
    axios.get(url, {params:{action:"getNoticias"}}).then(response => response.data)
    .then((data) => {


      for(var i=0; i<data.length; i++){
        if(data[i].pathTitulo == this.props.match.params.noticiaNombre){
          //console.log(JSON.parse(data[i].contenido))
          this.setState({
            titulo:data[i].titulo,
            pathTitulo:data[i].pathTitulo,
            contenido:JSON.parse(data[i].contenido),
            imagenPrincipal:data[i].imagenPrincipal,
            imagenesExtra:JSON.parse(data[i].imagenesExtra),
            showInfo:"none",
            noticias:data,
          })
        }else{

        }
      }

    })

  }

  buttonMostrarInfo(){
    console.log("state noticias: ", this.state.noticias)
  }

  show(e, key) {
    //alert(e)
    this.setState({
      show: true,
      imagenExtraSeleccionada:e,
    });
  }

  hide() {
    this.setState({ show: false });
  }

  render() {

    const divInfo={
      display:this.state.showInfo,
      backgroundColor:"#6D356C",
    }

    return (
      <div className="div-principalNoticia">
        <MenuCentral/>

          <div className="noticiaContainer">

            <div className="noticiaData">
              <div className="titleContainer">
                <h1 className="h1-tituloNoticia">{this.state.titulo}</h1>
                <img className="img-imagenPrincipal" src={this.state.imagenPrincipal}/>
              </div>

              <div className="div-contenidoNoticia">
                {this.state.contenido.map((it)=>(
                  it.tipo == "parrafo"?(
                    <p className="p-subtituloNoticia">{ReactHtmlParser(it.texto)}</p>
                  ):(
                    <h2 className="h2-subtituloNoticia">{it.texto}</h2>
                  )
                ))}
              </div>

              <div className="div-imagenesExtra">
                {this.state.imagenesExtra.map((it, key)=>(
                  it == "Hubo un error al subir el archivo!"?(
                    <div>
                    </div>
                  ):(
                    <img onClick={this.show.bind(this, key)}  src={it}/>
                  )
                ))}
              </div>
            </div>

            <div className="noticiaTimeline">
              <h1>MAS NOTICIAS</h1>
              <div className="noticias">
                {this.state.noticias.map((it)=>(
                  <div className="timelineItem">
                    <h1>{it.titulo}</h1>
                    <a>ver mas<i class="arrow right icon"></i></a>
                  </div>
                ))}
              </div>
            </div>

          </div>

        <LinksFooter/>

        {this.props.isMobile() || this.props.isTablet()?(
          <Rodal  width="350" height="250" visible={this.state.show} onClose={this.hide.bind(this)}>
            <div>
              <Carousel
                width="100%"
                showIndicators={true}
                showStatus={true}
                showArrows={true}
                showThumbs={false}
                selectedItem={this.state.imagenExtraSeleccionada}
                autoPlay
                infiniteLoop
                emulateTouch
                >
                {this.state.imagenesExtra.map((it)=>(
                  it == "Hubo un error al subir el archivo!"?(
                    <div>
                    </div>
                  ):(
                    <img  src={it}/>
                  )
                ))}
              </Carousel>
            </div>
          </Rodal>
        ):(

          <Rodal  width="900" height="600" visible={this.state.show} onClose={this.hide.bind(this)}>
            <div>
              <Carousel
                width="100%"
                height="100%"
                showIndicators={true}
                showStatus={true}
                showArrows={true}
                showThumbs={false}
                selectedItem={this.state.imagenExtraSeleccionada}
                autoPlay
                infiniteLoop
                emulateTouch
                >
                {this.state.imagenesExtra.map((it)=>(
                  it == "Hubo un error al subir el archivo!"?(
                    <div>
                    </div>
                  ):(
                    <img className="imagenExtraCarousel" src={it}/>
                  )
                ))}
              </Carousel>
            </div>
          </Rodal>
        )}



      </div>
    );
  }
}





const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Noticia, options);
