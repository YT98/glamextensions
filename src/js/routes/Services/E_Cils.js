import React from "react";
import ServiceTitle from "../../components/servicesTitle.js";
import PriceWidget from "../../components/priceWidget.js"

export default class ECils extends React.Component {
    render () {
        return (
          <div>
            <div class="services_title_container" style={{background: "linear-gradient(rgba(220, 91, 183, 0.65), rgba(220, 91, 183, 0.65)), rgba(220, 91, 183, 0.65) url('./img/cils-header.jpeg') no-repeat", backgroundSize: "cover", backgroundPosition: "50% 23%"}}>
              <h1 class="service_title"> Extensions de cils </h1>
              <div class="title_span"></div>
            </div>

            <div class="row cils_main">
                <h1> Pour un <br /> regard de Star. </h1>
            </div>

            <div class="section_span">
            </div>

            <div class="row" style={{marginTop: "50px"}}>
                <div class="col-md-12 cils_resumes">
                    <p> Venez retrouver notre professionnelle en pose d'extensions de cils. Elle determinera avec vous plusieurs critères importants afin d'obtenir le regard parfait. <br /> Que ce soit la courbure, la longueur, l'épaisseur ou la densité, notre technicienne vous guidera et répondera à vos question. <br/> Nous vous offrons deux choix de pose de cils: </p>
                </div>
            </div>

            <div class="row cils_resumes" style={{marginBottom: "50px", marginTop: "20px"}}>
              <div class="col-md-6">
                <h3 style={{marginBottom: "20px"}}> La pose classique </h3>
                <img class="img-responsive img-rounded" src="./img/classique.jpeg"/>
              </div>
              <div class="col-md-6">
                <h3 style={{marginBottom: "20px"}}> La pose volume russe </h3>
                <img class="img-responsive img-rounded" src="./img/volume_russe.jpeg"/>
              </div>
            </div>

            <div class="section_span">
            </div>

            <div class="cils_conseils cils_resumes" style={{marginBottom: '40px', marginTop: '50px'}}>
              <h3 style={{marginBottom: '20px'}}> Conseils d'entretien: </h3>
              <p> Voici quelques conseils d'entretien pour conserver votre regard de star à son meilleur. <br/> Les extensions de cils (autant classique que volume russe) necessitent que très peu dentretien et ne demandent que quelques étapes essentielles à integrer dans votre routine. </p>
              <p>1. Nettoyez délicatement vos cils avec votre démaquillant matin et soir.</p>
              <p>2. Nutilisez aucun produit à base dhuile. </p>
              <p>3. Fortifiez vos cils en appliquant le serum chaque soir sur des cils propres. </p>
            </div>

            <div class="cils_recommendations cils_resumes" style={{marginBottom: '50px'}}>
              <h3 style={{marginBottom: '20px'}}> Recommendations: </h3>
              <ul>
                <li> Ne pas utiliser de coton-tige ou toute autre lingette.</li>
                <li> Ne pas maquiller vos extensions ou vos yeux et évitez spas, hammams, saunas et entrainements pour une période de 24h après la pose.</li>
                <li> Ne pas appliquer de teinture ou permanente sur vos cils.</li>
                <li> Éviter tous produits gras. </li>
                <li> Évitez de toucher, tirer ou frotter vos extensions.</li>
                <li> Il est reccomendé deffectuer votre première retouche dans les deux semaines suivant votre première pose et deffectuer par la suite des retouches toutes les 3 à 5 semaines selon votre cycle de cils.</li>
              </ul>
            </div>

            <div class="section_span">
            </div>
            <PriceWidget />
          </div>
        );
    };
}
