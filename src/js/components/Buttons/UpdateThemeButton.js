import React from "react";

export default class UpdateThemeButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button onClick={this.props.updateThemeOnClickFromBtn} className='btn btn-warning reset'>Feeling Lucky</button>
    	);
  }
}
