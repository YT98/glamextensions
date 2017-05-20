import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
    render () {
        return (
          <div>
            <div id="navbar">
            <nav class="navbar navbar-new" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="" href="#"><img class="nav-logo" src="/img/logo_navbar.png" /></a>
                    </div>
                    <div class="collapse navbar-collapse navbar-right" id="navbar1">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Accueil</Link></li>
                            <li class="dropdown">
                              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services <span class="caret"></span></a>
                              <ul class="dropdown-menu">
                                <li><Link to="/extensions-cils">Extensions de Cils</Link></li>
                                <li><Link to="/lissage">Lissage</Link></li>
                                <li><Link to="/ongles">Ongles</Link></li>
                                <li><Link to="/soins-ipl">Soins IPL</Link></li>
                                <li><Link to="/epilation">Epilation</Link></li>
                                <li role="separator" class="divider"></li>
                                <li><Link to="/prix">Prix</Link></li>
                              </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
          </div>

        );
    }
}
