import React from "react";

export default class UpdateRandomButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button onClick={this.props.updateRandomOnClickFromBtn} className='btn btn-warning reset'>New Random Set</button>
    	);
  }
}
