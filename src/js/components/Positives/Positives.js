import React from "react";
import PropTypes from 'prop-types';
import Image from "../Image/Image";

export default class Positives extends React.Component {
	constructor() {
		super();
		this.state = {pos: []};
	}
	componentDidUpdate(prevProps, prevState) {
		if(this.state.pos != prevState.pos) {
			var newElem = this.state.pos[this.state.pos.length - 1];
			console.log('in child, new elem is');
			console.log(newElem);
			this.props.callBackFromParent(newElem);
		}
	}
	changeOnClick() {
		this.setState(prevState => ({
			pos: [...prevState.pos, 1]
		}));
	}
	render() { 
		var new_pos = [1,2,3]; //this will actually be just cnt newest from total list
		
		return (
			<p onClick={this.changeOnClick.bind(this)}>This is pos list</p>
		);
    }
}

Positives.propTypes = {
	callBackFromParent : PropTypes.func
};