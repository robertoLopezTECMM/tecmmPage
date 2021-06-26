import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withGetScreen } from "react-getscreen";
import MenuCentral from "./menuCentral.js";
import LinksFooter from "./linksFooter.js";
import "./styles/ofertaAcademica.css";
import Carreras from "./carrerasData.js";

class CarreraItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.clickImage = this.clickImage.bind(this);
  }

  clickImage() {
    var perfilEgresoLocal = this.props.perfil;
    var perfilEgresoLocalString = JSON.stringify(perfilEgresoLocal);

    var cacheData = {
      portada: this.props.portada,
      youtube: this.props.youtube,
      campus: this.props.campus,
      objetivo: this.props.objetivo,
      perfilEgreso: perfilEgresoLocalString,
      reticula: this.props.reticula,
      folleto: this.props.folleto,
    };

    var cacheDataString = JSON.stringify(cacheData);

    localStorage.setItem("carrera", cacheDataString);
  }

  render() {
    const newTo = {
      pathname: "/Carrera/" + this.props.nombre,
    };

    return (
      <div className="div-carreraItem">
        <Link to={newTo}>
          <img onClick={this.clickImage} src={this.props.card} />
        </Link>
      </div>
    );
  }
}

class OfertaAcademica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrerasArray: null,
    };

    this.clickImageMaestria = this.clickImageMaestria.bind(this);
  }

  componentWillMount() {
    var carrerasArrayVar = Carreras();

    localStorage.removeItem("carrera");

    this.setState({
      carrerasArray: carrerasArrayVar,
    });
  }

  clickImageMaestria(id, e) {
    switch (id) {
      case 1:
        var perfilEgresoLocal = this.state.carrerasArray[21].perfilEgreso;
        var perfilEgresoLocalString = JSON.stringify(perfilEgresoLocal);

        var cacheData = {
          portada: this.state.carrerasArray[21].portada,
          campus: this.state.carrerasArray[21].campus,
          objetivo: this.state.carrerasArray[21].objetivo,
          perfilEgreso: perfilEgresoLocalString,
          reticula: this.state.carrerasArray[21].reticula,
          folleto: this.state.carrerasArray[21].folleto,
        };

        var cacheDataString = JSON.stringify(cacheData);

        localStorage.setItem("carrera", cacheDataString);

        break;

      case 2:
        var perfilEgresoLocal = this.state.carrerasArray[22].perfilEgreso;
        var perfilEgresoLocalString = JSON.stringify(perfilEgresoLocal);

        var cacheData = {
          portada: this.state.carrerasArray[22].portada,
          campus: this.state.carrerasArray[22].campus,
          objetivo: this.state.carrerasArray[22].objetivo,
          perfilEgreso: perfilEgresoLocalString,
          reticula: this.state.carrerasArray[22].reticula,
          folleto: this.state.carrerasArray[22].folleto,
        };

        var cacheDataString = JSON.stringify(cacheData);

        localStorage.setItem("carrera", cacheDataString);

        break;

      case 3:
        var perfilEgresoLocal = this.state.carrerasArray[23].perfilEgreso;
        var perfilEgresoLocalString = JSON.stringify(perfilEgresoLocal);

        var cacheData = {
          portada: this.state.carrerasArray[23].portada,
          campus: this.state.carrerasArray[23].campus,
          objetivo: this.state.carrerasArray[23].objetivo,
          perfilEgreso: perfilEgresoLocalString,
          reticula: this.state.carrerasArray[23].reticula,
          folleto: this.state.carrerasArray[23].folleto,
        };

        var cacheDataString = JSON.stringify(cacheData);

        localStorage.setItem("carrera", cacheDataString);

        break;
    }
  }

  render() {
    const newToMaestriaAdministracion = {
      pathname: "/Carrera/" + this.state.carrerasArray[22].name,
      portada: this.state.carrerasArray[22].portada,
      objetivo: this.state.carrerasArray[22].objetivo,
      perfilEgreso: this.state.carrerasArray[22].perfilEgreso,
      reticula: this.state.carrerasArray[22].reticula,
      campus: this.state.carrerasArray[22].campus,
      folleto: this.state.carrerasArray[22].folleto,
    };

    const newToMaestriaSistemas = {
      pathname: "https://posgrados3.wixsite.com/teczapopanmsc",
      portada: this.state.carrerasArray[23].portada,
      objetivo: this.state.carrerasArray[23].objetivo,
      perfilEgreso: this.state.carrerasArray[23].perfilEgreso,
      reticula: this.state.carrerasArray[23].reticula,
      campus: this.state.carrerasArray[23].campus,
      folleto: this.state.carrerasArray[23].folleto,
    };

    const newToIngGestionEmpresarialLinea = {
      pathname: "/Carrera/" + this.state.carrerasArray[24].name,
      portada: this.state.carrerasArray[24].portada,
      objetivo: this.state.carrerasArray[24].objetivo,
      perfilEgreso: this.state.carrerasArray[24].perfilEgreso,
      reticula: this.state.carrerasArray[24].reticula,
      campus: this.state.carrerasArray[24].campus,
      folleto: this.state.carrerasArray[24].folleto,
    };

    return (
      <div className="div-principal-ofertaAcademica">
        <MenuCentral />

        <img
          className="img-ofertaAcademica-portada"
          src={
            "http://tecmm.edu.mx/imagesReact/images/ofertaAcademicaNueva/portadaOfertaAcademica.jpg"
          }
        />

        <div className="div-carreras">
          <CarreraItem
            nombre={this.state.carrerasArray[24].name}
            card={
              "http://tecmm.edu.mx/imagesReact/images/ofertaAcademicaNueva/Cards-Carreras-Nuevos/Card-Ing-Gestion-Empresarial-Linea-movil.jpg"
            }
          />
          <CarreraItem
            nombre={this.state.carrerasArray[23].name}
            card={
              "http://tecmm.edu.mx/imagesReact/images/ofertaAcademicaNueva/Cards-Carreras-Nuevos/Card-maestria-en-sistemas-computacionales-movil.jpg"
            }
          />
          <CarreraItem
            nombre={this.state.carrerasArray[22].name}
            card={
              "http://tecmm.edu.mx/imagesReact/images/ofertaAcademicaNueva/Cards-Carreras-Nuevos/Card-maestria-en-administracion-movil.jpg"
            }
          />

          {this.state.carrerasArray.slice(0, 21).map((it, key) => (
            <CarreraItem
              keyIdenty={key}
              nombre={it.name}
              card={it.card}
              portada={it.portada}
              youtube={it.youtube}
              objetivo={it.objetivo}
              perfil={it.perfilEgreso}
              reticula={it.reticula}
              folleto={it.folleto}
              campus={it.campus}
            />
          ))}
        </div>

        <LinksFooter />
      </div>
    );
  }
}

const options = { mobileLimit: 420, tabletLimit: 770 };
export default withGetScreen(OfertaAcademica, options);
