import React from "react";

export default class ResetThemeButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button style={this.props.style} onClick={this.props.resetThemeOnClickFromBtn} className='btn reset'>Start Over <br/>with Themed Set</button>
    	);
  }
}