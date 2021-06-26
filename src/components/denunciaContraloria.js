
import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import axios from 'axios';
import {withGetScreen} from 'react-getscreen'



import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/denunciaContraloria.css';

class DenunciaContraloria extends Component {

    constructor(props){
      super(props);
      this.state = {
        nombreDemandante:"",
        domicilioDemandante:"",
        telefonoDemandante:"",
        correoDemandante:"",
        lugarHechos:"",
        fechaHechos:"",
        hechos:"",
      }
      this.onClick = this.onClick.bind(this);
    }

    //handleChange = (e, { name, value }) => this.setState({ [name]: e.target.value })

    handleChange = (e) => {

      var campo=e.target.name

      this.setState({
        [campo]: e.target.value
        });
    }

    onClick(e){
      switch (e.target.id) {
        case "buttonEnviar":

          const datosDenunciaOmision={
            tipoDenuncia:"denunciaContraloria",

            nombreDemandante:this.state.nombreDemandante,
            domicilioDemandante:this.state.domicilioDemandante,
            telefonoDemandante:this.state.telefonoDemandante,
            correoDemandante:this.state.correoDemandante,

            lugarHechos:this.state.lugarHechos,
            fechaHechos:this.state.fechaHechos,
            hechos:this.state.hechos,

          }

          var datosDenuncia = JSON.stringify(datosDenunciaOmision);

          axios.post('http://tecmm.edu.mx/receptorDenuncias.php', datosDenuncia)
          .then(function (response) {
            alert("Tu Denuncia Se Envio Con Exito");
          })
          .catch(function (error) {
            alert("Tu Denuncia No Fue Enviada");
          });

          break;
        case "buttonCancelar":
          this.setState({
            nombreDemandante:"",
            domicilioDemandante:"",
            telefonoDemandante:"",
            correoDemandante:"",

            lugarHechos:"",
            fechaHechos:"",
            hechos:"",
          })
          break;
      }
    }

    render() {

      return (
        <div className="div-principalFormulario">
          <MenuCentral/>

             <div id="form-demandante" class="ui form">

               <h1 className="h1-tituloForms">DATOS DE LA PERSONA QUE PRESENTA LA DENUNCIA</h1>

               <div class="two fields">
                 <div class="field">
                   <label>NOMBRE COMPLETO</label>
                   <input onChange={this.handleChange} name="nombreDemandante" value={this.state.nombreDemandante} type="text"/>
                 </div>

                 <div class="field">
                   <label>DOMICILIO</label>
                   <input onChange={this.handleChange} name="domicilioDemandante" value={this.state.domicilioDemandante} type="text"/>
                 </div>
               </div>

               <div class="two fields">

                 <div class="field">
                   <label>TELÉFONO DE CONTACTO</label>
                   <input onChange={this.handleChange} name="telefonoDemandante" value={this.state.telefonoDemandante} type="text"/>
                 </div>

                 <div class="field">
                   <label>CORREO ELECTRÓNICO</label>
                   <input onChange={this.handleChange} name="correoDemandante" value={this.state.correoDemandante} type="text"/>
                 </div>

               </div>



             </div>


             <div id="form-demandante" class="ui form">

               <h1 className="h1-tituloForms">HECHOS</h1>

               <div class="two fields">
                 <div class="field">
                   <label>LUGAR</label>
                   <input onChange={this.handleChange} name="lugarHechos" value={this.state.lugarHechos} type="text"/>
                 </div>

                 <div class="field">
                   <label>CUANDO</label>
                   <input onChange={this.handleChange} name="fechaHechos" value={this.state.fechaHechos} type="text"/>
                 </div>
               </div>


               <div class="field">
                 <label>DESCRIBA LOS HECHOS BREVEMENTE</label>
                 <textarea onChange={this.handleChange} name="hechos" value={this.state.hechos}></textarea>
               </div>

               <button id="buttonEnviar" onClick={this.onClick.bind(this)}  className="button-enviarDenuncia">Enviar Denuncia</button>
               <button id="buttonCancelar" onClick={this.onClick.bind(this)}  className="button-cancelarDenuncia">Cancelar</button>

              </div>




          <LinksFooter/>
        </div>
      )
    }
}


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(DenunciaContraloria, options);
