import React from 'react';
import axios from 'axios';

export default class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = { source: null};
    }

    componentDidMount() {

        axios
        .get(
            //'http://localhost/~ThorhildurThorleiksdottir/foo/' + this.props.imageId.toString() + '.jpg',
            'http://192.168.1.100/~ThorhildurThorleiksdottir/images/placing-test-thumbnails/' + this.props.imageId.toString() + '.jpg',
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
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              
              this.setState({ source: "/src/assets/notFound.jpg"});
          });
      }

    componentDidUpdate(prevProp) {
      if(this.props.imageId != prevProp.imageId && this.props.imageId != null) {
        
        axios
        .get(
            //'http://localhost/~ThorhildurThorleiksdottir/foo/' + this.props.imageId.toString() + '.jpg',
            'http://192.168.1.100/~ThorhildurThorleiksdottir/images/placing-test-thumbnails/' + this.props.imageId.toString() + '.jpg',
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
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              
              this.setState({ source: "/src/assets/notFound.jpg"});
          });
        }
      }

  render() {
    return (
        <img onClick={this.props.changeOnClickFromContainer} src={this.state.source} alt={this.props.imageId} className="d-flex justify-content-center rounded selected" />
    );
  }
}

