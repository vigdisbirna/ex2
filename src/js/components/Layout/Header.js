import React from "react";

import Title from "./../Header/Title";

export default class Header extends React.Component {
    handleChange(e) {

        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render () {
    
        return (
            <div className="header-room">
                <Title title={this.props.title}/> 
                <h4 className="d-flex justify-content-center">
                    Explore YFCC100m on 100 million images.
                </h4> 
           </div>  
        );
    }
}
