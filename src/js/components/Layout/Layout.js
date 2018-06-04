import React from "react";
import axios from 'axios'
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Image from "../Image/Image";
import LeftSidebar from "./LeftSidebar";
import ImageContainer from "../Container/ImageContainer"
import Popup from "reactjs-popup";
import cookie from 'react-cookies';


export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "Exquisitor",
            userId: cookie.load('userId')
        };
    }

    componentWillMount() {

        //console.log("cookie.load: " + cookie.load('userId'));
        if(cookie.load('userId') === undefined) {
            this.getCookie();
        }
        //console.log("cookie: " + this.state.userId);   
    }
    
    /*componentWillUnmount() {
        cookie.remove('userId', { path: '/'});
    }*/

    changeTitle(title) {
        this.setState({title: title});
    }

    getCookie() {
        axios({
            method: 'get',
            url: 'http://localhost:5001/getCookie',
            headers: {
            'Content-Type': 'application/json',
            },
            
        }).then(res => {
                var newId = res.data.userId;
                cookie.save('userId', newId, {path: '/'});
                this.setState({userId:cookie.load('userId')});
                console.log("res.data.userId: " + res.data.userId);
            });
            
    }

    render () {
        return (
            <ImageContainer userId={this.state.userId}/> 
        );
    }
} 

/* Rendering the layout */
//const wrapper = document.getElementById("app");
//wrapper ? ReactDOM.render(<Layout />, wrapper) : false;
//<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} /> 
//<Footer />
