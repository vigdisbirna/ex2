import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import ImageHover from "../Image/ImageHover";
import Image from "../Image/Image";
import Positives from "../Positives/Positives"
import PositiveContainer from "./PositiveContainer";
import NegativeContainer from "./NegativeContainer";

export default class ImageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {image_arr: [], vis_arr: [],  pos_arr: [], neg_arr: [], interval: null, pos_cnt: 0, neg_cnt: 0};
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
            'Content-Type': 'application/json'
            }}).then(res => {
                console.log(res);
                this.setState({
                    image_arr: res.data.concat([205184, 1434920, 628770, 996981, 1498999]), 
                    vis_arr: res.data
                });
                console.log('vis_arr is:')
                console.log(this.state.vis_arr)
                console.log('image_arr is:')
                console.log(this.state.image_arr)
            });
    }

    /*myCallBack(posIdFromChild) {
        console.log('parent: in callback');
        this.setState(prevState => ({
            pos_arr: [...prevState.pos_arr, posIdFromChild],
        }));
    };*/

    loadData() {
        console.log('About to send post !');

        console.log("pos_arr in loadData is:");
        console.log(this.state.pos_arr);

        if(this.state.pos_cnt != 0 && this.state.neg_cnt != 0) {
            var pos_send = [];
            var neg_send = [];
            var i = 0;
            var size = this.state.pos_arr.length -1;
            while(i < this.state.pos_cnt) {
                pos_send.push(this.state.pos_arr[size- i]);
                i++;
            }
            i = 0
            while(i < this.state.neg_cnt) {
                neg_send.push(this.state.neg_arr[size- i]);
                i++;
            }
            console.log('pos_send');
            console.log(pos_send);
            console.log('neg_send');
            console.log(neg_send);
            axios({
                method: 'post',
                url: 'http://localhost:5000/learn',
                data: {"pos": pos_send, "neg": neg_send},
                //data: {"pos":[205184, 1434920, 628770, 996981, 1498999], "neg":[1204751, 652837, 126553, 444500, 562808, 289004, 1304436, 1267878, 779381, 373122, 344467, 112635, 1195480, 919759, 1097026, 1405437, 1082330, 206936, 419696, 385295, 1071078, 834200, 630266, 826533, 337513, 226962, 549076, 1091162, 514520, 194552, 378336, 689210, 956037, 506132, 598172, 438651, 932860, 273433, 432193, 1120997, 504388, 198492, 978275, 998146, 1369446, 1231115, 863451, 1414852, 1266696, 957149, 766538, 1497839, 352509, 946142, 873132, 183645, 1325906, 676795, 819663, 1124820, 423116, 117691, 1428357, 524561, 940900, 1188178, 1113839, 811448, 445473, 61979, 1161657, 835207, 114952, 1049130, 1191258, 336337, 838882, 1202972, 923655, 539574, 358863, 525807, 1277982, 849936, 53155, 1101368, 154084, 1369843, 485161, 272079, 354267, 343382, 453196, 239875, 6151, 911754, 335043, 236151, 1210440, 334363]},
                headers: {
                'Content-Type': 'application/json',
                'Connection': 'Keep-Alive'
                }}).then(res => {
                    this.setState({image_arr: res.data, pos_cnt: 0, neg_cnt: 0});
                    console.log(res);
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

    changeOnClickPos(img_id,i) {
        //console.log(img);
        var temp = this.state.vis_arr;
        var arr = this.state.image_arr;

        temp[i] = arr[0];
        console.log("changeOnClick");
        console.log(temp[i]);
        console.log(i);

        arr.shift();

        this.setState(prevState => ({
            pos_arr: [...prevState.pos_arr, img_id],
            pos_cnt: prevState.pos_cnt + 1,
            image_arr: arr,
            vis_arr: temp
        }));
       // setTimeout(console.log(this.state.vis_arr), 3000);
    }

    changeOnClickNeg(img_id,i) {
        //console.log(img);
        var temp = this.state.vis_arr;
        var arr = this.state.image_arr;

        temp[i] = arr[0];
        console.log("changeOnClick");
        console.log(temp[i]);
        console.log(i);

        arr.shift();

        this.setState(prevState => ({
            neg_arr: [...prevState.neg_arr, img_id],
            neg_cnt: prevState.neg_cnt + 1,
            image_arr: arr,
            vis_arr: temp
        }));
       // setTimeout(console.log(this.state.vis_arr), 3000);

    }

    row(Images,counter){
        var column = [];
        var num = 5;
        for (var i = 0; i < num; i++) {
            column.push( 
            <div key = {counter} className="col-">
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

        const Images = this.state.vis_arr.map((id, i) =>
            <ImageHover key={i} id={id} imageId={id} changeOnClickPosFromContainer={this.changeOnClickPos.bind(this, id, i)} changeOnClickNegFromContainer={this.changeOnClickNeg.bind(this, id, i)}/>
        );
        //const Images = Array.from(Array(50).keys()).map((id, i) => <Image key={i} id={id}/>);
        //console.log("render");
        //console.log(this.state.vis_arr);
        //console.log(Images);
        return (      
            <div className="container-fluid">
                <div className="row">
                    <div className="border border-danger col">
                        <NegativeContainer negImageIdFromParent={this.state.neg_arr}/>
                    </div>
                    <div className="col-md-auto">
                        {this.grid(Images)}
                    </div>
                    <div className="border border-success col">
                        <PositiveContainer posImageIdFromParent={this.state.pos_arr} /*callBackFromParent={this.myCallBack.bind(this)}*//>
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