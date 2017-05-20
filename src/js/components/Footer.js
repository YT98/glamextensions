import React from "react";
import { Link } from 'react-router';

export default class Footer extends React.Component {
    render () {
        const currentYear = new Date().getFullYear()
        return (
          <div>

          <div class="footer_container">
          <div class="row">
            <div class="col-md-3 col-sm-3 col-xs-6 colpadding">
                <h1> Liens: </h1>
                <p class="hover-links"><Link to="/"> Accueil </Link></p>
                <p class="hover-links"><Link to="/about"> À propos </Link></p>
                <p class="hover-links"><Link to="/prix"> Prix </Link></p>
                <p class="hover-links"><Link to="/contact"> Contact </Link></p>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-6 colpadding">
                <h1>Services: </h1>
                <p class="hover-links"><Link to="/extensions-capilaires"> Extensions capillaires </Link></p>
                <p class="hover-links"><Link to="/extensions-cils"> Extensions de cils </Link></p>
                <p class="hover-links"><Link to="/lissage"> Lissage </Link></p>
                <p class="hover-links"><Link to="/ongles"> Ongles </Link></p>
                <p class="hover-links"><Link to=""> Soins IPL </Link></p>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-6 colpadding">
              <h1> Nous contacter: </h1>
              <p> 514-918-3413 </p>
              <p> 55 Cercle Bernadette McDonald </p>
              <p> St-Zotique, J0P 1Z0 </p>
              <p> info@glamextensions.com </p>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-6 colpadding">
              <h1> Suivez-nous: </h1>
              <a href="https://www.facebook.com/glamenextension/" class="hover-links"> <i class="fa fa-facebook-official fa-5x" aria-hidden="true"></i> </a>
            </div>
          </div>
          <div class="designedby">
            <h1> Designed by Yannis Tarfa</h1>
            <h1> Copyright &#9400; {currentYear} Glamextensions. All rights reserved.</h1>
          </div>

          <div class="copyright">
          </div>

          </div>

          </div>
        );
    };
}
