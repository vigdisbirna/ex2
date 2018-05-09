import React from "react";

export default class NewStartButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button onClick={this.props.startOverOnClickFromBtn} className='btn btn-warning reset'>Start Over</button>
    	);
  }
}