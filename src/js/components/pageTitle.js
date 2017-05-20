import React from "react";

export default class PageTitle extends React.Component {
    render () {
        const title = "This is a title."
        return (
            <div>
            <div class="page_title_container">
              <h1 class="title_title"> {this.props.title} </h1>
              <div class="title_span"></div>
            </div>
            </div>
        );
    };
}
