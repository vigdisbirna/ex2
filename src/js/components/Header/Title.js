import React from "react";

export default class Title extends React.Component {

    render () {
        return (
            <h1 class="display-4 d-flex justify-content-center"> 
                {this.props.title}
            </h1>
        );
    }
}
