import React from "react";

export default class UpdateThemeButton extends React.Component {
    constructor() {
		super();
    
    this.clickButton = this.clickButton.bind(this);
    }

    clickButton() {
      var timeoutId = null;
  
      if (!timeoutId) {
        timeoutId = window.setTimeout(function() {
            timeoutId = null;
            this.props.updateThemeOnClickFromBtn();
        }.bind(this), 1000);
      }
    }


    render() {
    	return (
      		<button style={this.props.style} onMouseEnter={this.clickButton} className='btn  reset'>New Themed Set</button>
    	);
  }
}
