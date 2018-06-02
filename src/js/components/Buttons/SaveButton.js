import React from "react";

export default class SaveButton extends React.Component {
    constructor() {
		super();
    }

    render() {
    	return (
      		<button onClick={this.props.saveDataOnClickFromBtn} className='btn btn-info save'>Save</button>
    	);
  }
}