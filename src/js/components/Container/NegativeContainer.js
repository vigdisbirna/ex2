import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Image from "../Image/Image";
import Slider from "react-slick";


export default class NegativeContainer extends React.Component {
    constructor() {
		super();
		//this.state = {pos: []};
    }
    
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
                {this.renderCarousel(this.props.negImageIdFromParent)}
            </Slider>
        );
    }
}

//<h5 className="d-flex justify-content-center">Negative</h5>