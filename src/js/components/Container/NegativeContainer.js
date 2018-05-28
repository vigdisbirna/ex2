import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Image from "../Image/Image";

export default class NegativeContainer extends React.Component {
    constructor() {
		super();
		//this.state = {pos: []};
    }
    
    renderList(imgs) {
        var list = [];
        var count = 0;
        for (var i = imgs.length-1;  i >= 0; i--) {
            //if (count < 5) {
                list.push(<div className="d-flex justify-content-center" key={i}> <Image key={i} imageId={imgs[i]}/> </div>);
              //  count++;
            //}
            //console.log(this.state.pos[i]);
        }
        return list;
    }

    render() {
        return (
            <div>
                {this.renderList(this.props.negImageIdFromParent)}
            </div>
        );
    }
}

//<h5 className="d-flex justify-content-center">Negative</h5>