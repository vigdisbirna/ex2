import React from "react";

export default class UpdateRandomButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button style={this.props.style} onClick={this.props.updateRandomOnClickFromBtn} className='btn  reset'>New Random Set</button>
    	);
  }
}
