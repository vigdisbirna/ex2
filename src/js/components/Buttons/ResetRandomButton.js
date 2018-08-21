import React from "react";

export default class ResetRandomButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button style={this.props.style} onClick={this.props.resetRandomOnClickFromBtn} className='btn reset'>Start Over <br/> with Random Set</button>
    	);
  }
}
