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

        <SectionLeft titulo="??Qui??nes Somos?"
                      texto1="Fundado el 23 de agosto del 2016, por decreto de creaci??n n??mero 25535/LX/15, aprobado por el H. Congreso del Estado de Jalisco, crea el Instituto Tecnol??gico Jos?? Mario Molina Pasquel y Henr??quez como organismo p??blico descentralizado del Gobierno del Estado con personalidad jur??dica y patrimonio propio, el cual tiene la finalidad de prestar servicio de educaci??n superior tecnol??gica en el Estado de Jalisco, adscrito al Tecnol??gico Nacional de M??xico y sectorizado a la Secretar??a de Innovaci??n Ciencia y Tecnolog??a"
                      texto2="El Instituto Tecnol??gico Jos?? Mario Molina Pasquel y Henr??quez reconocido por sus siglas TecMM. Nombre asignado en honor al Ingeniero Qu??mico galardonado en el a??o 1995 con el Premio Nobel de Qu??mica por su investigaci??n de los estudios relacionados con el impacto de la Capa de Ozono."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos1.jpg"/>

        <SectionRight titulo="INICIATIVA"
                      texto1="La iniciativa de crear el TecMM, fue unificar a los 13 Institutos Tecnol??gicos Superiores, en un solo Organismo P??blico Descentralizado, con una Direcci??n General y 13 Unidades Acad??micas en el Estado de Jalisco. Con el prop??sito de eficientar la estructura acad??mica y administrativa, respondiendo a los objetivos del Plan Nacional de Desarrollo y del Plan Estatal de Desarrollo de Jalisco, que establece el compromiso de un ???M??xico con educaci??n de calidad???."
                      texto2="Nuestra Instituci??n es heredera de una brillante y firme historia de vida institucional con 20 a??os de creaci??n en el Estado de Jalisco, adscrito al Tecnol??gico Nacional de M??xico, siendo el m??s grande de Iberoam??rica con 600,000 mil estudiantes, 254 institutos en todo el pa??s, teniendo presencia en m??s de 600 localidades en los 32 estados del pa??s."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos2.jpg"/>

        <SectionLeft titulo="RED TECMM"
                      texto1="En Jalisco somos una red de trece unidades acad??micas y doce extensiones, contamos con una cobertura de Educaci??n Superior en once de las doce regiones del Estado de Jalisco con m??s de 15,000 estudiantes, que nos convierte en la segunda Instituci??n en el Estado lo que representa el 9.74% de la matr??cula de Educaci??n Superior, con 16 ingenier??as, 5 licenciaturas, y 2 posgrados."
                      texto2="Las 13 Unidades Acad??micas del Estado de Jalisco del Instituto Tecnol??gico Jos?? Mario Molina Pasquel y Henr??quez son: Arandas, Chapala, Cocula, El Grullo, La Huerta, Lagos de Moreno, Mascota, Puerto Vallarta, Tala, Tamazula, Tequila, Zapopan y Zapotlanejo."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos4.jpg"/>

        {/* 
          <SectionRight titulo="MISI??N"
                      texto1="???Brindar educacio??n integral de clase mundial para formar profesionistas competitivos, innovadores y emprendedores y satisfacer las demandas de desarrollo cienti??fico y tecnolo??gico del sector productivo en cada una de las regiones del estado de Jalisco con proceso de investigacio??n aplicada y transferencia de tecnologi??a???."
                      texto2=""
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos6.jpg"/> 
        */}

        <SectionRight titulo="MISI??N"
                      texto1="???Ofrecer educaci??n superior tecnol??gica de excelencia en el estado de Jalisco, bajo un modelo de operaci??n en red, mediante modelos educativos innovadores, flexibles, que incluyan oferta educativa en ambientes virtuales y que sean acordes a las necesidades regionales, con apertura a esquemas de colaboraci??n con otras instituciones???."
                      texto2=""
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos6.jpg"/> 

        <SectionLeft titulo="VISI??N"
                      texto1="??? Somos una instituci??n reconocida por nuestra oferta educativa tecnol??gica innovadora, de excelencia y pertinente para el estado de Jalisco, con alta eficiencia terminal."
                      texto2="??? Estamos altamente vinculados con los sectores productivos de las regiones en cada una de las unidades acad??micas de la red, teniendo altos niveles de inserci??n de nuestros egresados y atracci??n de ingresos propios mediante un amplio portafolio de servicios."   
                      texto3="??? Contamos con capital humano comprometido, altamente competitivo, eficiente y actualizado. "
                      texto4="??? Contamos con procesos efectivos y eficientes, soportados por un Sistema de Gesti??n Integral, apoyado en tecnolog??as digitales, con una normatividad din??mica y actualizada."
                      texto5="??? Tenemos infraestructura f??sica y tecnol??gica adecuada y espacios complementarios que permiten el desarrollo integral de la comunidad acad??mica y la atenci??n a nuestros usuarios externos."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos7.jpg"/>
      

        {/* <SectionLeft titulo="VISI??N"
                      texto1="???Ser reconocido por su liderazgo en la economi??a del conocimiento nacional, formando los profesionistas ma??s talentosos, innovadores y emprendedores del pai??s y tener los ma??s altos i??ndices de investigacio??n e innovacio??n tecnolo??gica, asi?? como de la produccio??n y transferencia de propiedad intelectual entre las instituciones de educacio??n superior de Me??xico???."
                      texto2=""
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos7.jpg"/> */}

        <SectionRight titulo="VALORES"
                      texto1="ESP??RITU DE SERVICIO
                      Anteponer siempre el bien del Instituto al propio, dando a
                      nuestras labores un sentido de compromiso desinteresado
                      en beneficio de los dem??s."
                      texto2="ESP??RITU DE COLABORACI??N
                      Tomar conciencia de las necesidades de nuestra comunidad
                      y mostrar la voluntad de ayudar para contribuir a cubrir esas
                      necesidades."
                      texto3="PROACTIVIDAD
                      Para tener una actitud que acompa??e a las personas para
                      hacerse responsables de ideas originales y tomar la iniciativa
                      en proyectos que conlleven un avance en alg??n aspecto
                      del TecMM."
                      texto4="INNOVACI??N
                      Un TecMM que cambia, evoluciona, hace cosas nuevas,
                      ofrece nuevos programas, que adopta o pone a punto,
                      nuevas formas de integrarse a su entorno."
                      texto5="CREATIVIDAD
                      Una comunidad con ideas que aportan valor y crear algo
                      diferente en alg??n aspecto relevante."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos5.jpg"/>
                      
        {/*<SectionRight titulo="VALORES"
                      texto1="Bienestar Social: Mejorar el acceso, la cobertura y la calidad de la educacio??n superior, reducir el rezago educativo y promover la equidad en las oportunidades educativas."
                      texto2="Sustentabilidad: Compromiso con la economi??a y la ecologi??a de sostenimiento a lo largo del tiempo sin agotar los recursos o perjudicar el medio ambiente."
                      texto3="Integridad: La capacidad de actuar en consecuencia con lo que se dice o lo que se considera que es importante, tiene todas sus partes enteras y no afecta los intereses de las personas ni la institucio??n."
                      texto4="Innovacio??n: De manera continua buscamos introducir en todos los a??mbitos del quehacer de nuestro Instituto, cambios que representen una mejora, un progreso y sobre todo un mayor valor para los receptores de nuestros servicios y productos (clientes internos y externos) y de todo nuestro ecosistema."
                      texto5="Competitividad: Es la cualidad con la cual se busca la realizacio??n de los objetivos y generar los mejores resultados educativos, generando conocimiento para el desarrollo de las personas y su entorno."
                      texto6="Emprendimiento: Generar actividades y estrategias para establecer el ambiente emprendedor, estimulando la iniciativa de los estudiantes para desarrollar un proyecto de negocio, generando el sentido de emprendimiento y generacio??n de ideas creativas viables, para que se conviertan en una realidad."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos5.jpg"/>
                    */}





        <LinksFooter/>

      </div>
    );
  }
}

const options = {mobileLimit: 420, tabletLimit: 800}
export default withGetScreen(QuienesSomos, options);
