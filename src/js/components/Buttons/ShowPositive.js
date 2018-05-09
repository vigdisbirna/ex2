import React from "react";

export default class ShowPositive extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button onClick={this.props.startOverOnClickFromBtn} className='btn btn-success posAll'>Show all</button>
    	);
  }
}