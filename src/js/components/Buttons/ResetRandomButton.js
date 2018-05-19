import React from "react";

export default class ResetRandomButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button onClick={this.props.resetRandomOnClickFromBtn} className='btn btn-warning reset'>Start Over <br/> with Random Set</button>
    	);
  }
}
