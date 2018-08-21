import React from 'react';
import './Image_style.css';
import classnames from 'classnames';
import Countdown from 'react-countdown-now';

export default class ImageHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {source: null};
       /* this.image = React.createRef();
        this.onhovering = this.onhovering.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);*/
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

  
  
  render() {
  
    //<div className={this.props.visibility} onMouseEnter={this.onhovering} ref={this.image} onKeyDown={this.handleKeyDown} tabIndex="0">

    //ef maður vill hafa eye-trackerinn í gangi. no-cursor classNameið hide-ar músina bara annars eins
    /* return (
      <div className={classnames(this.props.visibility, this.props.buttons, "no-cursor")}>
        {this.props.theImage}
        <button onMouseEnter={this.props.changeOnClickPosFromContainer} className="positive btn btn-success btn-sm no-cursor" type="button"><span className="glyphicon glyphicon-plus"></span></button>
        <button onMouseEnter={this.props.changeOnClickSkipFromContainer} className="skip btn btn-secondary btn-sm no-cursor" type="button"><span className="glyphicon glyphicon-trash"></span></button>
        <button onMouseEnter={this.props.changeOnClickNegFromContainer} className="negative btn btn-danger btn-sm no-cursor" type="button"><span className="glyphicon glyphicon-minus"></span></button>
      </div>
    );*/

    return (
      <div className={classnames(this.props.visibility, this.props.buttons)}>
        {this.props.theImage}
        <button onMouseEnter={this.props.changeOnClickPosFromContainer} className="positive btn btn-success btn-sm" type="button"><span className="glyphicon glyphicon-plus"></span></button>
        <button onMouseEnter={this.props.changeOnClickSkipFromContainer} className="skip btn btn-secondary btn-sm" type="button"><span className="glyphicon glyphicon-trash"></span></button>
        <button onMouseEnter={this.props.changeOnClickNegFromContainer} className="negative btn btn-danger btn-sm" type="button"><span className="glyphicon glyphicon-minus"></span></button>
      </div>
    );

  }
}

