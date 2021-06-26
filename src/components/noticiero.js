import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen'
import Slider from "react-slick";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/noticiero.css';

class Noticiero extends Component {

  constructor(){
    super();
    this.state={
      selected : 0,
      noticiasArray : [],
      showProgress:"block",

      tiulo:"",
      pathTitulo:"",
      contenido:[],
      imagenPrincipal:"",
      imagenesExtra:[],
    }
  }

  componentWillMount(){

    const url = 'https://dashboard.tecmm.edu.mx/dashboardScript.php'
    axios.get(url, {params:{action:"getNoticias"}}).then(response => response.data)
    .then((data) => {
      var noticiasFinal=[]

      for(var i=data.length-1; i>=0;){

        noticiasFinal.push(data[i])

        this.setState({ noticiasArray: noticiasFinal })

        i--
      }

      console.log(noticiasFinal)
    })
  }



  render() {


      if(this.props.isMobile()){
        const settings = {
          dots:false,
          infinite: true,
          speed: 900,
          slidesToShow: 2,
          slidesToScroll: 2
        };

     return (
       <div className="div-principalNoticiero">
         <h2>NOTICIAS TECMM</h2>
         <Slider  {...settings}>
           {this.state.noticiasArray.map((it)=>(
             <Link to={{
                     pathname:"/Noticia/"+it.pathTitulo,
                     noticiaProps:{
                       pathTitulo:it.pathTitulo
                     }
                   }}>
             <div className="div-noticiaItem">
              <img src={it.imagenPrincipal}/>
              <div className="div-tituloNoticia">{it.titulo.slice(0, 50)+"..."}</div>
             </div>
             </Link>
           ))}
         </Slider>
       </div>
     );

   }else if(this.props.isTablet()){
        const settings = {
          dots:false,
          infinite: true,
          speed: 900,
          slidesToShow: 3,
          slidesToScroll: 2
        };

        return (
          <div className="div-principalNoticiero">
            <h2>NOTICIAS TECMM</h2>
            <Slider  {...settings}>
              {this.state.noticiasArray.map((it)=>(
                <Link to={{
                        pathname:"/Noticia/"+it.pathTitulo,
                        noticiaProps:{
                          pathTitulo:it.pathTitulo
                        }
                      }}>
                  <div className="div-noticiaItem">
                   <img src={it.imagenPrincipal}/>
                   <div className="div-tituloNoticia">{it.titulo.slice(0, 50)+"..."}</div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        );
      }else{
        const settings = {
          dots:false,
          infinite: true,
          speed: 900,
          slidesToShow: 4,
          slidesToScroll: 2
        };

        return (
          <div className="div-principalNoticiero">
            <h2>NOTICIAS TECMM</h2>
            <Slider  {...settings}>
              {this.state.noticiasArray.map((it)=>(
                <Link to={{
                        pathname:"/Noticia/"+it.pathTitulo,
                        noticiaProps:{
                          pathTitulo:it.pathTitulo
                        }
                      }}>
                  <div className="div-noticiaItem">
                   <img src={it.imagenPrincipal}/>
                   <div className="div-tituloNoticia">{it.titulo.slice(0, 50)+"..."}</div>
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        );
      }
   }
 }


const options = {mobileLimit: 420, tabletLimit: 1025}
export default withGetScreen(Noticiero, options);
