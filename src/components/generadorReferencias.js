import React, { Component } from 'react';
import {
    ProgressIndicator,
    ProgressStep,
    ButtonGroup,
    ButtonIcon,
    Button,
  } from 'react-rainbow-components';
import axios from 'axios';
import Rodal from 'rodal';
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/generadorReferencias.css';

const stepNames = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5'];

const steps = ['first', 'second', 'third', 'fourth', 'fifth'];

class SimpleProgressStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal:false,
          numero:"",
          pass:"",
          showDivInfo:"none",
          showInputPass:"block",
          nombreAlumno:"",
          statusAlumno:"",
          campusAlumno:""
        };
        this.handleFindClick = this.handleFindClick.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleVerifyPass = this.handleVerifyPass.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);

    }

    handleChangeNumber(evt){
      var campo=evt.target.name

      console.log(campo)

      this.setState({
        [campo]: evt.target.value
        });
    }

    handleFindClick(e){
      const url = 'http://187.174.80.184:8080/fin/pay/findStudent'
      //const url = 'http://187.174.80.184:8080/fin/pay/validPay'
      var self=this
      axios.get(url, {params:{code:this.state.numero, passwd:this.state.pass}}).then(response => response.data)
      .then((data) => {
        var noticiasFinal=[]
        console.log(data)

        this.setState({
          nombreAlumno:data.name,
          statusAlumno:data.status,
          campusAlumno:data.campus,
          showDivInfo:"block"

        })

      })
    }

    handleVerifyPass(e){
      const url = 'http://187.174.80.184:8080/fin/pay/validPay'
      //const url = 'http://187.174.80.184:8080/fin/pay/validPay'
      var self=this
      axios.get(url, {params:{code:this.state.numero, passwd:this.state.pass}}).then(response => response.data)
      .then((data) => {
        var noticiasFinal=[]
        console.log(data.passwd)

        if(data.passwd === "OK"){
          window.location.href="http://187.174.80.184:8080/fin/pay/getBankLine?campus=2&code="+this.state.numero
        }else{
          alert("tu contraseña es incorrecta")
        }

        this.setState({


        })

      })
    }

    show(){
      this.setState({ showModal: true });
    }

    hide() {
      this.setState({ showModal: false });
    }


    render() {
        const { currentStepIndex, isBackDisabled, isNextDisabled } = this.state;

        const showDivInfo={
          display:this.state.showDivInfo
        }

        const showInputPass={
          display:this.state.showInputPass
        }

        return (

          <div className="div-principalGeneradorReferencias">
            <Rodal width="400" height="200" visible={this.state.showModal} onClose={this.hide.bind(this)}>
              <div className="modalPass">
                <h1>Ingresa tu contraseña</h1>
                <input name="pass" onChange={this.handleChangeNumber.bind(this)} style={showInputPass} placeholder="Ingresa tu contraseña" type="password"/>
                <div className="passButtons">
                  <button id="btnDescargar" onClick={this.handleVerifyPass.bind(this)}> <i class="download icon"></i>Descargar </button>
                  <button id="btnCancelar"> Cancelar </button>
                </div>
              </div>
            </Rodal>
            <MenuCentral/>

              <div>
                <h1>Generador de Referencias Bancarias</h1>

                <div className="div-formsContainer">

                  <div className="div-formAlumno">
                    <p>Ingresa tu numero de control o tu CURP</p>
                    <input name="numero" onChange={this.handleChangeNumber.bind(this)} placeholder="No. Control / CURP"/>
                    <button onClick={this.handleFindClick}> <i class="search icon"></i> Buscar</button>

                    <div className="divAlumno">
                      <table style={showDivInfo} className="tableAlumno">
                        <tr>
                          <th>Nombre</th>
                          <th>Status</th>
                          <th>Campus</th>
                          <th>Referencia</th>
                        </tr>
                        <tr>
                          <td>{this.state.nombreAlumno}</td>
                          <td>{this.state.statusAlumno}</td>
                          <td>Zapopan</td>
                          <td>
                            <a onClick={this.show.bind(this)}>
                              <i class="file alternate outline icon"></i>Referencia
                            </a>
                          </td>
                        </tr>
                      </table>
                    </div>

                  </div>

                </div>
              </div>
            <LinksFooter/>
          </div>
        );
    }
}
export default SimpleProgressStep ;
