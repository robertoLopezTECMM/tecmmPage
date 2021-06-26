import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import { ReactPhotoCollage } from "react-photo-collage";
import {withGetScreen} from 'react-getscreen'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import Rodal from 'rodal';

import './styles/festival.css';

class Festival extends Component {

  constructor(props) {
     super(props);
     this.state = {
       visible:true,
      collageAntecedentesWidth: "",
      collageAntecedentesHeight:[],
      disciplinas:[
        {disciplina:"Creación Literaria", descripcion:"Obras de los propios estudiantes, como pueden ser poemas, cuentos, ensayos o narrativas, también presentan leyendas regionales.", src:"http://tecmm.edu.mx/imagesReact/images/festival/disciplinas/creacion-festival.png"},
        {disciplina:"Danza", descripcion:"En esta disciplina se considera una amplia gama de danzas, desde la floklórica hasta ritmos y bailes contemporaneos.", src:"http://tecmm.edu.mx/imagesReact/images/festival/disciplinas/danza-festival.png"},
        {disciplina:"Musica", descripcion:"Se consideran todos los géneros musicales, desde la académica hasta la popular.", src:"http://tecmm.edu.mx/imagesReact/images/festival/disciplinas/musica-festival.png"},
        {disciplina:"Artes Plasticas", descripcion:"Dentro de las Artes Plásticas participantes se consideran la pintura, fotografía, escultura, dibujo y grabado.", src:"http://tecmm.edu.mx/imagesReact/images/festival/disciplinas/pintura-festival.png"},
        {disciplina:"Teatro", descripcion:"Las obras de teatro que se presentan en el Festival, algunas son de la autoría de los estudiantes y van desde la comedia hasta el drama; pasando por la farsa.", src:"http://tecmm.edu.mx/imagesReact/images/festival/disciplinas/teatro-festival.png"},
      ]
     }
   }

   componentWillMount(){
     if(this.props.isMobile()){
       this.setState({
         collageAntecedentesWidth:"300px",
         collageAntecedentesHeight:['100px', '100px']
       })
     }else{
       this.setState({
         collageAntecedentes:"500px",
         collageAntecedentesHeight:['200px', '200px']
       })
     }
   }

   show() {
     this.setState({ visible: true });
   }

   hide() {
       this.setState({ visible: false });
   }

  render() {

    const styles = {
      fontFamily: 'Menlo-Regular, Menlo, monospace',
      fontSize: 14,
      lineHeight: '10px',
      color: 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }

    const settingAntecedentes = {
      width: this.state.collageAntecedentesWidth,
      height: this.state.collageAntecedentesHeight,
      layout: [1, 3],
      photos: [
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes1-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes2-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes3-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes4-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes5-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes6-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes7-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes8-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes9-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes10-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes11-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes12-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes13-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes14-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes15-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes16-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/antecedentes/antecedentes17-festival.jpg' },
      ],
      showNumOfRemainingPhotos: true
    };

    const settingChapala = {
      width: '200px',
      height: ['100px', '100px'],
      layout: [1, 3],
      photos: [
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/chapala1-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/chapala2-festival.jpeg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/chapala3-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/chapala4-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/chapala5-festival.jpg' },
      ],
      showNumOfRemainingPhotos: true
    };


    const settingTala = {
      width: '200px',
      height: ['100px', '100px'],
      layout: [1, 4],
      photos: [
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tala1-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tala2-festival.jpeg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tala3-festival.jpeg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tala4-festival.jpg' },
      ],
      showNumOfRemainingPhotos: true
    };


    const settingTequila = {
      width: '200px',
      height: ['100px', '100px'],
      layout: [1, 4],
      photos: [
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tequila1-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tequila2-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tequila3-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tequila4-festival.jpg' },

      ],
      showNumOfRemainingPhotos: true
    };

    const settingCocula = {
      width: '200px',
      height: ['100px', '100px'],
      layout: [1, 4],
      photos: [
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/cocula1-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/cocula2-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/cocula3-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/cocula4-festival.png' },

      ],
      showNumOfRemainingPhotos: true
    };


    const settingZapotlanejo = {
      width: '200px',
      height: ['100px', '100px'],
      layout: [1, 4],
      photos: [
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapotlanejo1-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapotlanejo2-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapotlanejo3-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapotlanejo4-festival.jpg' },

      ],
      showNumOfRemainingPhotos: true
    };

    const settingGuadalajara = {
      width: '200px',
      height: ['100px', '100px'],
      layout: [1, 3],
      photos: [
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/guadalajara1-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/guadalajara2-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/guadalajara3-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/guadalajara4-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/guadalajara5-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/guadalajara6-festival.jpeg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/guadalajara7-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/guadalajara8-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/guadalajara9-festival.jpg' },
      ],
      showNumOfRemainingPhotos: true
    };

    const settingTlaquepaque = {
      width: '200px',
      height: ['100px', '100px'],
      layout: [1, 3],
      photos: [
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tlaquepaque1-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tlaquepaque2-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tlaquepaque3-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tlaquepaque4-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tlaquepaque5-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/tlaquepaque6-festival.jpg' },

      ],
      showNumOfRemainingPhotos: true
    };

    const settingZapopan = {
      width: '400px',
      height: ['108px', '108px'],
      layout: [1, 3],
      photos: [
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapopan1-festival.jpeg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapopan2-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapopan3-festival.png' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapopan4-festival.jpeg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapopan5-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapopan6-festival.jpg' },
        { src: 'http://tecmm.edu.mx/imagesReact/images/festival/sedes/zapopan7-festival.jpg' },
      ],
      showNumOfRemainingPhotos: true
    };


