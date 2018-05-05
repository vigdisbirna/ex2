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
        const Images = [
            1,
            2,
            3,
            4,
            5
        ].map((id, i) => <Image key={i} id={id}/>);

        return (
            <div>
                <div>
                    <div>{Images}</div>
                </div> 
            </div>
        );
    }
}

/*ImageContainer.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};*/

//{this.props.imageUrls.map((imageUrl,i) => this.renderImage(imageUrl, i))}