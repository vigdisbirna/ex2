import React from "react";
import PropTypes from 'prop-types';
import Image from "../Image/Image";

export default class ImageContainer extends React.Component {
    /*renderImage(imageUrl, i) {
        console.log(imageUrl);
        return (
        
            <div>
                <img key={i} src = {require(imageUrl)} />
            </div>
        );
    }*/

    render() {
        return (
            <div>
                <div>
                    <Image />
                </div> 
            </div>
        );
    }
}

/*ImageContainer.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};*/

//{this.props.imageUrls.map((imageUrl,i) => this.renderImage(imageUrl, i))}