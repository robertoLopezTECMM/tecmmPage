import React, { Component } from 'react';
import axios from 'axios';
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/denunciaOmisiones.css';

class DenunciaOmisiones extends Component {

  constructor(props){
    super(props);
    this.state={
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
    }

    this.onClick = this.onClick.bind(this);

  }

  onClick(e){
    switch (e.target.id) {
      case "buttonEnviar":

        const datosDenunciaOmision={
          tipoDenuncia:"denunciaOmision",

          nombreDemandante:this.state.nombreDemandante,
          puestoDemandante:this.state.puestoDemandante,
          telefonoDemandante:this.state.telefonoDemandante,
          correoDemandante:this.state.correoDemandante,
          domicilioDemandante:this.state.domicilioDemandante,

          nombreDemandado:this.state.nombreDemandado,
          cargoDemandado:this.state.cargoDemandado,
          unidadDemandado:this.state.unidadDemandado,

          fechaHechos:this.state.fechaHechos,
          horaHechos:this.state.horaHechos,
          lugarHechos:this.state.lugarHechos,
          frecuenciaHechos:this.state.frecuenciaHechos,
          hechos:this.state.hechos,

          nombreTestigo:this.state.nombreTestigo,
          domicilioTestigo:this.state.domicilioTestigo,
          telefonoTestigo:this.state.telefonoTestigo,
          correoTestigo:this.state.correoTestigo,
          entidadTestigo:this.state.entidadTestigo,
          cargoTestigo:this.state.cargoTestigo
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

  onChange(e){
    var campo=e.target.name

    this.setState({
      [campo]: e.target.value
    });
  }



  render() {
    return (
      <div className="div-principalDenunciaOmisiones">
        <MenuCentral/>

        <div className="div-formularioDenunciaOmisiones">

          <div className="divLeyendaFormato">
            <h1> En caso de algún problema con el formulario, favor de descargar el formato de denuncia <a href="http://tecmm.edu.mx/documentos/formatos-denuncias/formato-denuncia-omisiones.docx">aquí</a> y enviar directamente al correo: <a href="mailto:denuncia@tecmm.edu.mx">denuncia@tecmm.edu.mx</a> </h1>
          </div>

          <div id="form-demandante" class="ui form">

            <h1 className="h1-tituloForms">DATOS DE LA PERSONA QUE PRESENTA LA DENUNCIA</h1>

            <div class="two fields">
              <div class="field">
                <label>NOMBRE COMPLETO</label>
                <input onChange={this.onChange.bind(this)} name="nombreDemandante" value={this.state.nombreDemandante} type="text"/>
              </div>

              <div class="field">
                <label>PUESTO O ÁREA DONDE LABORA</label>
                <input onChange={this.onChange.bind(this)} name="puestoDemandante" value={this.state.puestoDemandante} type="text"/>
              </div>
            </div>

            <div class="two fields">

              <div class="field">
                <label>TELÉFONO DE CONTACTO</label>
                <input onChange={this.onChange.bind(this)} name="telefonoDemandante" value={this.state.telefonoDemandante} type="text"/>
              </div>

              <div class="field">
                <label>CORREO ELECTRÓNICO</label>
                <input onChange={this.onChange.bind(this)} name="correoDemandante" value={this.state.correoDemandante} type="text"/>
              </div>

            </div>

            <div class="field">
              <label>DOMICILIO</label>
              <input onChange={this.onChange.bind(this)} name="domicilioDemandante" value={this.state.domicilioDemandante} type="text"/>
            </div>

            <p>ADVERTENCIA: A LA PERSONA QUE DESEE CONSERVAR EL ANONIMATO, SÓLO PODRÁ ENTERARSE DEL CURSO DE LA DENUNCIA PRESENTADA A TRAVÉS DEL SEGUIMIENTO QUE ELLA MISMA DÉ A LAS SESIONES DEL COMITÉ.</p>
          </div>

          <div id="form-demandado" class="ui form">

            <h1 className="h1-tituloForms">DATOS DEL SERVIDOR(A) PÚBLICO (A) CONTRA QUIEN SE PRESENTA LA DENUNCIA</h1>

            <div class="two fields">
              <div class="field">
                <label>NOMBRE COMPLETO</label>
                <input onChange={this.onChange.bind(this)} name="nombreDemandado" value={this.state.nombreDemandado} type="text"/>
              </div>
              <div class="field">
                <label>CARGO O PUESTO</label>
                <input onChange={this.onChange.bind(this)} name="cargoDemandado" value={this.state.cargoDemandado} type="text"/>
              </div>
            </div>

            <div class="field">
              <label >UNIDAD ACADÉMICA EN LA QUE SE DESEMPEÑA</label>
              <input onChange={this.onChange.bind(this)} name="unidadDemandado" value={this.state.unidadDemandado} type="text"/>
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
              <textarea onChange={this.onChange.bind(this)} name="hechos" value={this.state.hechos}></textarea>
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
                <input onChange={this.onChange.bind(this)} name="correoTestigo" value={this.state.correoTestigo} type="text"/>
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
                  <input onChange={this.onChange.bind(this)} name="entidadTestigo" value={this.state.entidadTestigo} type="text"/>
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

export default DenunciaOmisiones;
