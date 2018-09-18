import React from "react";

export default class ResetThemeButton extends React.Component {
    constructor() {
    super();
    this.clickButton = this.clickButton.bind(this);
    }

    clickButton() {
      var timeoutId = null;
  
      if (!timeoutId) {
        timeoutId = window.setTimeout(function() {
            timeoutId = null;
            this.props.resetThemeOnClickFromBtn();
        }.bind(this), 1000);
      }
    }


    render() {
    	return (
      		<button style={this.props.style} onMouseEnter={this.clickButton} className='btn reset'>Start Over <br/>with Themed Set</button>
    	);
  }
}