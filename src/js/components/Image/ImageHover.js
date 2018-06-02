import React from 'react';
import axios from 'axios';
import './Image_style.css';

export default class ImageHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = { source: null};
    }

    componentDidMount() {
        //this.setState({ source: "/src/assets/black.jpg"});
        axios
        .get(
            //'http://192.168.1.149/~ThorhildurThorleiksdottir/images/placing-test-thumbnails/' + this.props.imageId.toString() + '.jpg',
            '/src/assets/notFound.jpg',
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
            //'http://192.168.1.149/~ThorhildurThorleiksdottir/images/placing-test-thumbnails/' + this.props.imageId.toString() + '.jpg',
            '/src/assets/notFound.jpg',
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

  render() {
    return (
      <div className="show-image">
        <img src={this.state.source} alt={this.props.imageId} className="d-flex justify-content-center rounded" />
        <input onClick={this.props.changeOnClickPosFromContainer} className="positive btn btn-success btn-sm" type="button" value="+" />
        <input onClick={this.props.changeOnClickSkipFromContainer} className="skip btn btn-secondary btn-sm" type="button" value="x" />
        <input onClick={this.props.changeOnClickNegFromContainer} className="negative btn btn-danger btn-sm" type="button" value="-" />
      </div>
    );
  }
}

