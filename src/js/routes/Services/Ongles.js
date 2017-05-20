import React from "react";
import ServiceTitle from "../../components/servicesTitle.js";
import PriceWidget from "../../components/priceWidget.js"

export default class Ongles extends React.Component {
    render () {
        return (
          <div>

            <div class="services_title_container" style={{background: "linear-gradient(rgba(220, 91, 183, 0.65), rgba(220, 91, 183, 0.65)), rgba(220, 91, 183, 0.65) url('/img/ongles-header.jpeg') no-repeat", backgroundSize: "cover", backgroundPosition: "50% 30%"}}>
              <h1 class="service_title"> Ongles </h1>
              <div class="title_span"></div>
            </div>

            <div class="row cils_resumes" style={{marginTop: "50px", marginBottom: "50px"}}>
              <div class="col-md-12">
                <h3 style={{marginBottom: '20px'}}> Pose d'ongles </h3>
                <p> Nous traiterons vos ongles de doigts et d'orteils aux petits soins: coupe, lime, nettoyage des cuticules et application du vernis, gel UV ou résine et poudre à votre demande. </p>
              </div>
            </div>

            <div class="section_span">
            </div>
            <PriceWidget />
          </div>
        );
    };
}
