import React from "react";
import { Link } from "react-router";

export default class PriceWidget extends React.Component {
    render () {
        return (
          <div>
          <div class="row pricewidget">
            <h2> Pour voir nos tarifs et nos spéciaux, visitez notre <Link to="/prix">page de prix</Link>. </h2>
          </div>
          </div>
        );
    };
}
