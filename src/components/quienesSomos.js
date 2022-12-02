import React, { Component } from 'react';
import {withGetScreen} from 'react-getscreen';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/quienesSomos.css';



class SectionLeft extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div id="morado" className="div-seccionQuienesSomos">
        <Fade right>
          <img className="img-seccionQuienesSomos" src={this.props.imagen}/>
        </Fade>

        <Fade left>
          <div className="div-textoSeccionQuienesSomos">
            <h1>{this.props.titulo}</h1>
            <p>{this.props.texto1}</p>
            <p>{this.props.texto2}</p>
            <p>{this.props.texto3}</p>
            <p>{this.props.texto4}</p>
            <p>{this.props.texto5}</p>
            <p>{this.props.texto6}</p>
          </div>
        </Fade>
      </div>
    );
  }
}

class SectionRight extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    return(
      <div id="verde" className="div-seccionQuienesSomos">
        <Fade right>
          <div className="div-textoSeccionQuienesSomos">
            <h1>{this.props.titulo}</h1>

              <p>{this.props.texto1}</p>
              <p>{this.props.texto2}</p>
              <p>{this.props.texto3}</p>
              <p>{this.props.texto4}</p>
              <p>{this.props.texto5}</p>
              <p>{this.props.texto6}</p>

          </div>
        </Fade>

        <Fade left>
          <img className="img-seccionQuienesSomos" src={this.props.imagen}/>
        </Fade>
      </div>
    );
  }
}


