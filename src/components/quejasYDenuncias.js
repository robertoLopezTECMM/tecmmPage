import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {withGetScreen} from 'react-getscreen'
import Rodal from 'rodal';
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/quejasYDenuncias.css';
import 'rodal/lib/rodal.css'



class QuejasYDenuncias extends Component {

  constructor(props){
    super(props);
    this.state={
      visible:false,
    }
  }

  mostrar(){
    this.setState({
      visible:true,
    });
  }

  ocultar(){
    this.setState({
      visible:false,
    });
  }


  render() {
    return (
      <div className="div-principalQuejas">
        <MenuCentral/>


        <img className="img-bannerQuejas" src="http://tecmm.edu.mx/imagesReact/images/bannerDenuncia.jpg"/>

        <div className="div-botonesQuejas">

          <div className="div-Queja1">

            <Link to="/denunciaOmisiones">
              <button className="btn1-Quejas">DENUNCIA SOBRE<br/>ACTOS U OMISIONES<br/>COMETIDAS POR<br/>SERVIDORAS Y<br/>SERVIDORES PÚBLICOS</button>
            </Link>
            <p className="p-Quejas">En la Segunda Sesión Ordinaria de la Junta de Gobierno del Organismo
               Público Descentralizado del Gobierno del Estado denominado Instituto
               Tecnológico "José Mario Molina Pasquel y Henríquez", se aprobaron
               las normas que regirán el correcto actuar de los servicios Públicos
               del TecMM, sujetándose y asumiendo lo dispuesto en el Código de Ética
               y Conducta de los Servidores Públicos de la Administración Pública
               del Estado de Jalisco y del Código de Ética y de Conducta de Servidoras y Servidores
               Públicos del Tecnológico Nacional de México.<br/><br/>
               Si has sufrido o presenciado actos que vayan en contra de dichas normas
               tales como: acoso laboral, abuso de poder, atropello de derechos humanos
               discriminación cultural, sexual, religiosa, étnica, o de cualquier índole, <a href="/denunciaOmisiones">denuncia aquí</a><br/><br/></p>
          </div>

          <div className="div-Queja2">

            <Link to="/denunciaAcoso">
              <button className="btn2-Quejas">DENUNCIA POR<br/>HOSTIGAMIENTO<br/>O ACOSO</button>
            </Link>
            <p className="p-Quejas">El TecMM se encuentra en proceso de certificación del Sistema
               de Gestión de Equidad de Género bajo la Norma Mexicana
               NMX-R-025-SCFI-2015 en la Igualdad Laboral y No Discriminación.<br/><br/>
               Gracias a esto, se logró la conformación del Subcomité de Ética y Prevención
               de Conflictos de Interés del Instituto Tecnológico José Mario Molina Pasquel
               y Henríquez a través del proceso estipulado en las bases para la Integración,
               Organización y Funcionamiento del Subcomité de Ética y Prevención de Conflictos
               de interés del Tecnológico Nacional de México.<br/><br/>
               Si has sufrido actos que pongan en riesgo tu integridad o tu persona, abuso,
               acoso, hostigamiento, <a href="/denunciaAcoso">denuncia aquí</a><br/><br/><br/></p>
          </div>

          <div className="div-Queja3">

            <Link to={'/denunciaContraloria'}>
              <button className="btn3-Quejas">DENUNCIA ANTE<br/>EL ÓRGANO DE<br/>CONTROL</button>
            </Link>

            <p className="p-Quejas">El Órgano de Control del Instituto es responsable de vigilar el manejo
               y la aplicación de los recursos públicos, así como evaluar tanto su desempeño
               general como el de sus funciones en particular.<br/><br/>
               La titular del Órgano de Control, Licenciada Mónica Ofelia Villanueva Aceves,
               pone a su disposición un buzón electrónico a fin de recibir queja o denuncia
               relacionada con actos u omisiones de Servidores Públicos adscritos al
               Instituto Tecnológico José Mario Molina Pasquel y Henríquez.<br/><br/>
               Estamos a tus órdenes<br/><br/>
               Órgano de Control del Instituto Tecnológico José Mario Molina Pasquel y Henríquez<br/>
               Camino Arenero 1101<br/>
               Colonia El Bajío<br/>
               Zapopan, Jalisco C.P. 45019<br/><br/></p>
          </div>


        </div>


        <LinksFooter/>


      </div>
    );
  }
}


const options = {mobileLimit: 420, tabletLimit: 770}
export default withGetScreen(QuejasYDenuncias, options);
