import React from 'react';
import ServiceTitle from '../../components/servicesTitle';
import PriceWidget from '../../components/priceWidget';

export default class Epilation extends React.Component {
  render() {
    return(
      <div>

        <div class="services_title_container" style={{background: "linear-gradient(rgba(220, 91, 183, 0.65), rgba(220, 91, 183, 0.65)), rgba(220, 91, 183, 0.65) url('/img/epilation-header.jpeg') no-repeat center", backgroundSize: "cover"}}>
          <h1 class="service_title"> Épilations et soins à la lumière pulsée </h1>
          <div class="title_span"></div>
        </div>

        <div class="row cils_resumes">
          <div class="col-md-4">
            <h3 style={{marginBottom: '20px', marginTop: '50px'}}> Épilation définitive </h3>
            <p style={{marginBottom: '50px'}}>L’épilation à la lumière pulsée (IPL) fonctionne selon le principe similaire à l’épilation au laser. Mais à la différence du laser qui envoie l’énergie en ligne droite, cette technologie plus récente en diffuse en plus large spectre. L’appareil produit une impulsion lumineuse, conduite par le pigment du poil jusqu’au bulbe, qui est détruit par la chaleur.</p>
          </div>
        </div>

      </div>
    )
  }
}
