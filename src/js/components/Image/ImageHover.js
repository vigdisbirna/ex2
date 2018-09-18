import React from 'react';
import './Image_style.css';
import classnames from 'classnames';
import Countdown from 'react-countdown-now';

export default class ImageHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {source: null, eyeTrackerMode:true};
       /* this.image = React.createRef();
        this.onhovering = this.onhovering.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);*/
        this.clickPos = this.clickPos.bind(this);
        this.clickNeg = this.clickNeg.bind(this);
        this.clickSkip = this.clickSkip.bind(this);

        //this.OnHoverTimer = this.OnHoverTimer.bind(this);
    }
    
  /*handleKeyDown(event) {
        //right arrow  
        if(event.keyCode == "39") {
            this.props.changeOnClickNegFromContainer();
        }
        
        //left arrow
        else if(event.keyCode == "37") {
            this.props.changeOnClickPosFromContainer();
        }
        
        //up arrow
        else if(event.keyCode == "38") {
            this.props.changeOnClickSkipFromContainer();
        }      
  }*/

  /*onhovering() {
    this.image.current.focus();
  }*/




  clickPos () {
    var timeoutId = null;

    if (!timeoutId) {
      timeoutId = window.setTimeout(function() {
          timeoutId = null;
          this.props.changeOnClickPosFromContainer();
      }.bind(this), 1000);
    }
  }

  clickSkip() {
    var timeoutId = null;

    if (!timeoutId) {
      timeoutId = window.setTimeout(function() {
          timeoutId = null;
          this.props.changeOnClickSkipFromContainer();
      }.bind(this), 1000);
    }
  }

  clickNeg() {
    var timeoutId = null;

    if (!timeoutId) {
      timeoutId = window.setTimeout(function() {
          timeoutId = null;
          this.props.changeOnClickNegFromContainer();
      }.bind(this), 1000);
    }
  }

  /*OnHoverTimer() {
    var timeoutId = null;
    //this.props.changeOnClickPosFromContainer();
    
    if (!timeoutId) {
      timeoutId = window.setTimeout(function() {
          timeoutId = null;
          console.log("HALLO");
          //this.props.changeOnClickPosFromContainer();
  
      }, 3000);
    }

    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = null;
    }
  }*/

  render() {
  
    if(this.state.eyeTrackerMode) {
      var  eyeTrackerSettings = {
          cursor: 'none'
      };
    }

    return (
      /*<div className={classnames(this.props.visibility, this.props.buttons)}>
        {this.props.theImage}
        <button onMouseEnter={this.props.changeOnClickPosFromContainer} className="positive btn btn-success btn-sm" type="button"><span className="glyphicon glyphicon-plus"></span></button>
        <button onMouseEnter={this.props.changeOnClickSkipFromContainer} className="skip btn btn-secondary btn-sm" type="button"><span className="glyphicon glyphicon-trash"></span></button>
        <button onMouseEnter={this.props.changeOnClickNegFromContainer} className="negative btn btn-danger btn-sm" type="button"><span className="glyphicon glyphicon-minus"></span></button>
      </div>*/
      <div className={classnames(this.props.visibility, this.props.buttons)}>
        {this.props.theImage}
        <button style={eyeTrackerSettings} onMouseEnter={this.clickPos} className="positive btn btn-success btn-sm" type="button"><span className="glyphicon glyphicon-plus"></span></button>
        <button style={eyeTrackerSettings} onMouseEnter={this.clickSkip} className="skip btn btn-secondary btn-sm" type="button"><span className="glyphicon glyphicon-trash"></span></button>
        <button style={eyeTrackerSettings} onMouseEnter={this.clickNeg} className="negative btn btn-danger btn-sm" type="button"><span className="glyphicon glyphicon-minus"></span></button>
      </div>
    );
  }
}


