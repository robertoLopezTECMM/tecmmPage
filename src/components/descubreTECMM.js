import React, {Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/descubreTECMM.css';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function ModalGaceta(props) {
  let initState = [
    {
      nombre: "Gaceta TecMM 2017",
      href: "http://tecmm.edu.mx/recursos/gacetas/Gaceta-TecMM-2017.pdf"
    },
    {
      nombre: "Gaceta TecMM 2018",
      href: "http://tecmm.edu.mx/recursos/gacetas/Gaceta-TecMM-2018.pdf"
    },
    {
      nombre: "Gaceta TecMM 2019",
      href: "http://tecmm.edu.mx/recursos/gacetas/Gaceta-TecMM-2019.pdf"
    },
    {
      nombre: "Gaceta TecMM 2020",
      href: "http://tecmm.edu.mx/recursos/gacetas/Gaceta-TecMM-2020.pdf"
    },
    {
      nombre: "Gaceta TecMM 2021",
      href: "http://tecmm.edu.mx/recursos/gacetas/Gaceta-TecMM-2021.pdf"
    },
  ];
  const [gacetas, setGaceta] = useState(initState);

  /*useEffect(() => {
    // console.log(props);
    const url = 'https://dashboard.tecmm.edu.mx/dashboardScript.php'
    axios.get(url, {params:{action:"getGacetas"}}).then(response => response.data)
    .then((data) => {
      if(data.lenght > 0){
        setGaceta(data)
      }
    })
  });*/
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Gacetas TecMM
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container ">

          {gacetas.map( (gaceta) => {
            return (
            <>
              <div className="row form-group mx-2">
                <h4>
                  <a target="_blank" href={gaceta.href} style={{"text-decoration": "none"}}>
                    <i className="fas fa-file-pdf text-secondary"></i> {'\u00A0'} {gaceta.nombre}
                  </a>
                </h4>
              </div>
              <hr />
            </ >
            );
          })}

        </div>        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
/*================= Lugar fincion nueva  =========================*/

function ModalInforme(props) {
  let initState = [
    {
      nombre: "Gaceta TecMM 2017",
      href: "http://tecmm.edu.mx/recursos/gacetas/Gaceta-TecMM-2017.pdf"
    },
    {
      nombre: "Gaceta TecMM 2018",
      href: "http://tecmm.edu.mx/recursos/gacetas/Gaceta-TecMM-2018.pdf"
    },
    {
      nombre: "Gaceta TecMM 2019",
      href: "http://tecmm.edu.mx/recursos/gacetas/Gaceta-TecMM-2019.pdf"
    },
    {
      nombre: "Gaceta TecMM 2020",
      href: "http://tecmm.edu.mx/recursos/gacetas/Gaceta-TecMM-2020.pdf"
    },
    {
      nombre: "Gaceta TecMM 2021",
      href: "http://tecmm.edu.mx/recursos/gacetas/Gaceta-TecMM-2021.pdf"
    },
  ];
  const [gacetas, setGaceta] = useState(initState);

  /*useEffect(() => {
    // console.log(props);
    const url = 'https://dashboard.tecmm.edu.mx/dashboardScript.php'
    axios.get(url, {params:{action:"getGacetas"}}).then(response => response.data)
    .then((data) => {
      if(data.lenght > 0){
        setGaceta(data)
      }
    })
  });*/
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Gacetas TecMM
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container ">

          {gacetas.map( (gaceta) => {
            return (
            <>
              <div className="row form-group mx-2">
                <h4>
                  <a target="_blank" href={gaceta.href} style={{"text-decoration": "none"}}>
                    <i className="fas fa-file-pdf text-secondary"></i> {'\u00A0'} {gaceta.nombre}
                  </a>
                </h4>
              </div>
              <hr />
            </ >
            );
          })}

        </div>        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

/*================= Cierra fincion nueva  =========================*/

class DescubreTECMM extends Component{

  constructor(props){
    super();
    this.state = {show:false};
  }

  render(){
    return(
      <>
      <ModalGaceta 
        show={this.state.show} 
        onHide={() => this.setState({show:false})}>
      </ModalGaceta>

      <ModalInforme 
        show={this.state.show} 
        onHide={() => this.setState({show:false})}>
      </ModalInforme>
      <div className="div-principal-cardsInteres">
        <h1> DESCUBRE EL TECMM </h1>
        <div className="div-imagen-cards">


            <a href="https://sites.google.com/tecmm.edu.mx/convocatorias/inicio">

              <img src='http://tecmm.edu.mx/imagesReact/images/descubreTECMM/convocatorias.jpg' style={{marginRight:"2px"}} className="img-card"/>

            </a>

            <a onClick={() => this.setState({show:true})}>
              <img src='http://tecmm.edu.mx/imagesReact/images/descubreTECMM/Gaceta-TECMM.jpg' style={{marginRight:"2px"}} className="img-card"/>
            </a>

            {/* <a target="_blank" href="http://tecmm.edu.mx/documentos/2020/Gaceta-TecMM-2019.pdf">
              <img src='http://tecmm.edu.mx/imagesReact/images/descubreTECMM/Gaceta-TECMM.jpg' style={{marginRight:"2px"}} className="img-card"/>
            </a> */}

            <a target="_blank" href="https://www.plataformadetransparencia.org.mx/">
              <img src='http://tecmm.edu.mx/imagesReact/images/descubreTECMM/Tu-PlataformaMcx.jpg' style={{marginRight:"2px"}} className="img-card"/>
            </a>

            <a href="http://www.posgrado.tecmm.edu.mx/">
              <img src='http://tecmm.edu.mx/imagesReact/images/descubreTECMM/Posgrados.jpg' className="img-card"/>
            </a>

            <a onClick={() => this.setState({show:true})}>
              <img src='http://tecmm.edu.mx/imagesReact/images/descubreTECMM/Gaceta-TECMM.jpg' style={{marginRight:"2px"}} className="img-card"/>
            </a>


        </div>
      </div>
    </>
    );
  }


}

export default DescubreTECMM;
