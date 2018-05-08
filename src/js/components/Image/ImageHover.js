import React from 'react';
import axios from 'axios';
import './Image_style.css';

export default class ImageHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = { source: null};
    }

    componentDidMount() {

        axios
        .get(
            //'http://localhost/~ThorhildurThorleiksdottir/foo/' + this.props.imageId.toString() + '.jpg',
            'http://192.168.1.100/~ThorhildurThorleiksdottir/images/' + this.props.imageId.toString() + '.jpg',
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
          });
      }

    componentDidUpdate(prevProp) {
      if(this.props.imageId != prevProp.imageId && this.props.imageId != null) {
        
        axios
        .get(
            //'http://localhost/~ThorhildurThorleiksdottir/foo/' + this.props.imageId.toString() + '.jpg',
            'http://192.168.1.100/~ThorhildurThorleiksdottir/images/' + this.props.imageId.toString() + '.jpg',
            //'http://192.168.1.100/~ThorhildurThorleiksdottir/foo/1.jpg',
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
          });
        }
      }

  render() {
    return (
      <div className="show-image">
        <img src={this.state.source} alt={this.props.imageId} className="d-flex justify-content-center rounded" />
        <input onClick={this.props.changeOnClickPosFromContainer} className="positive btn btn-success btn-sm" type="button" value="+" />
        <input onClick={this.props.changeOnClickNegFromContainer} className="negative btn btn-danger btn-sm" type="button" value="-" />
      </div>
    );
  }
}

