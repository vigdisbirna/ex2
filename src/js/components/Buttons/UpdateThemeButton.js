import React from "react";

export default class UpdateThemeButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button style={this.props.style} onClick={this.props.updateThemeOnClickFromBtn} className='btn  reset'>New Themed Set</button>
    	);
  }
}
