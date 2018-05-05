import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Image from "../Image/Image";

export default class ImageContainer extends React.Component {

    constructor() {
        super();
        this.state = { image_arr: [], interval: null};
    }

    componentDidMount() {
        this.initialize();        
        var intv = setInterval(this.loadData.bind(this), 20000);
        this.setState({interval: intv});
    }

    componentWillUnmount() {
        print('yo:componentWillUnmount');
        clearInterval(this.state.interval);
    }

    initialize() {
        console.log('sending Get !')

        axios({
            method: 'get',
            url: 'http://localhost:5000/learn',
            headers: {
            'Content-Type': 'application/json',
            'Connection': 'Keep-Alive'
            }}).then(res => {
                this.setState({image_arr: res.data});
                //this.image_arr = res.data;
                console.log(res);
                console.log('image_arr is:')
                console.log(this.state.image_arr)
        });
    }

    loadData() {
        console.log('About to send post !')
        //(if pos_count > 0 || neg_count > 0) 
        axios({
            method: 'post',
            url: 'http://localhost:5000/learn',
            data: {"pos":[205184, 1434920, 628770, 996981, 1498999], "neg":[1204751, 652837, 126553, 444500, 562808, 289004, 1304436, 1267878, 779381, 373122, 344467, 112635, 1195480, 919759, 1097026, 1405437, 1082330, 206936, 419696, 385295, 1071078, 834200, 630266, 826533, 337513, 226962, 549076, 1091162, 514520, 194552, 378336, 689210, 956037, 506132, 598172, 438651, 932860, 273433, 432193, 1120997, 504388, 198492, 978275, 998146, 1369446, 1231115, 863451, 1414852, 1266696, 957149, 766538, 1497839, 352509, 946142, 873132, 183645, 1325906, 676795, 819663, 1124820, 423116, 117691, 1428357, 524561, 940900, 1188178, 1113839, 811448, 445473, 61979, 1161657, 835207, 114952, 1049130, 1191258, 336337, 838882, 1202972, 923655, 539574, 358863, 525807, 1277982, 849936, 53155, 1101368, 154084, 1369843, 485161, 272079, 354267, 343382, 453196, 239875, 6151, 911754, 335043, 236151, 1210440, 334363]},
            headers: {
            'Content-Type': 'application/json',
            'Connection': 'Keep-Alive'
            }}).then(res => {
                var new_arr = this.state.image_arr.concat(res.data);
                this.setState({image_arr: new_arr});
                //this.image_arr = this.image_arr.concat(res.data);
                console.log(res);
                console.log(res.data);
                console.log('image arr is:')
                console.log(this.state.image_arr)
        });
    }

    render() {
        const Images = this.state.image_arr.map((id, i) => <Image key={i} id={id}/>);

        return (
            <div>
                <div>
                    <div className="container">{Images}</div>
                </div> 
            </div>
        );
    }
}

/*ImageContainer.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};*/

//{this.props.imageUrls.map((imageUrl,i) => this.renderImage(imageUrl, i))}