import React from "react";

export default class LeftSidebar extends React.Component {

    render () {
        return (
            <div className="container sidebar">

                <div className="row sidebar-content"> 
                    <div className="col-10">Session Time: </div>
                    <div className="col-2">x </div>
                </div>
                <div className="row sidebar-content"> 
                     <div className="col-10">Positive Images: </div>
                     <div className="col-2">x </div>
                </div>
                <div className="row sidebar-content"> 
                    <div className="col-10"> Negative Images: </div>
                    <div className="col-2">x </div>
                </div>
                <div className="row sidebar-content"> 
                    <div className="col-10">Exploration Rounds: </div>
                    <div className="col-2">x </div>
                </div>
                <div className="row sidebar-content">
                    <div className="col-10"> Average Scoring Time: </div>
                    <div className="col-2">x </div>
                </div>
            </div>
        );
    }
}
