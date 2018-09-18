import React from "react";

export default class ResetRandomButton extends React.Component {
    constructor() {
    super();
    this.clickButton = this.clickButton.bind(this);
    }

    clickButton() {
      var timeoutId = null;
  
      if (!timeoutId) {
        timeoutId = window.setTimeout(function() {
            timeoutId = null;
            this.props.resetRandomOnClickFromBtn();
        }.bind(this), 1000);
      }
    }


    render() {
    	return (
      		<button style={this.props.style} onMouseEnter={this.clickButton} className='btn reset'>Start Over <br/> with Random Set</button>
    	);
  }
}
