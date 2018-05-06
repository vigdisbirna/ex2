import React from 'react';
import axios from 'axios';

export default class Image extends React.Component {
    constructor() {
        super();
        this.state = { source: null};
        //this.state = { id: '4' };
    }

    componentDidMount() {
      const { id } = this.props;
      axios
        .get(
          'http://localhost/~ThorhildurThorleiksdottir/foo/' + id + '.jpg',
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


    return <img src={this.state.source} alt={this.props.id} className="d-flex justify-content-center border border-light" />;
  }
}
