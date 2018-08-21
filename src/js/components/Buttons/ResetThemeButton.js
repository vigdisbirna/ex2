import React from "react";

export default class ResetThemeButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button onClick={this.props.resetThemeOnClickFromBtn} className='btn btn-warning reset'>Start Over <br/>with Themed Set</button>
    	);
  }
}