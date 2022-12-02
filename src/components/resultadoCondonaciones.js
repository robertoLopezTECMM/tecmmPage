import React, { Component } from 'react';

import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import './styles/resultadoCondonaciones.css'



class ResultadosCondonaciones extends Component{

    constructor(props){
      super(props);
      this.state={
        carrerasArray:null,
        logeado:false,
        username: '',
        password: '',
      }

    }


  
  

  


  render(){

    return(
      <div className="ResultadosCondonacionesContainer">

      <MenuCentral/>

        <div >
            <h1>RESULTADOS DE CONDONACIONES</h1>
            <h2 className="ResultadosCondonacionesSubtitulo">AGOSTO 2020 - ENERO 2021</h2>

            <p>Para conocer el porcentaje obtenido de la condonación autorizada, para dudas, aclaraciones, o si no apareces en el listado, favor de contactar al enlace de condonaciones de cada Unidad Académica respectiva por medio del <a id="resaltado">correo de condonaciones</a> correspondiente</p>
            
            <div>
                <div class="ui cards">
                    
                    <div class="ui card">
                        <div class="content">
                        <div class="header">Arandas</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/arandas-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@arandas.tecmm.edu.mx">condonaciones@arandas.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">Chapala</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/chapala-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@chapala.tecmm.edu.mx">condonaciones@chapala.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">Cocula</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/cocula-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@cocula.tecmm.edu.mx">condonaciones@cocula.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">El Grullo</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/elgrullo-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@elgrullo.tecmm.edu.mx">condonaciones@elgrullo.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">La Huerta</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/lahuerta-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@lahuerta.tecmm.edu.mx">condonaciones@lahuerta.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">Lagos de Moreno</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/lagosdemoreno-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@lagos.tecmm.edu.mx">condonaciones@lagos.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">Mascota</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/mascota-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@mascota.tecmm.edu.mx">condonaciones@mascota.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">Tala</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/tala-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@tala.tecmm.edu.mx">condonaciones@tala.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">Tamazula</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/tamazula-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@tamazula.tecmm.edu.mx">condonaciones@tamazula.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">Tequila</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/tequila-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@tequila.tecmm.edu.mx">condonaciones@tequila.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">Puerto Vallarta</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/puertovallarta-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@vallarta.tecmm.edu.mx">condonaciones@vallarta.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">Zapopan</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/zapopan-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@zapopan.tecmm.edu.mx">condonaciones@zapopan.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                    <div class="ui card">
                        <div class="content">
                        <div class="header">Zapotlanejo</div>
                        <div class="meta"><a target="_blank" href="http://tecmm.edu.mx/documentos/res-con-2020-2021/zapotlanejo-resultados-condonaciones-20-21.pdf">Resultados <i class="file alternate icon"></i></a></div>
                        <div class="description">Dudas: <a target="_blank" href="mailto:condonaciones@zapotlanejo.tecmm.edu.mx">condonaciones@zapotlanejo.tecmm.edu.mx</a></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


      <LinksFooter/>

      </div>
    );
  }
}


export default ResultadosCondonaciones;
