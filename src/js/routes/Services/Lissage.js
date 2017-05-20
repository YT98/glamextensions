import React from "react";
import ServiceTitle from "../../components/servicesTitle.js";
import PriceWidget from "../../components/priceWidget.js"

export default class Lissage extends React.Component {
    render () {

      let carouselStyle = {
        imgOne: {
          height: "500px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url('../img/lissage/image1.JPG')"
        },
        imgTwo: {
          height: "500px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url('../img/lissage/image2.JPG')"
        }
      }

        return (
          <div>
            <div class="services_title_container" style={{background: "linear-gradient(rgba(220, 91, 183, 0.65), rgba(220, 91, 183, 0.65)), rgba(220, 91, 183, 0.65) url('./img/lissage-header.jpeg') no-repeat", backgroundSize: "cover", backgroundPosition: "50% 20%"}}>
              <h1 class="service_title"> Lissage brésilien à la kératine </h1>
              <div class="title_span"></div>
            </div>

            <div class="row cils_main">
                <h1> Un soin <br></br> lissant et durable <br></br> pour tous types de cheveux. </h1>
            </div>

            <div class="section_span">
            </div>

            <div class="row cils_resumes">
            <div class="col-md-12">
                <h4 style={{marginTop: "50px"}}><b> Un soin pour absolument tous types de cheveux. </b></h4>
                <p style={{marginBottom: "30px"}}> Le lissage brésilien à la kératine est un traitement soin. Il n’y a donc aucune transformation chimique du cheveu comme cest le cas lors d'un défrisage . Il est de ce fait parfaitement applicable sur tous les types de cheveux, sans aucune incompatibilité liée au passé technique de la chevelure. Il est composé de kératine naturelle et d'oligo-éléments (algues) qui, combinés, apporteront le meilleur de la nutrition et de la légèreté à vos cheveux. </p>
                <h4><b> Un lissage naturel activé par la chaleur. </b></h4>
                <p style={{marginBottom: "50px"}}> La chaleur du sèche-cheveux et des plaques active le produit et fixe la molécule tout autour du cheveu. Cette même chaleur activera le pouvoir lissant de votre soin, son action n'étant pas établie sur cheveux mouillés. Sa présence sera active sur le cheveu pendant environ 6 mois. </p>
            </div>
            </div>

            <div class="section_span">
            </div>

            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" style={{width:'80%', margin: 'auto'}}>
              {/* Indicators */}
              <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              </ol>

              {/* Wrapper for slides */}
              <div class="carousel-inner" role="listbox">
                <div class="item active" style={carouselStyle.imgOne}>
                  <div class="carousel-caption">
                  </div>
                </div>
                <div class="item" style={carouselStyle.imgTwo}>
                  <div class="carousel-caption">
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
            <div class="col-md-8">
            <h1 style={{marginBottom: '30px'}}> Foire aux questions </h1>
            <h4> Ce traitement est-il assimilable à un défrisage  ? </h4>
            <p style={{marginBottom: '20px'}}> Absolument pas! Ce traitement est à base de kératine. Il lisse les cheveux grâce à l'apport de chaleur du sèche cheveux. </p>
            <h4> Peut-on faire le traitement après avoir fait une couleur? </h4>
            <p style={{marginBottom: '20px'}}> Oui, il est toutefois recommendé de faire le lissage avant de faire une coloration car celle-ci pourrait s'éclaircir de un ou deux tons après le lissage. </p>
            <h4> Le traitement peut-il être appliqué sur des cheveux traités avec un produit chimique? </h4>
            <p style={{marginBottom: '20px'}}> Oui, Bien sûr! Le lissage brésilien est un soin à base de kératine: il protégera vos cheveux en leur apportant de la douceur, de la brillance et en les renforçant. </p>
            <h4> Peut-on utiliser ce traitement sur des cheveux décolorés? </h4>
            <p style={{marginBottom: '20px'}}> Oui, il est même applicable tout de suite après. </p>
            <h4> Peut-on utiliser le traitement sur des cheveux naturels? </h4>
            <p style={{marginBottom: '20px'}}> Oui, absolument. </p>
            <h4> Puis-je colorer mes cheveux après le traitement? </h4>
            <p style={{marginBottom: '20px'}}> Oui, l'idéal étant de le faire deux semaines plus tard. </p>
            <h4> Puis-je laver mes cheveux après le traitement et dans quel délai? </h4>
            <p style={{marginBottom: '20px'}}> Oui, vous pouvez vous laver les cheveux 72 heures après le traitement mais n'oubliez pas d'utiliser un shampoing adapté! De plus, la fréquence des shampoing affectera la durée de vie de votre soin. </p>
            <h4> Puis-je faire une queue de cheval après le traitement ? </h4>
            <p style={{marginBottom: '20px'}}> Pour tout coiffage, il est reccomendé déviter d'appliquer une pression trop longue et forte sur vos cheveux, puisqu'elle leur créérait des plis. Cependant, si vous navez pas le choix, il vous suffira de re-lisser tous vos cheveux ensuite avec vos plaques ou avec votre brosse et votre sèche-cheveux. </p>
            <h4> Que dois-je faire si mes cheveux se mouillent ? </h4>
            <p style={{marginBottom: '20px'}}> Il faut les sécher immédiatement </p>
            </div>
            </div>

            <div class="section_span">
            </div>
            <PriceWidget />
          </div>
        );
    };
}
