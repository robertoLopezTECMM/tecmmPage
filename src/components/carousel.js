import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import './styles/carousel.css';


  class CarouselItem extends Component{

    constructor(props){
      super();
    }


    render(){
      return(
        <div>
          <a href={this.props.link}>
            <div style={{width:"100%", height:"100%"}}>
              <img style={{height:"100%"}}  src={this.props.image}/>
            </div>
          </a>
        </div>
      );
    }
  }


  class CarouselComponent extends Component {


    constructor(props){
      super();
      this.state={
        modalVisible : false,
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


    render(){
      return(

        <div className="div-principal-carouselComponent">

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
                  <CarouselItem link={it.link} image={it.ref_banner}/>
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
