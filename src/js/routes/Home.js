import React from "react";
import { Link } from "react-router";

export default class Home extends React.Component {
  render() {

    return(
      <div>
        <div class="carousel_container">
          <div class="carousel_info">
            <h1> Resplendissez <br></br> de la tête <br></br> aux pieds... </h1>
            <Link to="/contact" class="home_btn"><p> Prendre rendez-vous </p></Link>
          </div>
        </div>

        <div class="container-fluid home">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <img src="/img/logo_full.png" class="img-responsive"/>
              <h1> À propos </h1>
              <p> GlamExtensions est un salon réputé pour son service et sa passion pour l'esthétique. Le salon propose à la clientèle des soins de qualité en beauté et esthétique pour elle et lui: pose d'extensions de cils, pose d'ongles, pose de rallonges, lissage brésilien à la kératine, épilation définitive à la lumière pulsée ou encore en soins IPL. <br /> Nos techniciennes ont été formées et diplomées par des écoles accréditées et recconues partout au Québec. Nos produits cosmétiques sont inscrits auprès de Santé Canada. <br /> Notre but est de prendre soin de vous ! </p>
            </div>
          </div>
        </div>
      </div>
    )
  };
};
