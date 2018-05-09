import React from "react";

export default class NewStartButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button className='btn btn-warning reset'>Start Over</button>
    	);
  }
}