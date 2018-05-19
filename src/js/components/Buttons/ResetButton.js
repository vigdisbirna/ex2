import React from "react";

export default class ResetButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button onClick={this.props.resetOnClickFromBtn} className='btn btn-warning reset'>Feeling Lucky</button>
    	);
  }
}
