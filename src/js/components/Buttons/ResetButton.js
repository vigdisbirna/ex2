import React from "react";

export default class ResetButton extends React.Component {
    constructor() {
		super();
    }

    handleClick() {
    	console.log('resetting');
    	axios({
            method: 'get',
            url: 'http://localhost:5000/reset',
            headers: {
            'Content-Type': 'application/json'
            }}).then(res => {
                console.log(res);
                var tmp = res.data;
                this.setState({
                    image_arr: res.data.slice(-25), 
                    vis_arr: tmp.slice(0,25)
                });
                console.log('vis_arr is:')
                console.log(this.state.vis_arr)
                console.log('image_arr is:')
                console.log(this.state.image_arr)
            });
    }

    render() {
    	return (
      		<button onClick={this.props.resetOnClickFromBtn} className='btn btn-warning reset'>Feeling Lucky</button>
    	);
  }
}
