import React from 'react';
import axios from 'axios';
import keydown from 'react-keydown';
import './Image_style.css';

export default class ImageHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = { source: null};
        this.image = React.createRef();
        this.onhovering = this.onhovering.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }


    componentDidMount() {
        //this.setState({ source: "/src/assets/black.jpg"});
        
        axios
        .get(

            'http://localhost:9999/images/placing-test-thumbnails/' + this.props.imageId.toString() + '.jpg',
            { responseType: 'arraybuffer' },
          )
          .then(response => {
            const base64 = btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
              ),
            );
            this.setState({ source: "data:;base64," + base64 });
            //console.log(this.props.imageId);
            //console.log(this.state.source);
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);

              this.setState({ source: "/src/assets/notFound.jpg"});
            }

          });
      }

    componentDidUpdate(prevProp) {
      if(this.props.imageId != prevProp.imageId && this.props.imageId != null) {
        
        axios
        .get(
            'http://localhost:9999/images/placing-test-thumbnails/' + this.props.imageId.toString() + '.jpg',
            { responseType: 'arraybuffer' },
          )
          .then(response => {
            const base64 = btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
              ),
            )
            this.setState({ source: "data:;base64," + base64 });
          })
          .catch(error => {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);              
              //this.setState({ source: "/src/assets/notFound.jpg"});
          });
        }
      }

  
    
  handleKeyDown(event) {
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
  }

  onhovering(event) {
    this.image.current.focus();
  }

  render() {
    /*<img src={this.state.source} alt={this.props.imageId} className="d-flex justify-content-center rounded" />*/

    return (
      <div className="show-image" onMouseEnter={this.onhovering} ref={this.image} onKeyDown={this.handleKeyDown} tabIndex="0">
        <img src={this.state.source} alt={this.props.imageId} className="d-flex justify-content-center rounded" />
      </div>
    );
  }
}

