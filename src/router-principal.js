import React, { Component } from 'react';
import {Route, HashRouter, BrowserRouter, Switch,Router} from 'react-router-dom'

import Landing from './landing.js';
import Campus from './components/campus.js';
import EnConstruccion from './components/enConstruccion.js';
import OfertaAcademica from './components/ofertaAcademica.js'
import QuienesSomos from './components/quienesSomos.js'
import Rectoria from './components/rectoria.js'
import ModeloAcademico from './components/modeloAcademico.js'
import QuejasYDenuncias from './components/quejasYDenuncias.js'
import DenunciaOmisiones from './components/denunciaOmisiones.js'
import DenunciaAcoso from './components/denunciaAcoso.js'
import DenunciaContraloria from './components/denunciaContraloria.js'
import PatentesInvestigacion from './components/patentesInvestigacion.js'
import Valores from './components/valores.js'
import Convocatorias from './components/convocatorias.js'
import Carrera from './components/carrera.js'
import Noticia from './components/noticia.js'
import Contacto from './components/contacto.js'
import VidaEstudiantil from './components/vidaEstudiantil.js'
import Igualdad from './components/igualdad.js'
import ContraloriaSocial from './components/contraloriaSocial.js'
import JuntasDeGobierno from './components/juntasDeGobierno.js'
import Eneit from './components/eneit.js'
import BolsaTrabajo from './components/bolsaTrabajo.js'

import Posgrados from './components/posgrados'
import MaestriaAdministracion from './components/maestriaAdministracion.js'
import MaestriaSistemas from './components/maestriaSistemas.js'
import NuevoIngreso from './components/nuevoIngreso.js'
import JuntasGobierno from './components/juntasGobierno.js'
import Condonaciones from './components/condonaciones.js'
import ResultadosCondonaciones from './components/resultadoCondonaciones.js'




class RouterPrincipal extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/unidadesAcademicas" component={Campus}/>
            <Route path="/ofertaAcademica" component={OfertaAcademica}/>
            <Route path="/enConstruccion" component={EnConstruccion}/>
            {/*<Route path="/ofertaAcademica" component={OfertaAcademicaCampus}/>*/}
            <Route path="/quienesSomos" component={QuienesSomos}/>
            <Route path="/Rectoria" component={Rectoria}/>
            <Route path="/modeloAcademico" component={ModeloAcademico}/>
            <Route path="/quejasYdenuncias" component={QuejasYDenuncias}/>
            <Route path="/denunciaOmisiones" component={DenunciaOmisiones}/>
            <Route path="/denunciaAcoso" component={DenunciaAcoso}/>
            <Route path="/denunciaContraloria" component={DenunciaContraloria}/>
            <Route path="/patentes" component={PatentesInvestigacion}/>
            <Route path="/Bienvenida" component={Valores}/>
            <Route path="/Convocatorias" component={Convocatorias}/>
            <Route path="/Carrera/:carreraId" component={Carrera}/>
            <Route path="/Noticia/:noticiaNombre" component={Noticia}/>
            <Route path="/Contacto" component={Contacto}/>
            <Route path="/vidaEstudiantil" component={VidaEstudiantil}/>
            <Route path="/Igualdad" component={Igualdad}/>
            <Route path="/contraloriaSocial" component={ContraloriaSocial}/>
            <Route path="/juntasDeGobierno" component={JuntasDeGobierno}/>
            <Route path="/juntasGobierno" component={JuntasGobierno}/>
            <Route path="/eneit" component={Eneit}/>
            <Route path="/bolsaTrabajo" component={BolsaTrabajo}/>

            <Route path="/posgrados" component={Posgrados}/>
            <Route path="/maestriaAdministracion" component={MaestriaAdministracion}/>
            <Route path="/maestriaSistemas" component={MaestriaSistemas}/>
            <Route path="/nuevoIngreso" component={NuevoIngreso}/>
            <Route path="/condonaciones" component={Condonaciones}/>
            <Route path="/resultadosCondonaciones" component={ResultadosCondonaciones}/>
            {/*<Route path="/generadorReferencias" component={SimpleProgressStep}/>*/}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default RouterPrincipal;
