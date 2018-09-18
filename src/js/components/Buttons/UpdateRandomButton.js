import React from "react";

export default class UpdateRandomButton extends React.Component {
    constructor() {
    super();
    
    this.clickButton = this.clickButton.bind(this);
    }

    clickButton() {
      var timeoutId = null;
  
      if (!timeoutId) {
        timeoutId = window.setTimeout(function() {
            timeoutId = null;
            this.props.updateRandomOnClickFromBtn();
        }.bind(this), 1000);
      }
    }

    render() {
    	return (
      		<button style={this.props.style} onClick={this.clickButton} className='btn reset'>New Random Set</button>
    	);
  }
}
