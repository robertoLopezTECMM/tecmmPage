import React, { Component } from 'react';
import axios from 'axios';
import {withGetScreen} from 'react-getscreen'
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/denunciaAcoso.css'


class DenunciaAcoso extends Component {

  constructor(){
    super();
    this.state={

      trabajaAdministracionPublica:true,
      motivoDenuncia:"",
      nombreDenunciante:"",
      puestoDenunciante:"",
      telefonoDenunciante:"",
      eMailDenunciante:"",
      domicilioDenunciante:"",
      nombreDenunciado:"",
      puestoDenunciado:"",
      dependenciaDenunciado:"",
      fechaHechos:"",
      horaHechos:"",
      lugarHechos:"",
      frecuenciaHechos:"",
      descripcionHechos:"",
      nombreTestigo:"",
      domicilioTestigo:"",
      telefonoTestigo:"",
      eMailTestigo:"",
      dependenciaTestigo:"",
      cargoTestigo:""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  onChange(e){
    var campo=e.target.name

    this.setState({
      [campo]: e.target.value
      });
  }

  onClick(e){

  }

  handleChange(){
    this.setState({ trabajaAdministracionPublica: !this.state.trabajaAdministracionPublica });
    alert(this.state.nombreDenunciante+"\n"+this.state.puestoDenunciante+"\n"+this.state.telefonoDenunciante
          +"\n"+this.state.eMailDenunciante+"\n"+this.state.domicilioDenunciante)
  };

  handleChangeDatos = (e) => {

    var campo=e.target.name

    this.setState({
      [campo]: e.target.value
      });
  }



  onClick(e){
    switch (e.target.id) {
      case "buttonEnviar":

        const datosDenunciaAcoso={
          tipoDenuncia:"denunciaAcoso",
          motivoDenuncia:this.state.motivoDenuncia,

          nombreDenunciante:this.state.nombreDenunciante,
          puestoDenunciante:this.state.puestoDenunciante,
          telefonoDenunciante:this.state.telefonoDenunciante,
          eMailDenunciante:this.state.eMailDenunciante,
          domicilioDenunciante:this.state.domicilioDenunciante,

          nombreDenunciado:this.state.nombreDenunciado,
          puestoDenunciado:this.state.puestoDenunciado,
          dependenciaDenunciado:this.state.dependenciaDenunciado,

          fechaHechos:this.state.fechaHechos,
          horaHechos:this.state.horaHechos,
          lugarHechos:this.state.lugarHechos,
          frecuenciaHechos:this.state.frecuenciaHechos,
          descripcionHechos:this.state.descripcionHechos,

          nombreTestigo:this.state.nombreTestigo,
          domicilioTestigo:this.state.domicilioTestigo,
          telefonoTestigo:this.state.telefonoTestigo,
          eMailTestigo:this.state.eMailTestigo,
          dependenciaTestigo:this.state.dependenciaTestigo,
          cargoTestigo:this.state.cargoTestigo
        }

        var datosDenuncia = JSON.stringify(datosDenunciaAcoso);

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
          motivoDenuncia:"",

          nombreDemandante:"",
          puestoDemandante:"",
          telefonoDemandante:"",
          correoDemandante:"",
          domicilioDemandante:"",

          nombreDemandado:"",
          cargoDemandado:"",
          unidadDemandado:"",

          fechaHechos:"",
          horaHechos:"",
          lugarHechos:"",
          frecuenciaHechos:"",
          hechos:"",

          nombreTestigo:"",
          domicilioTestigo:"",
          telefonoTestigo:"",
          correoTestigo:"",
          trabajaTestigo:false,
          entidadTestigo:"",
          cargoTestigo:"",
        })
        break;
    }
  }

