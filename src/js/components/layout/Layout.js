import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import Image from "../Image/Image";

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Blackthorn Pruning",
        };
    }

    changeTitle(title) {
        this.setState({title: title});
        }

    render () {

        let array = ["1", "2", "3", "4", "5"];

        let images = array.map(image => {
            return <img key={image} src={require(`/Users/ThorhildurThorleiksdottir/Desktop/image_thumbnail/${image}.png`)} alt="" className="img-responsive" />
         });

        return (
        
            <div> 
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} /> 
                <Footer /> 
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                       { images }
                </div>
                <Image />
            </div>
        );
    }
} 

/* Rendering the layout */
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Layout />, wrapper) : false;