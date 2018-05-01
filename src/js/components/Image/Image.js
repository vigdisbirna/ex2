import React from 'react';
import axios from 'axios';

export default class Image extends React.Component {
    constructor() {
        super();
        this.state = { source: null};
    }

    componentDidMount() {
    axios
      .get(
        'http://localhost/~ThorhildurThorleiksdottir/foo/2.jpg',
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

  render() {
  
    console.log(this.state.source);
    return <img src={this.state.source} alt="image" />;
  }
}
