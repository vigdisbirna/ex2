import React from "react";

export default class FinishButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button onClick={this.props.FinishOnClickFromBtn} className='btn btn-warning'>Finish</button>
    	);
  }
}