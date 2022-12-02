import React, { Component } from 'react';
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/nuevoIngreso.css'

class NuevoIngreso extends Component{

    constructor(props){
      super(props);
      this.state={
        carrerasArray:null,
      }
    }


    render(){
        return(
            <div className="nuevoIngresoContainer">

                <MenuCentral/>
                    <img className="portadaNuevoIngreso" src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/portada-nuevoIngreso.jpg"/>
                    <div className="diagramaContainer">

                        <div className="diagramaLayer1">
                            <div id="step1">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-1.jpg"/>
                                <div className="textoStep">
                                    <p>REGISTRATE EN EL PORTAL</p>
                                    <p className="textoGotham"> <a className="textoGothamLink" href="http://187.174.80.183:8080/core/login.jsp?panel=Aspirantes" target="_blank">www.edcore.tecmm.edu.mx</a></p>
                                    <p>DEL 13 AL 26 DE AGOSTO 2020</p>
                                </div>
                            </div>

                            <div id="step2">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-2.jpg"/>
                                <div className="textoStep">
                                    <p>CREA UNA NUEVA CUENTA, COMPLETA LOS FORMULARIOS Y SUBE TUS DOCUMENTOS EN PDF</p>
                                    <p>NECESITARÁS UN CORREO ELECTRÓNICO</p>
                                    <p className="textoGotham"> <a className="textoGothamLink" href="http://187.174.80.183:8080/core/login.jsp?panel=Aspirantes" target="_blank">www.edcore.tecmm.edu.mx</a></p>
                                </div>
                            </div>

                            <div id="step3">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-3.jpg"/>
                                <div className="textoStep">
                                    <p className="textJustify">CONSULTA LA REFERENCIA BANCARIA DE TU UNIDAD ACADÉMICA Y REALIZA TU  </p>
                                    <p className="textJustify"><a className="textoGotham">PAGO POR $450.00 EN LA INSTITUCIÓN BANCARIA CORRESPONDIENTE</a></p>
                                    <p className="textJustify">ENTREGA EL COMPROBANTE DE PAGO EN VENTANILLA DE TU UNIDAD ACADÉMICA</p>

                                </div>
                            </div>

                            <div id="step4">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-4.jpg"/>
                                <div className="textoStep">
                                    <p className="textJustify">RECOPILA LOS SIGUIENTES <a className="textoGotham">DOCUMENTOS:</a></p>
                                    <p className="textJustify"><a className="textoGotham">SOLICITUD DE INSCRIPCIÓN</a> <br/> (descárgala desde la plataforma edcore) </p>
                                    <p className="textJustify"><a className="textoGotham">CERTIFICADO DE BACHILLERATO</a> <br/> (original, solo para cotejo y copia)  </p>
                                    <p className="textJustify"><a className="textoGotham">CONSTANCIA DE ESTUDIOS DONDE INDIQUE EL AVANCE DE LOS CRÉDITOS</a> <br/>(original)  </p>
                                    <p className="textJustify"><a className="textoGotham">DICTAMEN DE REVALIDACIÓN DEL BACHILLERATO CONCLUIDO EN EL CASO DE SER EXTRANJERO</a> <br/>(Original, solo para cotejo y copia). </p>
                                    <p className="textJustify"><a className="textoGotham">COMPROBANTE OFICIAL DEL NO. DE SEGURO SOCIAL ÚNICO ORDINARIO</a></p>
                                    <p className="textJustify"><a className="textoGotham">COPIA DEL REGISTRO DEL NSS DEL ASPIRANTE PARA OBTENERLO, DEBERÁN DE ENTRAR A </a> <br/>http://www.imss.gob.mx/faq/seguro-estudiantes </p>
                                    <p className="textJustify"><a className="textoGotham">FOTOGRAFÍA DIGITAL EN FORMATO JPG</a></p>
                                    <p className="textJustify"><a className="textoGotham">COMPROBANTE DE PAGO ORIGINAL POR $2,500 POR CONCEPTO DE INSCRIPCIÓN</a></p>
                                    <p className="textJustify"><a className="textoGotham">ACTA DE NACIMIENTO</a> <br/>(original)</p>
                                    <p className="textJustify"><a className="textoGotham">CURP</a></p>
                                </div>
                            </div>

                            <div id="step5">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-5-segunda-aplicacion.jpg"/>
                                <div className="textoStep">
                                    <p className="textJustify">ENTREGA Y VALIDA LOS DOCUMENTOS EN VENTANILLA DE CONTROL ESCOLAR Y RECIBE TU HORARIO </p>                             
                                    <p className="textJustify"><a className="textoGotham">DEL 31 DE AGOSTO AL 4 DE SEPTIEMBRE DEL 2020</a></p>
                                </div>
                            </div>


                            <div id="step6">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-6-segunda-aplicacion.jpg"/>
                                <div className="textoStep">
                                    <p className="textJustify">DESCARGA LA GUÍA DE <br/> <a className="textoGotham">EXAMEN DE ADMISIÓN DEL TECMM</a></p>                               
                                    <p className="textJustify"><a className="textoGothamLink" target="_blank" href="http://tecmm.edu.mx/documentos/guia-examen-admision-tecmm.pdf">http://tecmm.edu.mx/documentos/guia-examen-admision-tecmm.pdf</a></p>
                                </div>
                            </div>

                            <div id="step7">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-7-segunda-aplicacion.jpg"/>
                                <div className="textoStep">
                                    <p className="textJustify"> <a className="textoGotham">PRESENTA TU EXAMEN DE ADMISIÓN EN LÍNEA</a></p>
                                    <p className="textJustify">EL 28 DE AGOSTO DEL 2020</p>
                                </div>
                            </div>


                            <div id="step8">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-8-segunda-aplicacion.jpg"/>
                                <div className="textoStep">
                                    <p className="textJustify">CONSULTA EN LA PÁGINA OFICIAL DEL TECMM LA<a className="textoGotham">LISTA DE ACEPTADOS</a></p>
                                    <p className="textJustify">EL 29 DE AGOSTO A PARTIR DE LAS 17:00 HRS</p>
                                </div>
                            </div>

                            <div id="step9">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-9-segunda-aplicacion.jpg"/>
                                <div className="textoStep">
                                    <p className="textJustify">SI ERES ACEPTADO, REALIZA EL PAGO EN EL BANCO AUTORIZADO POR TU UNIDAD ACADÉMICA <a className="textoGotham">POR LA CANTIDAD DE $2,500</a></p>
                                    <p className="textJustify">DEL 31 DE AGOSTO AL 4 DE SEPTIEMBRE DEL 2020</p>
                                </div>
                            </div>


                            <div id="step10">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-10-segunda-aplicacion.jpg"/>
                                <div className="textoStep">
                                    <p className="textJustify"><a className="textoGotham">ASISTE AL CURSO DE NIVELACIÓN</a></p>
                                    <p className="textJustify">CONSULTA LA PROGRAMACIÓN EN TU UNIDAD ACADÉMICA</p>
                                </div>
                            </div>

                            <div id="step11">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-11-segunda-aplicacion.jpg"/>
                                <div className="textoStep">
                                    <p className="textJustify">RECOGE TU HORARIO Y PAQUETE DE MATERIAS <a className="textoGotham">EN VENTANILLA DE CONTROL ESCOLAR</a></p>
                                    <p className="textJustify">DEL 31 DE AGOSTO AL 4 DE SEPTIEMBRE 2020</p>
                                </div>
                            </div>

                            <div id="step12">
                                <img src="http://tecmm.edu.mx/imagesReact/images/nuevoIngreso/paso-12.jpg"/>
                                <div className="textoStep">
                                    <p><a className="textoGotham">BIENVENIDAS Y BIENVENIDOS A CLASES</a></p>
                                    <p>31 DE AGOSTO DEL 2020</p>
                                </div>
                            </div>

                        </div>




                    </div>
                <LinksFooter/>
            </div>
        );
    }
}



export default NuevoIngreso
