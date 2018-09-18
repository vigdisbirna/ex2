import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Image from "../Image/Image";
import Slider from "react-slick";


export default class PositiveContainer extends React.Component {
	constructor() {
        super();
        
        this.state = {
            autoplay: false
        };
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
    
    renderCarousel(imgs) {
        var list = [];
        var tempList = [];
        var count = 0;
        for(var i = imgs.length-1; i >= 0; i--) {
            if(count >= 6) {    
                var box = <div key={count} className="flex-container">{tempList}</div>;
                list.push(box);
                count = 0;
                tempList = [];
            }

            tempList.push(<div key={i}> <Image key={i} imageId={imgs[i]}/> </div>);
            count++;
        }
        
        var box = <div key={list.length} className="f-container" style="display: flex;">{tempList}</div>;
        list.push(box); 
        
        return list;
    }
    
    turnOnAutoPlay() {
        this.setState({autoplay:true});
    }

    turnOffAutoPlay() {
        this.setState({autoplay:false});
    }


    render() {

        var settings = {
            autoplay: true,
            autoplaySpeed: 900,
            dots: true,
            infinite: true,
            easing: 'ease-in',
            pauseOnHover: false,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
        };
        

        return (
            <Slider {...settings}>
                {this.renderCarousel(this.props.posImageIdFromParent)}
            </Slider>
        );
    }
}
//<h5 className="d-flex justify-content-center">Positive</h5>
//<p onClick={this.changeOnClick.bind(this)}>This is pos list</p>