import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Image from "../Image/Image";

export default class PositiveContainer extends React.Component {
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
        return (
            <div>
                <h5 className="d-flex justify-content-center">Positive</h5>
                <p onClick={this.changeOnClick.bind(this)}>This is pos list</p>
            </div>
        );
    }
}