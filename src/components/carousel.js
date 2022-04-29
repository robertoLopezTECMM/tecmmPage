import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import './styles/carousel.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import YouTube from 'react-youtube';

  class CarouselItem extends Component{

    constructor(props){
      super();
      this.state={
        visible:false
      }
    }
    show() {
      if(this.props.link == "onClick"){
        this.setState({ visible: true });
      }
    }
  
    hide() {
        this.setState({ visible: false });
    }
    _onReady(event) {
     event.target.pauseVideo();
   }

    render(){
    const opts = {
      height: '500',
      width: '750',
      playerVars: {
        autoplay: 1
      }
    };
      return(
        <>
      <Rodal width="800" height="550" visible={this.state.visible} onClose={this.hide.bind(this)}>
        <div>
          <YouTube
            videoId={(this.state.institucional) ? this.state.videoInstitucional :this.state.youtube}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
      </Rodal>
        <div >
          <a href={(this.props.link == "onClick")? "#": this.props.link} >
            <div style={{width:"100%", height:"100%"}}>
              <img style={{height:"100%"}}  src={this.props.image}/>
            </div>
          </a>
        </div>
        </>
      );
    }
  }


  class CarouselComponent extends Component {


    constructor(props){
      super();
      this.state={
        visible : false,
        banners:[
          //{ref_banner:"http://dashboard.tecmm.edu.mx/bannersCarousel/2020-01-28-aceptados%202020.jpg", link:"http://dashboard.tecmm.edu.mx/documentosCarousel/2020-01-28-lista%20de%20aceptados%20presencial%20y%20distancia%20tecmm%202020.pdf"},

          //{ref_banner:"http://dashboard.tecmm.edu.mx/bannersCarousel/2020-01-20-banner-condonaciones.jpg", link:""},
          //{ref_banner:"http://dashboard.tecmm.edu.mx/bannersCarousel/2019-12-17-condonacioneswebfebjul2019.webp", link:"http://dashboard.tecmm.edu.mx/documentosCarousel/2019-12-17-convocatoria-de-condonaciones-tecmm-feb-jul-2020.pdf"},
          //{ref_banner:"http://dashboard.tecmm.edu.mx/bannersCarousel/2019-12-04-convocatoriasixsigma.webp", link:"http://dashboard.tecmm.edu.mx/documentosCarousel/2019-12-04-convocatoria lean six sigma yellow belt.pdf"},
          //{ref_banner:"http://dashboard.tecmm.edu.mx/bannersCarousel/leona-vicario.webp", link:""},
        ],
      }
    }

    componentWillMount() {
      const url = 'https://dashboard.tecmm.edu.mx/dashboardScript.php'
      axios.get(url, {params:{action:"getBanners", campus:"direccionGeneral"}}).then(response => response.data)
      .then((data) => {
        this.setState({
          banners: data
        })
        console.log(this.state.banners)
      })
    }

    show(link) {
      if(link == "onClick"){
        this.setState({ visible: true });
      }
    }

    hide() {
        this.setState({ visible: false });
    }

    _onReady(event) {
      event.target.pauseVideo();
    }

    render(){
      const opts = {
          height: '500',
          width: '750',
          playerVars: {
            autoplay: 1
          }
        };
      return(

        <div className="div-principal-carouselComponent">
                <Rodal width="800" height="550" visible={this.state.visible} onClose={this.hide.bind(this)}>
                <div>
                  <YouTube
                    videoId="Sj-Q4-2XerY"
                    id="videoBienvenida"
                    opts={opts}
                    onReady={this._onReady}
                  />
                </div>
              </Rodal>

          <div className="div-carousel-carouselComponent">
            <Carousel
              width="100%"
              showIndicators={false}
              showStatus={false}
              showArrows={true}
              showThumbs={false}
              autoPlay
              infiniteLoop
              emulateTouch
              >

                {this.state.banners.map((it)=>(
                  <div  onClick={()=>{this.show(it.link)}} >
                  <CarouselItem link={it.link == "onClick" ? "#": it.link} image={it.ref_banner}/>
                  </div> 
                ))}

            </Carousel>

            <div className="div-botonesCarousel">

              <a href="/ofertaAcademica">
                {/* <button  className="btn1Oferta">OFERTA<br/>ACADÉMICA</button> */}
                <button  className="btn2Campus">OFERTA<br/>ACADÉMICA</button>
              </a>

              <a href="/unidadesAcademicas">
                <button className="btn3Escolares">UNIDADES ACADÉMICAS</button>
              </a>

              {/* <a href="http://controlescolar.tecmm.edu.mx/">
                <button className="btn3Escolares">SERVICIOS<br/>ESCOLARES</button>
              </a> */}

            </div>

          </div>

        </div>
      );
    }
  }

export default CarouselComponent;
