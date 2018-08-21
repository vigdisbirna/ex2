import React from "react";

export default class LeftSidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: 0, num_pos: 0, num_neg: 0, rounds: 0, avg_score_time: 0, collection: "YFCC100M", images: "99.206.564"
        };
    }
    render () {

        return (
            <div className="container sidebar">
                <div className="row sidebar-content"> 
                    <div className="col-9">Collection: </div>
                    <div className="col-3 num">{this.state.collection}</div>
                </div>
                <div className="row sidebar-content-top"> 
                    <div className="col-9">Images: </div>
                    <div className="col-3 num">{this.state.images}</div>
                </div>
                <div className="row sidebar-content"> 
                    <div className="col-9">Session Time: </div>
                    <div className="col-3 num">{this.props.timerFromParent}s</div>
                </div>
                <div className="row sidebar-content"> 
                     <div className="col-9">Positive Images: </div>
                     <div className="col-3 num">{this.props.num_posFromParent}</div>
                </div>
                <div className="row sidebar-content"> 
                    <div className="col-9"> Negative Images: </div>
                    <div className="col-3 num">{this.props.num_negFromParent}</div>
                </div>
                <div className="row sidebar-content"> 
                    <div className="col-9">Exploration Rounds: </div>
                    <div className="col-3 num">{this.props.roundsFromParent}</div>
                </div>
                <div className="row sidebar-content">
                    <div className="col-9"> Average Time: </div>
                    <div className="col-3 num">{Math.round((this.props.avg_score_timeFromParent*2)*100) / 100}s</div>
                </div>
            </div>
        );
    }
}