    return(
      <div>
      <Rodal width="700" height="500" visible={this.state.visible} onClose={this.hide.bind(this)}>
         <div>
          <img className="img-aviso" src="http://tecmm.edu.mx/imagesReact/images/festival/cartel-festival.png"/>
         </div>

         <div className="div-aviso">
          <h1>¡¡¡ IMPORTANTE !!!</h1>
          <p>Recuerda realizar tu preinscripción al Festival Nacional de Arte y Cultura del TecNM antes del 18 de Octubre de 2019 en el Portal Electrónico <a target="_blank" href="http://sii.tecnm.mx">http://sii.tecnm.mx</a> </p>
          <h2>Para dudas y aclaraciones de los registros: <a target="_blank" href="mailto:arteycultura@itcelaya.edu.mx">arteycultura@itcelaya.edu.mx</a> </h2>
         </div>
      </Rodal>

      <Parallax style={{backgroundImage:"url('http://tecmm.edu.mx/imagesReact/images/festival/backgrounds/background4-festival.jpg')", backgroundPosition:"50%", backgroundRepeat:"no-repeat", backgroundSize:"cover",}} ref="parallax" pages={6}>

          <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: 'white' }} />
          <Parallax.Layer offset={1} speed={1} className="div-paralaxLayer"/>
          <Parallax.Layer offset={2} speed={1} className="div-paralaxLayer"/>
          <Parallax.Layer offset={3} speed={1} className="div-paralaxLayer"/>
          <Parallax.Layer offset={4} speed={1} className="div-paralaxLayer"/>
          <Parallax.Layer offset={5} speed={1} className="div-paralaxLayer"/>



          <Parallax.Layer offset={0} speed={0.5} style={styles} >
            <img className="img-bannerFestival" src="http://tecmm.edu.mx/imagesReact/images/festival/banner-festival.png"/>

            <Bounce top cascade>
              <ul className="ul-menu-festival">

              <li onClick={() => this.refs.parallax.scrollTo(1)} className="">
                Antecedentes
              </li>

              <li onClick={() => this.refs.parallax.scrollTo(2)}  className="">
               Diciplinas
              </li>

              <li className="">
                <a target="_blank" href="http://tecmm.edu.mx/documentos/festival-arte-y-cultura/convocatoria-festival.pdf">Convocatoria</a>
              </li>

              <li onClick={() => this.refs.parallax.scrollTo(3)} className="">
                Homenaje
              </li>

              <li onClick={() => this.refs.parallax.scrollTo(4)} className="">
                Sedes
              </li>

              <li onClick={() => this.refs.parallax.scrollTo(5)} className="">
                Organigrama
              </li>

              <li className="">
                <a target="_blank" href="http://sii.tecnm.mx">Registro</a>
              </li>

              <li className="">
                <a target="_blank" href="http://tecmm.edu.mx/documentos/festival-arte-y-cultura/aportaciones-mario-molina.pdf">Aportaciones</a>
              </li>

              </ul>
            </Bounce>

            <Fade right cascade>
              <img className="img-pinataFestival"  src="http://tecmm.edu.mx/imagesReact/images/festival/pinata-festival.png"/>
            </Fade>
            <Fade Left>
              <img className="img-letrasFestival"  src="http://tecmm.edu.mx/imagesReact/images/festival/arte-cultura-festival.png"/>
            </Fade>

            <Fade left>
              <img className="img-actorFestival"  src="http://tecmm.edu.mx/imagesReact/images/festival/actor-festival.png"/>
            </Fade>

            <Bounce bottom>
              <h1 className="h1-fechaFestival">DEL 12 AL 16 DE DICIEMBRE DE 2019</h1>
            </Bounce>

            <div className="div-textoSede">
              <img src="http://tecmm.edu.mx/imagesReact/images/logo-tecmm.png"/>
              <h1>SEDE: TECNOLÓGICO MARIO MOLINA CAMPUS ZAPOPAN</h1>
              <p>SUBSEDES CAMPUS: CHAPALA, COCULA, TALA, TEQUILA Y ZAPOTLANEJO </p>
            </div>

          </Parallax.Layer>

          <Parallax.Layer offset={1} speed={-0.1} style={styles}>
            <h1 id="h1-antecedentes">Antecedentes</h1>
            <p className="p-antecedentes">Se realiza cada año en un Instituto Tecnológico diferente, que solicita y aprueba, el Consejo Nacional de Directores, del Tecnológico Nacional de México (254 institutos tecnológicos federales y descentralizados).<br/><br/>
            Las actividades artísticas y culturales son obligatorias para nuestros más de 600 mil estudiantes; contribuyendo de manera importante a su formación integral, provocando en ellos personas con mayor sensibilidad, capacidad de liderazgo, trabajo en equipo y compromiso social.<br/><br/>
            Se convocan cinco disciplinas artísticas al Festival, Danza y Música en todos sus géneros, desde la académica hasta la popular; cabe señalar que la danza folklórica con música en vivo es la más concurrida, Teatro, Artes Plásticas (pintura, escultura, dibujo, grabado), Creación Literaria con obras de los propios estudiantes (poesía, cuento, ensayo, narrativa) también presentan leyendas regionales.<br/><br/>
            Las obras de teatro que se presentan en el Festival, algunas son de la autoría de los estudiantes y van desde la comedia hasta el drama; pasando por la farsa.<br/><br/>
            En esta XXXVIII edición del Festival, el Instituto Tecnológico José Mario Molina Pasquel y Henríquez, recibirá a más de 3500 estudiantes de 130 Institutos Tecnológicos de todo el País, muestra nacional única en nuestro país y en el mundo, de estudiantes de las diversas ingenierías que practican actividades artísticas y culturales y las muestran en una semana a la población; en este caso del Estado de Jalisco.<br/><br/></p>

            <div className="div-collageAntecedentes">
              <ReactPhotoCollage {...settingAntecedentes} />
            </div>

          </Parallax.Layer>

          <Parallax.Layer offset={2} speed={0.5} style={styles}>
            <h1 id="h1-seccion">Disciplinas</h1>
            <div className="div-disciplinas">
            {this.state.disciplinas.map((it, key)=>(
              <div className="div-disciplinasItem">
                <img style={{maxWidth:"300px"}} src={it.src}/>
                <h3>{it.disciplina}</h3>
                <p>{it.descripcion}</p>
              </div>
            ))}
            </div>
          </Parallax.Layer>

          <Parallax.Layer offset={3} speed={0.5} style={styles}>
            <h1 id="h1-seccion">Homenaje</h1>
          </Parallax.Layer>

          <Parallax.Layer offset={4} speed={0.5} style={styles}>
            <h1 id="h1-seccion">Sedes</h1>

            <div className="div-collagesFestival">

              <div className="div-sede">
                <div className="div-collage">
                  <h1>Zapopan</h1>
                  <ReactPhotoCollage {...settingZapopan} />
                </div>

                <div style={{display:"flex"}}>

                  <div className="div-collage">
                    <h1>Guadalajara</h1>
                    <ReactPhotoCollage {...settingGuadalajara} />
                  </div>

                  <div className="div-collage">
                    <h1>Tlaquepaque</h1>
                    <ReactPhotoCollage {...settingTlaquepaque} />
                  </div>

                </div>
              </div>

              <div className="div-subsedes">

                <div style={{display:"flex"}}>

                  <div className="div-collage">
                    <h1>Chapala</h1>
                    <ReactPhotoCollage {...settingChapala} />
                  </div>

                  <div className="div-collage">
                    <h1>Cocula</h1>
                    <ReactPhotoCollage {...settingCocula} />
                  </div>

                  <div className="div-collage">
                    <h1>Tala</h1>
                    <ReactPhotoCollage {...settingTala} />
                  </div>

                </div>

                <div style={{display:"flex", backgroundColor:""}}>

                  <div className="div-collage">
                    <h1>Tequila</h1>
                    <ReactPhotoCollage {...settingTequila} />
                  </div>

                  <div className="div-collage">
                    <h1>Zapotlanejo</h1>
                    <ReactPhotoCollage {...settingZapotlanejo} />
                  </div>

                </div>
              </div>


            </div>

          </Parallax.Layer>

          <Parallax.Layer offset={5} speed={0.5} style={styles}>
            <h1 id="h1-seccion">Organigrama</h1>

            <div className="div-organigrama">
              <img src="http://tecmm.edu.mx/imagesReact/images/festival/organigrama/organigrama1-festival.png" />
              <img src="http://tecmm.edu.mx/imagesReact/images/festival/organigrama/organigrama2-festival.png" />
              <img src="http://tecmm.edu.mx/imagesReact/images/festival/organigrama/organigrama3-festival.png" />
              <img src="http://tecmm.edu.mx/imagesReact/images/festival/organigrama/organigrama4-festival.png" />
              <img src="http://tecmm.edu.mx/imagesReact/images/festival/organigrama/organigrama5-festival.png" />
            </div>
          </Parallax.Layer>
      </Parallax>
      </div>
    );
  }
}

const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(Festival, options);
