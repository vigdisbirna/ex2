import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import Image from "../Image/Image";
import Positives from "../Positives/Positives"
import PositiveContainer from "./PositiveContainer";
import NegativeContainer from "./NegativeContainer";

export default class ImageContainer extends React.Component {

    constructor() {
        super();
        this.state = { image_arr: [], pos_arr: [], interval: null};
    }

    /*componentDidMount() {
        this.initialize();        
        var intv = setInterval(this.loadData.bind(this), 200000);
        this.setState({interval: intv});
    }*/

    /*componentWillUnmount() {
        print('yo:componentWillUnmount');
        clearInterval(this.state.interval);
    }*/

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
                console.log(res);
                console.log('image_arr is:')
                console.log(this.state.image_arr)
        });
    }

    myCallBack(posIdFromChild) {
        console.log('parent: in callback');
        this.setState(prevState => ({
            pos_arr: [...prevState.pos_arr, posIdFromChild],
        }));
    };

    loadData() {
        console.log('About to send post !');

        console.log("pos_arr in loadData is:");
        console.log(this.state.pos_arr);

        if(this.state.pos_arr.length != 0 /*and this.state.neg_arr.length*/) {
            axios({
                method: 'post',
                url: 'http://localhost:5000/learn',
                data: {"pos":[205184, 1434920, 628770, 996981, 1498999], "neg":[1204751, 652837, 126553, 444500, 562808, 289004, 1304436, 1267878, 779381, 373122, 344467, 112635, 1195480, 919759, 1097026, 1405437, 1082330, 206936, 419696, 385295, 1071078, 834200, 630266, 826533, 337513, 226962, 549076, 1091162, 514520, 194552, 378336, 689210, 956037, 506132, 598172, 438651, 932860, 273433, 432193, 1120997, 504388, 198492, 978275, 998146, 1369446, 1231115, 863451, 1414852, 1266696, 957149, 766538, 1497839, 352509, 946142, 873132, 183645, 1325906, 676795, 819663, 1124820, 423116, 117691, 1428357, 524561, 940900, 1188178, 1113839, 811448, 445473, 61979, 1161657, 835207, 114952, 1049130, 1191258, 336337, 838882, 1202972, 923655, 539574, 358863, 525807, 1277982, 849936, 53155, 1101368, 154084, 1369843, 485161, 272079, 354267, 343382, 453196, 239875, 6151, 911754, 335043, 236151, 1210440, 334363]},
                headers: {
                'Content-Type': 'application/json',
                'Connection': 'Keep-Alive'
                }}).then(res => {
                    var new_arr = this.state.image_arr.concat(res.data);
                    this.setState({image_arr: new_arr, pos_arr: []});
                    console.log(res);
                    console.log(res.data);
                    console.log('image arr is:');
                    console.log(this.state.image_arr);
                    console.log('pos arr is:');
                    console.log(this.state.pos_arr);
            });
        }
        else {
            console.log('Not enough data');
        }
}

    row(Images,counter){
        var column = [];
        var num = 5;
        for (var i = 0; i < num; i++) {
            column.push( 
            <div key = {counter} className="col">
                {Images[counter]}
            </div>);
            counter = counter + 1;
         } 
         return column;
    }

    grid(Images){
        var rows = [];
        var counter = 0;
        var num = 5;
        for (var j = 0; j < num; j++) {
           rows.push( <div key = {counter} className="row">
                {this.row(Images, counter)}
            </div>);
            counter = counter + num;
        }
        return rows;
    }

    render() {
        //const Images = this.state.image_arr.map((id, i) => <Image key={i} id={id}/>);
        const Images = Array.from(Array(25).keys()).map((id, i) => <Image key={i} id={id}/>);
        return (      
            <div className="container-fluid">
                <div className="row">
                    <div className="col border border-danger">
                        <NegativeContainer />
                    </div>
                    <div className="col-8">
                        {this.grid(Images)}
                    </div>
                    <div className="col border border-success">
                        <PositiveContainer callBackFromParent={this.myCallBack.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

/*ImageContainer.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};*/

//{this.props.imageUrls.map((imageUrl,i) => this.renderImage(imageUrl, i))}