import React,{Component} from 'react';
import Fade from 'react-reveal/Fade';

import "./styles/posgrados.css";

class Posgrados extends Component{

  render(){
    return(
      <div>
        <div className="posgradosParallax1">
          <div className="mensajePosgrado">
            <h1>Posgrados TecMM</h1>
            <p>Como estudiante de posgrado en Tecnológico Mario Molina Campus Zapopan, usted encontrará un gran ambiente de aprendizaje y profesionales dedicados a la excelencia en educación. Continúe leyendo para conocer nuestros programas y contáctenos en caso de que tenga alguna pregunta.</p>
          </div>
        </div>

        <Fade left>
          <div className="queOfrecemosContainer">
            <h1>Programas Disponibles</h1>
            <h2>¿Que Ofrecemos?</h2>
          </div>
        </Fade>

        <div className="posgradosParallax2">
          <div className="infoMaestriaSistemas">
            <h1>Maestria en Sistemas Computacionales</h1>
            <p>Formar especialistas de manera integral con capacidad analítica, crítica, creativa y de liderazgo que aporten soluciones computacionales a las organizaciones.</p>
            <a href="/maestriaSistemas">
              Mas Información <i class="arrow right icon"></i>
            </a>
          </div>

          <div className="infoMaestriaAdministracion">
            <h1>Maestria en Administración</h1>
            <p>La Maestría en Administración, es una opción que brindará a los profesionistas oportunidades de profundizar en la disciplina de la administración, identificando las nuevas aportaciones de la ciencia y la tecnología.</p>
            <a href="/maestriaAdministracion">
              Mas Información <i class="arrow right icon"></i>
            </a>
          </div>
        </div>






      </div>
    );
  }
}
export default Posgrados;
