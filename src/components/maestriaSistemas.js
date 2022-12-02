import React,{Component} from 'react';
import Fade from 'react-reveal/Fade';
import CountTo from 'react-count-to';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MenuCentral from './menuCentral.js'
import LinksFooter from './linksFooter.js'
import axios from 'axios';
import "./styles/maestrias.css";

class MaestriaSistemas extends Component{

  constructor(){
    super();
    this.state={
      correo:"",
      alumnos1:[
              {nombre: "María del Carmen Ibañez Mendoza", lineaTrabajo:'Sistemas multimedia.', Tesis:'Metodología aplicada a la realidad virtual aumentada en simulación de proyectos arquitectónicos.', generacion:'primera'},
              {nombre: "Osvaldo René Rojo Roa", lineaTrabajo:'Sistemas multimedia.', Tesis:'Cubo 3D de realidad virtual.', generacion:'primera'},
              {nombre: "Lizbeth Alejandra Hernández Castellanos", lineaTrabajo:'Sistemas multimedia.', Tesis:'Interacción hombre-máquina en ambientes controlados.', generacion:'primera'},
              {nombre: "Julían Lusio Gutiérrez", lineaTrabajo:'Cómputo ubicuo.', Tesis:'Administración de gasolineras con tecnologías emergentes.', generacion:'primera'},
              {nombre: "Rosa María Razo Cerda", lineaTrabajo:'Cómputo ubicuo.', Tesis:'Desarrollo de casco informativo con retroalimentación ambiental para el uso en la minería.', generacion:'primera'},
              {nombre: "Salvador Camacho Robles", lineaTrabajo:'Sistemas multimedia.', Tesis:'Desarrollo de un simulador de recorridos en bicicleta con realidad virtual.', generacion:'primera'},
              {nombre: "Ana Fabiola López Huezo", lineaTrabajo:'---', Tesis:'---', generacion:'primera'},
              {nombre: "Marlen Fernández Cervantes", lineaTrabajo:'---', Tesis:'---', generacion:'primera'},
              {nombre: "Rafael Alejandro García Nuño", lineaTrabajo:'---', Tesis:'---', generacion:'primera'},
              {nombre: "Francisco Demetrio Flores Lozano", lineaTrabajo:'---', Tesis:'---', generacion:'primera'},
              {nombre: "Ramses Adan Lafarge Canales", lineaTrabajo:'---', Tesis:'---', generacion:'primera'},
              {nombre: "Benjamin de Jesús Galindo Ávalos", lineaTrabajo:'---', Tesis:'---', generacion:'primera'},
            ],
      alumnosLagos:[
              {nombre: "Juan Manuel Serrano García", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "Oswaldo Germán Jardines Delgado", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "Carlos Adalberto Valenzuela Melchor", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "David Alejandro Segundo Martín", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "José Octavio Moreno Aldana", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "Juan Antonio Medina Muñoz", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "Victor Manuel Hernández Díaz", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "Pedro Espinosa Esparza", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "Sergio Arturo Contreras Quesada", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "Nestor Chico Rojas", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "Amparo Martínez Salinas", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
              {nombre: "Josúe Eulises Orozco López", lineaTrabajo:'---', Tesis:'---', generacion:'lagos'},
      ],
      alumnos2:[
              {nombre: "Marcos Manuel Ávila Rosales", lineaTrabajo:'Sistemas multimedia.', Tesis:'Traductor de español a metalenguaje semántico natural.', generacion:'segunda'},
              {nombre: "Adriana Tovar Vergara.", lineaTrabajo:'Sistemas multimedia.', Tesis:'Juegos serios para el apoyo en terapias para niños con retardo de lenguaje.', generacion:'segunda'},
              {nombre: "Luis Edgar Oliva Amézquita.", lineaTrabajo:'Sistemas multimedia.', Tesis:'Juegos serios: Gramática difusa para el cumplimiento de ejercicios de rehabilitación con Kinect.', generacion:'segunda'},
              {nombre: "Héctor Tonatiuh Rico Mercado", lineaTrabajo:'Sistemas multimedia.', Tesis:'Juegos serios para combatir la obesidad infantil.', generacion:'segunda'},
              {nombre: "Ricardo René Parra Macías", lineaTrabajo:'Cómputo ubicuo', Tesis:'Diseño e implementación de sistemas operativos para entidades financieras.', generacion:'segunda'},
              {nombre: "Carmen Leticia Salcedo Quevedo", lineaTrabajo:'sistemas multimedia.', Tesis:'Juegos serios reconfigurables para activación física.', generacion:'segunda'},
              {nombre: "Rodrígo Gómez García", lineaTrabajo:'Cómputo ubicuo.', Tesis:'Desarrollo de estaciones metereológicas autónomas con agentes sensores remotos interconectados.', generacion:'segunda'},
              {nombre: "León Enrique Verdín Armenta", lineaTrabajo:'sistemas multimedia.', Tesis:'Traductor de Español A Metalenguaje Semántico Natural.', generacion:'segunda'},
              {nombre: "Ramón Edgardo Rincón Fernández", lineaTrabajo:'Cómputo ubicuo.', Tesis:'Una aproximación ontológica para la asistencia y diagnóstico médico.', generacion:'segunda'},
              {nombre: "Claudio César Castillo Rojas", lineaTrabajo:'Sistemas multimedia.', Tesis:'Generador de ambientes virtuales para videojuegos.', generacion:'segunda'},
              {nombre: "Francisco Javier González Siordia", lineaTrabajo:'Sistemas multimedia.', Tesis:'Interacción natural en ambientes immersivos como herramienta contra la obesidad.', generacion:'segunda'},
              {nombre: "Claudia Lucila Cárdenas Martínez", lineaTrabajo:'---', Tesis:'---', generacion:'segunda'},
              {nombre: "Ernesto Carlos Velázco Mercado", lineaTrabajo:'---', Tesis:'---', generacion:'segunda'},
              {nombre: "Roberto Huerta Flores", lineaTrabajo:'---', Tesis:'---', generacion:'segunda'},
              {nombre: "José Luis Cobián Hermosillo", lineaTrabajo:'---', Tesis:'---', generacion:'segunda'},
              {nombre: "Juan Miguel Aguayo García", lineaTrabajo:'---', Tesis:'---', generacion:'segunda'},
              {nombre: "Alder López Celdar", lineaTrabajo:'---', Tesis:'---', generacion:'segunda'},
              {nombre: "Angélica Bernal Marín", lineaTrabajo:'---', Tesis:'---', generacion:'segunda'},
              {nombre: "Yolanda Alejo Huerta", lineaTrabajo:'---', Tesis:'---', generacion:'segunda'},
      ],
      alumnos3:[
              {nombre: "Fernando Salazar Cervantes", lineaTrabajo:'---', Tesis:'---', generacion:'tercera'},
              {nombre: "Gelacia Palacios Montufar", lineaTrabajo:'Cómputo ubicuo.', Tesis:'Administración y seguimiento clínico de pacientes basado en la nube.', generacion:'tercera'},
              {nombre: "Abraham Obed Chan Canché", lineaTrabajo:'Sistemas multimedia.', Tesis:'Sistema distribuido para la interacción hombre máquina en ambientes virtuales.', generacion:'tercera'},
              {nombre: "Miguel Dolores Ordoñez García", lineaTrabajo:'---', Tesis:'---', generacion:'tercera'},
              {nombre: "Raúl Higinio Chávez Vázquez.", lineaTrabajo:'---', Tesis:'---', generacion:'tercera'},
              {nombre: "Isaura Muñiz Ortiz", lineaTrabajo:'---', Tesis:'---', generacion:'tercera'},
              {nombre: "José de Jesús Morales Contreras", lineaTrabajo:'---', Tesis:'---', generacion:'tercera'},
              {nombre: "René Alejandro Mercado Martínez", lineaTrabajo:'---', Tesis:'---', generacion:'tercera'},
              {nombre: "José Luis Roa García De La Paz", lineaTrabajo:'---', Tesis:'---', generacion:'tercera'},
              {nombre: "Humberto Perdomo Álvarez", lineaTrabajo:'---', Tesis:'---', generacion:'tercera'},
              {nombre: "Claudio Guadalupe Gino Sosa", lineaTrabajo:'---', Tesis:'---', generacion:'tercera'},
      ],
      alumnos4:[
              {nombre: "Edward Ulises Benitez Rendón", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Héctor Alberto Pérez Sánchez", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Ana Nicolasa Serrano Martínez", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Pedro Fernando Ramos López", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Harold Mauricio López Beltrán", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Christián Salomón Álvarez Robles", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Nora Anisol Velázquez Morales", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Sergio Pablo Pérez Muñoz", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Daniel Molina Sosa", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Leonardo de Jesús Mentado González", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Enríque Esquinca Espinosa", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "Raphael Galindo Hernández", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "José Gerardo Cadena Ramírez", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
              {nombre: "José Andrés Bueno García", lineaTrabajo:'---', Tesis:'---', generacion:'cuarta'},
      ],
      alumnos5:[
              {nombre: "Jonathan Castro Sánchez", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
              {nombre: "Alvin Vanni Sartor", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
              {nombre: "Daniel Moreno García", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
              {nombre: "Marcela de Jesús Ramírez Calvillo", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
              {nombre: "Felix Eli López Aguirre", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
              {nombre: "José Alberto Macías Saucedo", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
              {nombre: "Rosa María Cabrera Valdiviezo", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
              {nombre: "Rodolfo Javier Melín Ruíz", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
              {nombre: "Raúl Rivera Meza", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
              {nombre: "Luis José Padilla Benitez", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
              {nombre: "Carlos Andrés Flores Cortés", lineaTrabajo:'---', Tesis:'---', generacion:'quinta'},
      ],
      alumnos6:[
              {nombre: "Martha Angélica Parra Urias", lineaTrabajo:'---', Tesis:'---', generacion:'sexta'},
      ],
      alumnos7:[
              {nombre: "Rafael Arreola VIllaseñor", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
              {nombre: "René Ricardo Rincón Peña", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
              {nombre: "Oscar Raymundo Olvera Chávez", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
              {nombre: "Alejandro Higuera Lerma", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
              {nombre: "Gonzalo García Preciado", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
              {nombre: "David Castro Ruíz", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
              {nombre: "Oscar Fernando Ortíz Ortega", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
              {nombre: "Jorge Cruz Vargas", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
              {nombre: "J. Jesús Ruíz Reyes", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
              {nombre: "Erick De La Torre Morales", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
              {nombre: "Diego Krispín Torres Loera", lineaTrabajo:'---', Tesis:'---', generacion:'septima'},
      ],
      alumnos8:[
              {nombre: "Rosalio Silva Ibarra", lineaTrabajo:'---', Tesis:'---', generacion:'octava'},
              {nombre: "Saúl Sandoval Pádilla", lineaTrabajo:'---', Tesis:'---', generacion:'octava'},
              {nombre: "Geovanny Salazar Medina", lineaTrabajo:'---', Tesis:'---', generacion:'octava'},
              {nombre: "Carlos Heberardo Pérez Escobedo", lineaTrabajo:'---', Tesis:'---', generacion:'octava'},
              {nombre: "José Ramón Mata García", lineaTrabajo:'---', Tesis:'---', generacion:'octava'},
              {nombre: "Aldo Enrique López Ávila", lineaTrabajo:'---', Tesis:'---', generacion:'octava'},
              {nombre: "Aaron Israel Muñoz", lineaTrabajo:'---', Tesis:'---', generacion:'octava'},
              {nombre: "Jorge Flores Peña", lineaTrabajo:'---', Tesis:'---', generacion:'octava'},
              {nombre: "Victor Alfredo Contreras Salazar", lineaTrabajo:'---', Tesis:'---', generacion:'octava'},
              {nombre: "Miguel Ángel Cadena García", lineaTrabajo:'---', Tesis:'---', generacion:'octava'},
      ],
    }
  }

  onChange(e){
    var campo=e.target.name
    console.log(campo)
    this.setState({
      [campo]: e.target.value
      });
  }

  onClick(e){
    var self = this
    let formData = new FormData();

    formData.append('correo', this.state.correo)

    axios({
      method: 'post',
      params:{action:"maestriaSistemas"},
      url: 'https://tecmm.edu.mx/infoFormulario.php',
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
      //handle success
      console.log(response)
        alert(response.data)
        self.setState({
      })
    })
    .catch(function (response) {
      //handle error
      console.log(response)
    });
  }
  render(){
    return(

      <div className="maestriaSistemasContainer">
        <MenuCentral/>

        <div className="inscribeteContainer">
          <h1 id="iconoInscribete"> <i class="edit icon"></i></h1>

          <div id="formularioContacto">
            <h2>Solicita Información</h2>
            <p>Ingresa tu Correo electronico si deseas saber mas acerca de la Maestria en Sistemas Computacionales</p>
            <input onChange={this.onChange.bind(this)} name="correo" placeholder="correo electronico" type="email"/>
            <button onClick={this.onClick.bind(this)}>Enviar</button>
            <p>Tel: (01) 33 3682 1180 Ext. 164</p>
          </div>
        </div>


        <div className="objetivosSistemasContainer">

          <Fade left>
            <div className="objetivoContainer">
              <div>
                <h1>OBJETIVO</h1>
                <p>Formar líderes de excelencia con sólidos conocimientos en los Sistemas Computacionales, con un alto nivel competitivo que les permita analizar, diseñar y desarrollar software para coadyuvar en el desarrollo tecnológico, empresarial y de negocios. Participar en la toma de decisiones con una visión innovadora e integral que posibilite alcanzar una ventaja competitiva ante el entorno globalizado, con una perspectiva actual de la investigación en los campos relacionados con el Cómputo Ubicuo y los Sistemas Multimedia.<br/>Continúe leyendo para obtener más información y contáctenos en caso de que tenga alguna pregunta.</p>
              </div>
              <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/maestriaSistemas1.jpg"/>
            </div>
          </Fade>

          <Fade right>
            <div className="objetivosParticularesContainer">
              <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/maestriaSistemas2.jpg"/>

              <div>
                <h1>OBJETIVOS PARTICULARES</h1>
                <ul>
                  <li>Desarrollar profesionistas con conocimientos y habilidades para el desarrollo e investigación en el área, capaces de integrarlas en la estrategia de negocios y de crear una cultura de innovación de procesos y productos dentro de la organización.</li>
                  <li>Formar profesionales con una desarrollada capacidad para aplicar conocimiento científico tecnológico en su espacio de trabajo.</li>
                  <li>Ampliar los conocimientos en una disciplina, especialidad o campo con el fin de desarrollar en el estudiante la capacidad para aplicar el conocimiento científico o técnico de manera innovadora.</li>
                  <li>Actualizar a profesionales en áreas específicas, de modo que su conocimiento se amplíe y potencie para una aplicación óptima en la vida a laboral práctica y en el desarrollo de la sociedad.</li>
                  <li>Encauzar el desempeño profesional hacia una mayor comprensión de las necesidades.</li>
                </ul>
              </div>
            </div>
          </Fade>

        </div>

        <div className="perfilSistemasContainer">

          <Fade left>
            <div className="perfilIngreso">
              <h1>PERFIL DE INGRESO</h1>
              <ul>
                <li>Tener un alto sentido de la responsabilidad.</li>
                <li>Contar con fundamentos en temas de física y matemáticas. </li>
                <li>Mostrar habilidades de razonamiento lógico-matemático.</li>
                <li>Ser creativo, analítico, dinámico, autogestivo y con aptitudes de auto-aprendizaje.</li>
                <li>Demostrar apertura al cambio y disponibilidad a romper esquemas.</li>
                <li>Dominar los fundamentos de la computación para la creación, adecuación y mejoramiento de los sistemas.</li>
                <li>Buscar la superación constante en su profesión mediante la actualización continua.</li>
                <li>Poseer disposición para trabajar en equipo, interés por el desarrollo de software de calidad y por la aplicación de los conocimientos adquiridos en el estudio y desarrollo de dispositivos tecnológicos.</li>
                <li>Disponer de habilidades para la lectura y comprensión de escritos técnico-científicos en inglés.</li>
              </ul>
            </div>
          </Fade>

          <Fade right>
            <div className="perfilEgreso">
              <h1>PERFIL DE EGRESO</h1>
              <p>El egresado de la Maestría en Sistemas Computacionales, será un profesionista competente capaz de proponer, diseñar, implementar y desarrollar software de cómputo ubicuo o multimedia, teniendo la habilidad para participar en equipos multidisciplinarios, en la identificación de problemas y áreas de oportunidad. Aportando propuestas de solución, mediante la aplicación de metodologías y herramientas emergentes, contribuyendo así, en la toma de decisiones para resolver eficazmente los problemas de las organizaciones privadas y públicas, utilizando tecnologías de vanguardia que cumplan con estándares internacionales.</p>

              <div style={{display:"flex"}}>

                <div className="datosCard">
                  <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/generacionesPosgrados.png"/>
                  <div>
                    <CountTo className="contador" to={8} speed={5000} />
                    <h1>Generaciones</h1>
                  </div>
                </div>

                <div className="datosCard">
                  <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/egresadosPosgrados.png"/>
                  <div>
                    <CountTo className="contador" to={102} speed={5000} />
                    <h1>Egresados</h1>
                  </div>
                </div>

                <div className="datosCard">
                  <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/calendarioPosgrados.png"/>
                  <div>

                    <br/>
                    <h1>Desde 2010</h1>
                  </div>
                </div>

              </div>
            </div>
          </Fade>

        </div>


        <div className="nucleoAcademicoContainer">
          <div class="ui four doubling cards">

            <div class="card">
              <div class="image">
                <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/Conrado.jpg"/>
              </div>
              <div class="content">
                <div class="header">Conrado Hernández López</div>
                <div class="meta">
                  <a>Responsable Maestria</a>
                </div>
                <div class="description">

                  <ul>
                    <li>Docente – Investigador en el Instituto Tecnológico Mario Molina Campus Zapopan y Director general de INVETIA S. de R.L. C.V.</li>
                    <li>Maestro en Sistema Inteligentes Multimedia por el Centro de Investigación Avanzada CIATEQ A.C.</li>
                    <li>Desarrollo de proyectos en la línea de investigación ubicua.</li>
                  </ul>

                </div>
              </div>
              <div class="extra content">
                <span class="right floated">
                  <a target="_blank" href="mailto:conrado.hernandez@zapopan.tecmm.edu.mx">conrado.hernandez@zapopan.tecmm.edu.mx</a>
                </span>
              </div>
            </div>

            <div class="card">
              <div class="image">
                <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/AlbertoHernandez.jpg"/>
              </div>
              <div class="content">
                <div class="header">Alberto Hernández Ávalos</div>
                <div class="meta">
                    <a>Profesor tiempo completo</a>
                </div>
                <div class="description">
                  <ul>
                    <li>Maestro en ciencias por el CINVESTAV unidad Guadalajara.</li>
                  </ul>
                </div>
              </div>
              <div class="extra content">
                <span class="right floated">
                  <a target="_blank" href="mailto:alberto.avalos@zapopan.tecmm.edu.mx">alberto.avalos@zapopan.tecmm.edu.mx</a>
                </span>
              </div>
            </div>


            <div class="card">
              <div class="image">
                <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/FedericoZambrano.jpg"/>
              </div>
              <div class="content">
                <div class="header">Federico A. Arias Zambrano</div>
                <div class="meta">
                  <a>Profesor tiempo completo</a>
                </div>
                <div class="description">
                  <ul>
                    <li>Obtuvo el grado de Maestro en Ciencias en Ingeniería Eléctrica dentro del departamento de Control Automático del Cinvestav Unidad Guadalajara en el 2005.</li>
                  </ul>
                </div>
              </div>
              <div class="extra content">
                <span class="right floated">
                  <a target="_blank" href="mailto:federico.arias@zapopan.tecmm.edu.mx">federico.arias@zapopan.tecmm.edu.mx</a>
                </span>
              </div>
            </div>


            <div class="card">
              <div class="image">
                <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/JoseAntonioAviñaMéndez.jpg"/>
              </div>
              <div class="content">
                <div class="header">José Antonio Aviña Méndez</div>
                <div class="meta">
                  <a>Profesor tiempo completo</a>
                </div>
                <div class="description">
                  <ul>
                    <li>DESCRIPTION</li>
                  </ul>
                </div>
              </div>
              <div class="extra content">
                <span class="right floated">
                  <a target="_blank" href="mailto:jose.avina@zapopan.tecmm.edu.mx">jose.avina@zapopan.tecmm.edu.mx</a>
                </span>
              </div>
            </div>


            <div class="card">
              <div class="image">
                <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/JoseIbarra.jpg"/>
              </div>
              <div class="content">
                <div class="header">José de Jesús Ibarra Montalvo</div>
                <div class="meta">
                  <a>Profesor tiempo completo</a>
                </div>
                <div class="description">

                  <ul>
                    <li>-Doctorado en la Universidad de Guadalajara</li>
                    <li>-candidato al Sistema Nacional de Investigadores (SNI)</li>
                  </ul>


                </div>
              </div>
              <div class="extra content">
                <span class="right floated">
                  <a target="_blank" href="mailto:jose.ibarra@zapopan.tecmm.edu.mx">jose.ibarra@zapopan.tecmm.edu.mx</a>
                </span>

              </div>
            </div>


            <div class="card">
              <div class="image">
                <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/AdrianaTovar.jpg"/>
              </div>
              <div class="content">
                <div class="header">Adriana Tovar Arriaga</div>
                <div class="meta">
                  <a>Profesor tiempo completo</a>
                </div>
                <div class="description">
                  <ul>
                    <li>Ingeniera en Sistemas Computacionales, tras años de experiencia en el área industrial automotriz, decidí dar un giro a mi carrera para orientarme a la educación en ingeniería en la cuál tengo 14 años de experiencia. Estoy convencida que es la educación, investigación y desarrollo de tecnología propia llevaría a un progreso real y competitivo a nuestro país.</li>
                  </ul>
                </div>
              </div>
              <div class="extra content">
                <span class="right floated">
                  <a target="_blank" href="mailto:adriana.tovar@zapopan.tecmm.edu.mx">adriana.tovar@zapopan.tecmm.edu.mx</a>
                </span>
              </div>
            </div>


            <div class="card">
              <div class="image">
                <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/AbrahamObedChanCanche.jpg"/>
              </div>
              <div class="content">
                <div class="header">Abraham Obed Chan Canche</div>
                <div class="meta">
                  <a>Profesor tiempo completo</a>
                </div>
                <div class="description">
                  <ul>
                    <li>Egresado de La Maestría en Sistemas Computacionales en el Instituto Tecnológico Superior de Jalisco José Mario Molina Pasquel y Henríquez Unidad Académica Zapopan</li>
                    <li>Interesado en trabajos relacionados con el desarrollo de software en los ámbitos de Multimedia y mejora de procesos, así como en la interacción de dispositivos ubicuos y ciencia de datos.</li>
                  </ul>

                </div>
              </div>
              <div class="extra content">
                <span class="right floated">
                  <a target="_blank" href="mailto:abraham.chan@zapopan.tecmm.edu.mx">abraham.chan@zapopan.tecmm.edu.mx</a>
                </span>
              </div>
            </div>


            <div class="card">
              <div class="image">
                <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/PauloMartinez.jpg"/>
              </div>
              <div class="content">
                <div class="header">Paulo César Martínez Garibay</div>
                <div class="meta">
                  <a>Profesor tiempo completo</a>
                </div>
                <div class="description">
                  <ul>
                    <li>DESCRIPTION</li>
                  </ul>
                </div>
              </div>
              <div class="extra content">
                <span class="right floated">
                  <a target="_blank" href="mailto:paulo.martinez@zapopan.tecmm.edu.mx">paulo.martinez@zapopan.tecmm.edu.mx</a>
                </span>

              </div>
            </div>


            <div class="card">
              <div class="image">
                <img src="http://tecmm.edu.mx/imagesReact/images/posgrados/MiguelBernal.jpg"/>
              </div>
              <div class="content">
                <div class="header">Miguel Bernal Marín</div>
                <div class="meta">
                  <a>Profesor tiempo completo</a>
                </div>
                <div class="description">
                  <ul>
                    <li>Egresado de la Universidad de Guadalajara donde hizo la carrera de Licenciado en Matemáticas.</li>
                    <li>Maestría y Doctorado en Ciencias en el CINVESTAV campus Guadalajara.</li>
                    <li>Estancia en Alemania por 6 meses.</li>
                    <li>Publicaciones en revistas científicas indexadas internacionales.</li>
                    <li>Ponente en congresos cientificos y de divulgación.</li>
                    <li>Trabaja en la empresa Intel de Guadalajara y es responsable del mantenimiento del kernel de la distribución de Clear Linux OS y también de la integración del Proyecto ACRN.</li>
                    <li>Docente en la academia de sistemas y de la maestría en sistemas del tecnológico José Mario Molina Pasquel y Henríquez Unidad Académica Zapopan.</li>
                  </ul>

                </div>
              </div>
              <div class="extra content">
                <span class="right floated">
                  <a target="_blank" href="mailto:miguel.bernal@zapopan.tecmm.edu.mx">miguel.bernal@zapopan.tecmm.edu.mx</a>
                </span>
              </div>
            </div>

          </div>

        </div>

        <div className="generacionesContainer">
          <Tabs defaultActiveKey="generacion1" transition={false} id="noanim-tab-example">

            <Tab eventKey="generacion1" title="1ra Generacion">
              <div class="ui four doubling cards">
                {this.state.alumnos1.map((it)=>(
                  <div class="ui card">
                    <div class="content">
                      <div class="center aligned header">{it.nombre}</div>
                      <div class="center aligned description">
                        <p data-tooltip="Tesis" data-position="bottom center">{it.Tesis}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="center aligned author" data-tooltip="Linea de Trabajo" data-position="top center">
                        <i class="cogs icon"></i> {it.lineaTrabajo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </Tab>


            <Tab eventKey="generacionLagos" title="Generacion Lagos">
              <div class="ui four doubling cards">
                {this.state.alumnosLagos.map((it)=>(
                  <div class="ui card">
                    <div class="content">
                      <div class="center aligned header">{it.nombre}</div>
                      <div class="center aligned description">
                        <p data-tooltip="Tesis" data-position="bottom center">{it.Tesis}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="center aligned author" data-tooltip="Linea de Trabajo" data-position="top center">
                        <i class="cogs icon"></i> {it.lineaTrabajo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </Tab>

            <Tab eventKey="generacion2" title="2da Generacion">
              <div class="ui four doubling cards">
                {this.state.alumnos2.map((it)=>(
                  <div class="ui card">
                    <div class="content">
                      <div class="center aligned header">{it.nombre}</div>
                      <div class="center aligned description">
                        <p>{it.Tesis}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="center aligned author">
                        <i class="cogs icon"></i> {it.lineaTrabajo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>

            <Tab eventKey="generacion3" title="3ra Generacion">
              <div class="ui four doubling cards">
                {this.state.alumnos3.map((it)=>(
                  <div class="ui card">
                    <div class="content">
                      <div class="center aligned header">{it.nombre}</div>
                      <div class="center aligned description">
                        <p>{it.Tesis}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="center aligned author">
                        <i class="cogs icon"></i> {it.lineaTrabajo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>

            <Tab eventKey="generacion4" title="4ta Generacion">
              <div class="ui four doubling cards">
                {this.state.alumnos4.map((it)=>(
                  <div class="ui card">
                    <div class="content">
                      <div class="center aligned header">{it.nombre}</div>
                      <div class="center aligned description">
                        <p>{it.Tesis}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="center aligned author">
                        <i class="cogs icon"></i> {it.lineaTrabajo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>

            <Tab eventKey="generacion5" title="5ta Generacion">
              <div class="ui four doubling cards">
                {this.state.alumnos5.map((it)=>(
                  <div class="ui card">
                    <div class="content">
                      <div class="center aligned header">{it.nombre}</div>
                      <div class="center aligned description">
                        <p>{it.Tesis}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="center aligned author">
                        <i class="cogs icon"></i> {it.lineaTrabajo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>

            <Tab eventKey="generacion6" title="6ta Generacion">
              <div class="ui four doubling cards">
                {this.state.alumnos6.map((it)=>(
                  <div class="ui card">
                    <div class="content">
                      <div class="center aligned header">{it.nombre}</div>
                      <div class="center aligned description">
                        <p>{it.Tesis}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="center aligned author">
                        <i class="cogs icon"></i> {it.lineaTrabajo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>

            <Tab eventKey="generacion7" title="7ma Generacion">
              <div class="ui four doubling cards">
                {this.state.alumnos7.map((it)=>(
                  <div class="ui card">
                    <div class="content">
                      <div class="center aligned header">{it.nombre}</div>
                      <div class="center aligned description">
                        <p>{it.Tesis}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="center aligned author">
                        <i class="cogs icon"></i> {it.lineaTrabajo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>

            <Tab eventKey="generacion8" title="8va Generacion">
              <div class="ui four doubling cards">
                {this.state.alumnos8.map((it)=>(
                  <div class="ui card">
                    <div class="content">
                      <div class="center aligned header">{it.nombre}</div>
                      <div class="center aligned description">
                        <p>{it.Tesis}</p>
                      </div>
                    </div>
                    <div class="extra content">
                      <div class="center aligned author">
                        <i class="cogs icon"></i> {it.lineaTrabajo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>

          </Tabs>
        </div>

        <LinksFooter/>
      </div>
    );
  }
}
export default MaestriaSistemas;
