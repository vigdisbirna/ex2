import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Image from "../Image/Image";
import LeftSidebar from "./LeftSidebar";
import ImageContainer from "../Container/ImageContainer"
import Popup from "reactjs-popup";


export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Exquisitor",
        };
    }

    changeTitle(title) {
        this.setState({title: title});
    }


    render () {

        return (
            <ImageContainer /> 
        );
    }
} 

/* Rendering the layout */
//const wrapper = document.getElementById("app");
//wrapper ? ReactDOM.render(<Layout />, wrapper) : false;
//<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} /> 
//<Footer />