  render() {

    return (

      <div className="div-principalDenunciaAcoso">

        <MenuCentral/>

        <div className="div-datosDemandante-denunciaAcoso">

          <div className="divLeyendaFormato">
            <h1> En caso de algún problema con el formulario, favor de descargar el formato de denuncia <a href="http://tecmm.edu.mx/documentos/formatos-denuncias/formato-denuncia-acoso.docx">aquí</a> y enviar directamente al correo: <a href="mailto:denuncia@tecmm.edu.mx">denuncia@tecmm.edu.mx</a> </h1>
          </div>

          <div id="form-demandante" class="ui form">

            <h1 className="h1-tituloForms">DATOS DE LA PERSONA QUE PRESENTA LA DENUNCIA</h1>

            <div class="field">
              <label>TIPO DE DENUNCIA</label>
              <input placeholder="Acoso Sexual, Hostigamiento, bullying" onChange={this.onChange.bind(this)} name="motivoDenuncia" value={this.state.motivoDenuncia} type="text"/>
            </div>

            <div class="two fields">
              <div class="field">
                <label>NOMBRE COMPLETO</label>
                <input onChange={this.onChange.bind(this)} name="nombreDenunciante" value={this.state.nombreDenunciante} type="text"/>
              </div>
              <div class="field">
                <label>PUESTO O ÁREA DONDE LABORA</label>
                <input onChange={this.onChange.bind(this)} name="puestoDenunciante" value={this.state.puestoDenunciante} type="text"/>
              </div>
            </div>

            <div class="two fields">

              <div class="field">
                <label>TELÉFONO DE CONTACTO</label>
                <input onChange={this.onChange.bind(this)} name="telefonoDenunciante" value={this.state.telefonoDenunciante} type="text"/>
              </div>

              <div class="field">
                <label>CORREO ELECTRÓNICO</label>
                <input onChange={this.onChange.bind(this)} name="eMailDenunciante" value={this.state.eMailDenunciante} type="text"/>
              </div>

            </div>

            <div class="field">
              <label>DOMICILIO</label>
              <input onChange={this.onChange.bind(this)} name="domicilioDenunciante" value={this.state.domicilioDenunciante} type="text"/>
            </div>

            <p>ADVERTENCIA: A LA PERSONA QUE DESEE CONSERVAR EL ANONIMATO, SÓLO PODRÁ ENTERARSE DEL CURSO DE LA DENUNCIA PRESENTADA A TRAVÉS DEL SEGUIMIENTO QUE ELLA MISMA DÉ A LAS SESIONES DEL COMITÉ.</p>
          </div>

          <div id="form-demandado" class="ui form">

            <h1 className="h1-tituloForms">DATOS DEL SERVIDOR(A) PÚBLICO (A) CONTRA QUIEN SE PRESENTA LA DENUNCIA</h1>

            <div class="two fields">
              <div class="field">
                <label>NOMBRE COMPLETO</label>
                <input onChange={this.onChange.bind(this)} name="nombreDenunciado" value={this.state.nombreDenunciado} type="text"/>
              </div>
              <div class="field">
                <label>CARGO O PUESTO</label>
                <input onChange={this.onChange.bind(this)} name="puestoDenunciado" value={this.state.puestoDenunciado} type="text"/>
              </div>
            </div>

            <div class="field">
              <label >UNIDAD ACADÉMICA EN LA QUE SE DESEMPEÑA</label>
              <input onChange={this.onChange.bind(this)} name="dependenciaDenunciado" value={this.state.dependenciaDenunciado} type="text"/>
            </div>

          </div>

          <div id="form-hechos" class="ui form">

            <h1 className="h1-tituloForms">DECLARACIÓN DE LOS HECHOS</h1>

            <div class="three fields">
              <div class="field">
                <label>FECHA EN QUE OCURRIERON LOS HECHOS</label>
                <input onChange={this.onChange.bind(this)} name="fechaHechos" value={this.state.fechaHechos} type="text"/>
              </div>
              <div class="field">
                <label>HORA</label>
                <input onChange={this.onChange.bind(this)} name="horaHechos" value={this.state.horaHechos} type="text"/>
              </div>
              <div class="field">
                <label>LUGAR</label>
                <input onChange={this.onChange.bind(this)} name="lugarHechos" value={this.state.lugarHechos} type="text"/>
              </div>
            </div>

            <div class="field">
              <label>FRECUENCIA DE LOS HECHOS</label>
              <input onChange={this.onChange.bind(this)} name="frecuenciaHechos" value={this.state.frecuenciaHechos} type="text"/>
            </div>

            <div class="field">
              <label>DESCRIBA LOS HECHOS BREVEMENTE</label>
              <textarea onChange={this.onChange.bind(this)} name="descripcionHechos" value={this.state.descripcionHechos}></textarea>
            </div>

          </div>

          <div id="form-testigo" class="ui form">

            <h1 className="h1-tituloForms">DATOS DE UNA PERSONA QUE HAYA SIDO TESTIGO DE LOS HECHOS</h1>

            <div class="two fields">
              <div class="field">
                <label>NOMBRE COMPLETO</label>
                <input onChange={this.onChange.bind(this)} name="nombreTestigo" value={this.state.nombreTestigo} type="text"/>
              </div>
              <div class="field">
                <label>DOMICILIO</label>
                <input onChange={this.onChange.bind(this)} name="domicilioTestigo" value={this.state.domicilioTestigo} type="text"/>
              </div>
            </div>

            <div class="two fields">
              <div class="field">
                <label>TELÉFONO</label>
                <input onChange={this.onChange.bind(this)} name="telefonoTestigo" value={this.state.telefonoTestigo} type="text"/>
              </div>
              <div class="field">
                <label>CORREO ELECTRÓNICO</label>
                <input onChange={this.onChange.bind(this)} name="eMailTestigo" value={this.state.eMailTestigo} type="text"/>
              </div>
            </div>

            <div class="ui toggle checkbox">
              <input onChange={this.onChange.bind(this)} type="checkbox" name="trabajaTestigo"/>
              <label id="checkbox-label">¿TRABAJA EN LA ADMINISTRACIÓN PÚBLICA FEDERAL?</label>
            </div>

            {this.state.trabajaTestigo?
              <div class="two fields">
                <div class="field">
                  <label>ENTIDAD O DEPENDENCIA</label>
                  <input onChange={this.onChange.bind(this)} name="dependenciaTestigo" value={this.state.dependenciaTestigo} type="text"/>
                </div>
                <div class="field">
                  <label>CARGO O PUESTO</label>
                  <input onChange={this.onChange.bind(this)} name="cargoTestigo" value={this.state.cargoTestigo} type="text"/>
                </div>
              </div>
              :
              <div> </div>
            }

          </div>

          <button id="buttonEnviar" onClick={this.onClick.bind(this)} className="button-enviarDenuncia">Enviar Denuncia</button>
          <button id="buttonCancelar" onClick={this.onClick.bind(this)} className="button-cancelarDenuncia">Cancelar</button>

        </div>

        <LinksFooter/>

      </div>
    );
  }
}

const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(DenunciaAcoso, options);
