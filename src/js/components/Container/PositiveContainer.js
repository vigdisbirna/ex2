import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Image from "../Image/Image";

export default class PositiveContainer extends React.Component {
	constructor() {
		super();
		//this.state = {pos: []};
    }
    
    //componentWillReceiveProps() {
        /*this.setState(prevState => ({
			pos: [...prevState.pos, this.props.imageIdFromParent]
		}));*/
       // console.log(this.props.imageIdFromParent);
    //}

	/*componentDidUpdate(prevState) {
		if(this.state.pos != prevState.pos) {
			var newElem = this.state.pos[this.state.pos.length - 1];
			//console.log('in child, new elem is');
			//console.log(newElem);
            //this.props.callBackFromParent(newElem);
            //console.log(this.props.imageIdFromParent);
            /*this.setState(prevState => ({
                pos: [...prevState.pos, this.props.imageIdFromParent]
            }));*/
       // }

       /* this.setState(prevState => ({
                pos: [...prevState.pos, this.props.imageIdFromParent]
        }));*/
        //console.log(this.props.imageIdFromParent);
        
	//}
	/*changeOnClick() {
		this.setState(prevState => ({
			pos: [...prevState.pos, this.props.imageIdFromParent]
		}));
    }*/
    
    renderList(imgs) {
        var list = [];
        var count = 0;
        for (var i = imgs.length-1;  i >= 0; i--) {
            if (count < 5) {
                list.push(<div className="d-flex justify-content-center" key={i}> <Image key={i} imageId={imgs[i]}/> </div>);
                count++;
            }
            //console.log(this.state.pos[i]);
        }
        return list;
    }

    render() {
      
        return (
            <div>
                <h5 className="d-flex justify-content-center">Positive</h5>
                {this.renderList(this.props.posImageIdFromParent)}
            </div>
        );
    }
}

//<p onClick={this.changeOnClick.bind(this)}>This is pos list</p>