class QuienesSomos extends Component {



  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {


    return (
      <div className="div-principalQuienesSomos">



        <div className="MenuCentral">
          <MenuCentral/>
        </div>

        <SectionLeft titulo="¿Quiénes Somos?"
                      texto1="Fundado el 23 de agosto del 2016, por decreto de creación número 25535/LX/15, aprobado por el H. Congreso del Estado de Jalisco, crea el Instituto Tecnológico José Mario Molina Pasquel y Henríquez como organismo público descentralizado del Gobierno del Estado con personalidad jurídica y patrimonio propio, el cual tiene la finalidad de prestar servicio de educación superior tecnológica en el Estado de Jalisco, adscrito al Tecnológico Nacional de México y sectorizado a la Secretaría de Innovación Ciencia y Tecnología"
                      texto2="El Instituto Tecnológico José Mario Molina Pasquel y Henríquez reconocido por sus siglas TecMM. Nombre asignado en honor al Ingeniero Químico galardonado en el año 1995 con el Premio Nobel de Química por su investigación de los estudios relacionados con el impacto de la Capa de Ozono."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos1.jpg"/>

        <SectionRight titulo="INICIATIVA"
                      texto1="La iniciativa de crear el TecMM, fue unificar a los 13 Institutos Tecnológicos Superiores, en un solo Organismo Público Descentralizado, con una Dirección General y 13 Unidades Académicas en el Estado de Jalisco. Con el propósito de eficientar la estructura académica y administrativa, respondiendo a los objetivos del Plan Nacional de Desarrollo y del Plan Estatal de Desarrollo de Jalisco, que establece el compromiso de un “México con educación de calidad”."
                      texto2="Nuestra Institución es heredera de una brillante y firme historia de vida institucional con 20 años de creación en el Estado de Jalisco, adscrito al Tecnológico Nacional de México, siendo el más grande de Iberoamérica con 600,000 mil estudiantes, 254 institutos en todo el país, teniendo presencia en más de 600 localidades en los 32 estados del país."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos2.jpg"/>

        <SectionLeft titulo="RED TECMM"
                      texto1="En Jalisco somos una red de trece unidades académicas y doce extensiones, contamos con una cobertura de Educación Superior en once de las doce regiones del Estado de Jalisco con más de 15,000 estudiantes, que nos convierte en la segunda Institución en el Estado lo que representa el 9.74% de la matrícula de Educación Superior, con 16 ingenierías, 5 licenciaturas, y 2 posgrados."
                      texto2="Las 13 Unidades Académicas del Estado de Jalisco del Instituto Tecnológico José Mario Molina Pasquel y Henríquez son: Arandas, Chapala, Cocula, El Grullo, La Huerta, Lagos de Moreno, Mascota, Puerto Vallarta, Tala, Tamazula, Tequila, Zapopan y Zapotlanejo."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos4.jpg"/>

        {/* 
          <SectionRight titulo="MISIÓN"
                      texto1="“Brindar educación integral de clase mundial para formar profesionistas competitivos, innovadores y emprendedores y satisfacer las demandas de desarrollo científico y tecnológico del sector productivo en cada una de las regiones del estado de Jalisco con proceso de investigación aplicada y transferencia de tecnología”."
                      texto2=""
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos6.jpg"/> 
        */}

        <SectionRight titulo="MISIÓN"
                      texto1="“Ofrecer educación superior tecnológica de excelencia en el estado de Jalisco, bajo un modelo de operación en red, mediante modelos educativos innovadores, flexibles, que incluyan oferta educativa en ambientes virtuales y que sean acordes a las necesidades regionales, con apertura a esquemas de colaboración con otras instituciones”."
                      texto2=""
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos6.jpg"/> 

        <SectionLeft titulo="VISIÓN"
                      texto1="• Somos una institución reconocida por nuestra oferta educativa tecnológica innovadora, de excelencia y pertinente para el estado de Jalisco, con alta eficiencia terminal."
                      texto2="• Estamos altamente vinculados con los sectores productivos de las regiones en cada una de las unidades académicas de la red, teniendo altos niveles de inserción de nuestros egresados y atracción de ingresos propios mediante un amplio portafolio de servicios."   
                      texto3="• Contamos con capital humano comprometido, altamente competitivo, eficiente y actualizado. "
                      texto4="• Contamos con procesos efectivos y eficientes, soportados por un Sistema de Gestión Integral, apoyado en tecnologías digitales, con una normatividad dinámica y actualizada."
                      texto5="• Tenemos infraestructura física y tecnológica adecuada y espacios complementarios que permiten el desarrollo integral de la comunidad académica y la atención a nuestros usuarios externos."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos7.jpg"/>
      

        {/* <SectionLeft titulo="VISIÓN"
                      texto1="“Ser reconocido por su liderazgo en la economía del conocimiento nacional, formando los profesionistas más talentosos, innovadores y emprendedores del país y tener los más altos índices de investigación e innovación tecnológica, así como de la producción y transferencia de propiedad intelectual entre las instituciones de educación superior de México”."
                      texto2=""
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos7.jpg"/> */}

        <SectionRight titulo="VALORES"
                      texto1="ESPÍRITU DE SERVICIO
                      Anteponer siempre el bien del Instituto al propio, dando a
                      nuestras labores un sentido de compromiso desinteresado
                      en beneficio de los demás."
                      texto2="ESPÍRITU DE COLABORACIÓN
                      Tomar conciencia de las necesidades de nuestra comunidad
                      y mostrar la voluntad de ayudar para contribuir a cubrir esas
                      necesidades."
                      texto3="PROACTIVIDAD
                      Para tener una actitud que acompañe a las personas para
                      hacerse responsables de ideas originales y tomar la iniciativa
                      en proyectos que conlleven un avance en algún aspecto
                      del TecMM."
                      texto4="INNOVACIÓN
                      Un TecMM que cambia, evoluciona, hace cosas nuevas,
                      ofrece nuevos programas, que adopta o pone a punto,
                      nuevas formas de integrarse a su entorno."
                      texto5="CREATIVIDAD
                      Una comunidad con ideas que aportan valor y crear algo
                      diferente en algún aspecto relevante."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos5.jpg"/>
                      
        {/*<SectionRight titulo="VALORES"
                      texto1="Bienestar Social: Mejorar el acceso, la cobertura y la calidad de la educación superior, reducir el rezago educativo y promover la equidad en las oportunidades educativas."
                      texto2="Sustentabilidad: Compromiso con la economía y la ecología de sostenimiento a lo largo del tiempo sin agotar los recursos o perjudicar el medio ambiente."
                      texto3="Integridad: La capacidad de actuar en consecuencia con lo que se dice o lo que se considera que es importante, tiene todas sus partes enteras y no afecta los intereses de las personas ni la institución."
                      texto4="Innovación: De manera continua buscamos introducir en todos los ámbitos del quehacer de nuestro Instituto, cambios que representen una mejora, un progreso y sobre todo un mayor valor para los receptores de nuestros servicios y productos (clientes internos y externos) y de todo nuestro ecosistema."
                      texto5="Competitividad: Es la cualidad con la cual se busca la realización de los objetivos y generar los mejores resultados educativos, generando conocimiento para el desarrollo de las personas y su entorno."
                      texto6="Emprendimiento: Generar actividades y estrategias para establecer el ambiente emprendedor, estimulando la iniciativa de los estudiantes para desarrollar un proyecto de negocio, generando el sentido de emprendimiento y generación de ideas creativas viables, para que se conviertan en una realidad."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos5.jpg"/>
                    */}





        <LinksFooter/>

      </div>
    );
  }
}

const options = {mobileLimit: 420, tabletLimit: 800}
export default withGetScreen(QuienesSomos, options);
