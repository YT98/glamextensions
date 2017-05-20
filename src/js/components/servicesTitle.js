import React from "react";

export default class ServiceTitle extends React.Component {
    render () {
        const title = "This is a title."
        const imgUrl = "url('../../img/ser_capilaires.png')"
        return (
            <div>
            <div class="services_title_container" style={{background: this.props.imgUrl}}>
              <h1 class="service_title"> {this.props.title} </h1>
              <div class="title_span"></div>
            </div>
            </div>
        );
    };
}
