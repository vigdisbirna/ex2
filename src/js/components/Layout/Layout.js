import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import Image from "../Image/Image";
import ImageContainer from "../Container/ImageContainer"

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

        const images = [
            "1", 
            "2", 
            "3", 
            "4", 
            "5"]
        .map((img, i) => {
            return <img key={i} src="" alt="" className="img-responsive" />
         });

        return (
        
            <div className="container"> 
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />  
                <ImageContainer />
            </div>
        );
    }
} 

/* Rendering the layout */
//const wrapper = document.getElementById("app");
//wrapper ? ReactDOM.render(<Layout />, wrapper) : false;
