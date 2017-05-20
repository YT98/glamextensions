import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// Component importing
import Layout from './routes/Layout.js';
import Home from './routes/Home.js';
    // Services
    import ECils from './routes/Services/E_Cils.js';
    import Ongles from './routes/Services/Ongles.js';
    import Lissage from './routes/Services/Lissage.js';
    import SoinsIPL from './routes/Services/Soins_IPL.js';
    import Epilation from './routes/Services/Epilation.js';
    import Prix from './routes/Services/Prix.js';
import Contact from './routes/Contact.js';

// App rendering
const App = document.getElementById('app');
ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
                <Route path="extensions-cils" component={ECils}></Route>
                <Route path="ongles" component={Ongles}></Route>
                <Route path="lissage" component={Lissage}></Route>
                <Route path="soins-ipl" component={SoinsIPL}></Route>
                <Route path="epilation" component={Epilation}></Route>
                <Route path="prix" component={Prix}></Route>
                <Route path="contact" component={Contact}></Route>
        </Route>
    </Router>,
    App
);
