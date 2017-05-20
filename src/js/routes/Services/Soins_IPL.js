import React from 'react';
import ServiceTitle from '../../components/servicesTitle';
import PriceWidget from '../../components/priceWidget';

export default class SoinsIPL extends React.Component {
  render() {

    let carouselStyle = {
      photorajeunissementOne: {
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url('./img/soins-ipl/rajeunissement1.jpg')"
      },
      photorajeunissementTwo: {
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url('./img/soins-ipl/rajeunissement2.jpg')"
      },
      acne: {
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url('./img/soins-ipl/acne.jpg')"
      },
      tachespigmentaires: {
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url('./img/soins-ipl/taches-pigmentaires.jpg')"
      },
      lesionsvasculaires: {
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url('./img/soins-ipl/lesions-vasculaires.jpg')"
      }
    }

    return(
      <div>

        <div class="services_title_container" style={{background: "linear-gradient(rgba(220, 91, 183, 0.65), rgba(220, 91, 183, 0.65)), rgba(220, 91, 183, 0.65) url('./img/epilation-header.jpeg') no-repeat center", backgroundSize: "cover"}}>
          <h1 class="service_title"> Soins à la lumière pulsée </h1>
          <div class="title_span"></div>
        </div>

        <div class="title_span"> </div>

        <div class="row cils_resumes" style={{marginBottom: '50px', marginTop: '50px'}}>

          <div class="col-md-4">
            <h3 style={{marginBottom: '20px'}}> Photorajeunissement </h3>
            <p>La lumière pulsée est une lumière diffusée. Elle peut donc pénétrer à différentes profondeurs dans la peau pour ainsi corriger les imperfections et stimuler le collagène. La pulsion lumineuse stimule la croissance du nouveau fibroblaste, ce qui améliore la fermeté et la texture globale aidant à surmonter les effets des dommages du soleil, du vieillissement et les dégénérations de la peau fatiguée à force de se dégénérer. De ce fait, la texture se modifie: les rides diminuent, s’effacent, la peau se raffermit. Les traitements IPL apportent un lissage visible dès le 1er soin, un entretien est conseillé tous les 6 mois.</p>
          </div>
          <div class="col-md-4">
            <h3 style={{marginBottom: '20px'}}> Autres soins </h3>
            <p>Sur une longueur d’onde, la lumière agit a plusieurs niveaux: à 420 mm pour le traitement de l’année, à 515 mm pour traiter les tâches ou encore 560 mm pour traiter les défauts vasculaires.</p>
          </div>
        </div>

        <div class="section_span">
        </div>

        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" style={{width:'80%', margin: 'auto', marginTop: '20px', marginBottom: '20px'}}>
          {/* Indicators */}
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            <li data-target="#carousel-example-generic" data-slide-to="4"></li>
          </ol>

          {/* Wrapper for slides */}
          <div class="carousel-inner" role="listbox">
            <div class="item active" style={carouselStyle.photorajeunissementOne}>
              <div class="carousel-caption">
                Photorajeunissement
              </div>
            </div>
            <div class="item" style={carouselStyle.photorajeunissementTwo}>
              <div class="carousel-caption">
                Photorajeunissement
              </div>
            </div>
            <div class="item" style={carouselStyle.acne}>
              <div class="carousel-caption">
                Acné
              </div>
            </div>
            <div class="item" style={carouselStyle.lesionsvasculaires}>
              <div class="carousel-caption">
                Lésions vasculaires
              </div>
            </div>
            <div class="item" style={carouselStyle.tachespigmentaires}>
              <div class="carousel-caption">
                Tâches pigmentaires
              </div>
            </div>
          </div>

          {/* Controls */}
          <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div class="section_span">
        </div>

        <div class="row cils_resumes">
          <div class="col-md-12">
            <h3 style={{marginBottom: '20px'}}> Information utile </h3>
            <h4> Que ressent-ton durant les traitements ? </h4>
            <p> Selon la zone traitée et sa sensibilité, la chaleur émise produit une sensation de pinçement qui disparait rapidement. </p>
            <h4> De combien de scéances aurai-je besoin? </h4>
            <p> Selon l'individu, l'intensité de la pigmentation des poils ainsi que  les facteurs hormonaux et génétiques peuvent faire varier le nombre de scéances. Mais en général, on parle de 8 à 10 scéances. </p>
            <h4> Précautions/Contre-indications </h4>
            <p>48h avant et après le traitement, on évite une exposition prolongée au soleil, l'application de déodorant, les efforts physiques et l'utilisation d'auto-bronzant. L'épilation à la lumière pulsée est contre-indiquée aux femmes enceintes et aux personnes qui font usage de médication photosensibilisante.</p>
          </div>
        </div>

        <div class="section_span">
        </div>
        <PriceWidget />
      </div>
    );
  };
};
