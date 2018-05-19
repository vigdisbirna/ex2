import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import ImageHover from "../Image/ImageHover";
import Image from "../Image/Image";
import PositiveContainer from "./PositiveContainer";
import NegativeContainer from "./NegativeContainer";
import UpdateThemeButton from "../Buttons/UpdateThemeButton";
import ResetThemeButton from "../Buttons/ResetThemeButton";
import ShowPositive from "../Buttons/ShowPositive";
import ShowNegative from "../Buttons/ShowNegative";
import ResetRandomButton from "../Buttons/ResetRandomButton.js";
import UpdateRandomButton from "../Buttons/UpdateRandomButton.js";
import Popup from "reactjs-popup";
import scrollArea from "react-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar';


export default class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {image_arr: [], vis_arr: [],  pos_arr: [], neg_arr: [], interval: null, pos_cnt: 0, neg_cnt: 0, loading: false, round: 0};
        //this.state = {image_arr: Array.from(Array(50).keys()), vis_arr: Array.from(Array(50).keys()),  pos_arr: [], neg_arr: [], interval: null, pos_cnt: 0, neg_cnt: 0, loading: false, round: 0};
    }

    componentDidMount() {
        this.initialize();        
        var intv = setInterval(this.loadData.bind(this), 5000);
        this.setState({interval: intv});
    }

    componentWillUnmount() {
        print('yo:componentWillUnmount');
        clearInterval(this.state.interval);
    }

    popup_positive() {

    var contentStyle = {
        maxWidth: "710px",
        maxHeight: "710px",
        height: "80%",
        width: "80%",
        overflow: 'auto',
        overflowX: 'hidden',
        padding: "1% 0% 0% 1%",
        backgroundColor: "black",
        borderColor: "#28a746"
    };

    //const container = document.querySelector('#container-scroll');
    //const ps = new PerfectScrollbar(container);

    const Images = this.state.pos_arr.map((id, i) =>
    <Image key={i} id={id} imageId={id}/>);

    var rows = Math.ceil(Images.length / 5);
    return(
        <Popup trigger={<button className='btn btn-success posAll'>Show all</button>} modal closeOnDocumentClick contentStyle={contentStyle}>
            {this.grid(Images,rows)}           
        </Popup>
    
    );
    };

popup_negative() {

    var contentStyle = {
        maxWidth: "710px",
        maxHeight: "710px",
        height: "80%",
        width: "80%",
        overflow: 'auto',
        overflowX: 'hidden',
        padding: "1% 0% 0% 1%",
        backgroundColor: "black",
        borderColor: "#a50010"
        
    };

    //const container = document.querySelector('#container-scroll');

    //const ps = new PerfectScrollbar(container);

    const Images = this.state.neg_arr.map((id, i) =>
    <Image key={i} id={id} imageId={id}/>);

    var rows = Math.ceil(Images.length / 5);
        return(
            <Popup trigger={<button className='btn btn-danger posAll'>Show all</button>} modal closeOnDocumentClick contentStyle={contentStyle}>
                {this.grid(Images,rows)}
            </Popup>
        
        );
    };
    initialize() {
        console.log('sending Get !')
        var arr = []
        while(arr.length < 50){
            var randomnumber = Math.floor(Math.random()*1500000) + 1;
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }

        axios({
            method: 'get',
            url: 'http://192.168.1.128:5001/init',
            headers: {
            'Content-Type': 'application/json'
            }}).then(res => {
                var tmp = arr;
                this.setState({
                    image_arr: arr.slice(-25), 
                    vis_arr: tmp.slice(0,25)
                });
                //var tmp = res.data;
                //this.setState({
                    //image_arr: res.data.slice(-25), 
                    //vis_arr: tmp.slice(0,25)
                //});
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

        console.log("pos counter");
        console.log(this.state.pos_cnt);
        console.log("neg counter");
        console.log(this.state.neg_cnt)
        

        if(this.state.pos_cnt != 0 || this.state.neg_cnt != 0) {
            console.log("enough data wuhu");

            var temp = this.state.round;
            this.setState({loading: true});
            var pos_send = [];
            var neg_send = [];
            var i = 0;
            var pos_size = this.state.pos_arr.length -1;
            var neg_size = this.state.neg_arr.length -1;
            while(i < this.state.pos_cnt) {
                pos_send.push(this.state.pos_arr[pos_size- i]);
                i++;
            }
            i = 0
            console.log('neg cnt');
            console.log(this.state.neg_cnt)
            while(i < this.state.neg_cnt) {
                neg_send.push(this.state.neg_arr[neg_size- i]);
                i++;
            }
            console.log('pos_send');
            console.log(pos_send);
            console.log('neg_send');
            console.log(neg_send);
            axios({
                method: 'post',
                url: 'http://192.168.1.128:5001/learn',
                data: {"pos": pos_send, "neg": neg_send},
                //data: {"pos":[205184, 1434920, 628770, 996981, 1498999], "neg":[1204751, 652837, 126553, 444500, 562808, 289004, 1304436, 1267878, 779381, 373122, 344467, 112635, 1195480, 919759, 1097026, 1405437, 1082330, 206936, 419696, 385295, 1071078, 834200, 630266, 826533, 337513, 226962, 549076, 1091162, 514520, 194552, 378336, 689210, 956037, 506132, 598172, 438651, 932860, 273433, 432193, 1120997, 504388, 198492, 978275, 998146, 1369446, 1231115, 863451, 1414852, 1266696, 957149, 766538, 1497839, 352509, 946142, 873132, 183645, 1325906, 676795, 819663, 1124820, 423116, 117691, 1428357, 524561, 940900, 1188178, 1113839, 811448, 445473, 61979, 1161657, 835207, 114952, 1049130, 1191258, 336337, 838882, 1202972, 923655, 539574, 358863, 525807, 1277982, 849936, 53155, 1101368, 154084, 1369843, 485161, 272079, 354267, 343382, 453196, 239875, 6151, 911754, 335043, 236151, 1210440, 334363]},
                headers: {
                'Content-Type': 'application/json',
                }}).then(res => {
                    this.setState({image_arr: res.data, pos_cnt: 0, neg_cnt: 0, loading: false, round: temp + 1});
                    console.log(res);
                    console.log('image arr is:');
                    console.log(this.state.image_arr);
                    console.log('vis arr is:');
                    console.log(this.state.vis_arr);
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


    updateRandomOnClick(){
        var arr = []
        var temp = this.state.round;
        while(arr.length < 50){
            var randomnumber = Math.floor(Math.random()*1500000) + 1;
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }
        var tmp = arr;
        this.setState({
            image_arr: arr.slice(-25), 
            vis_arr: tmp.slice(0,25),
            round: temp + 1
        });
    }

    updateThemeOnClick() {

        var temp = this.state.round;
        axios({
            method: 'get',
            url: 'http://192.168.1.128:5001/updateTheme',
            headers: {
            'Content-Type': 'application/json'
            }}).then(res => {
                console.log(res);
                var tmp = res.data;
                this.setState({
                    image_arr: res.data.slice(-25), 
                    vis_arr: tmp.slice(0,25),
                    round: temp + 1
                });
                console.log('vis_arr is:')
                console.log(this.state.vis_arr)
                console.log('image_arr is:')
                console.log(this.state.image_arr)
            });
    }

    resetRandomOnClick(){
        var arr = []
        while(arr.length < 50){
            var randomnumber = Math.floor(Math.random()*1500000) + 1;
            if(arr.indexOf(randomnumber) > -1) continue;
            arr[arr.length] = randomnumber;
        }
        axios({
            method: 'get',
            url: 'http://192.168.1.128:5001/resetModel',
            headers: {
            'Content-Type': 'application/json'
            }}).then(res => {
                var tmp = arr;
                this.setState({
                    pos_arr: [], 
                    neg_arr: [],
                    image_arr: arr.slice(-25), 
                    vis_arr: tmp.slice(0,25),
                    round: 0
                });
            });
    }

    resetThemeOnClick() {
        axios({
            method: 'get',
            url: 'http://192.168.1.128:5001/resetTheme',
            headers: {
            'Content-Type': 'application/json'
            }}).then(res => {
                console.log(res);
                var tmp = res.data;
                this.setState({
                    pos_arr: [], 
                    neg_arr: [],
                    image_arr: res.data.slice(-25), 
                    vis_arr: tmp.slice(0,25),
                    round: 0
                });
            });
    }

    changeOnClickSkip(img_id,i) {
        //console.log(img);
        var temp = this.state.vis_arr;
        var arr = this.state.image_arr;

        temp[i] = arr[0];
        console.log("changeOnClick");
        console.log(temp[i]);
        console.log(i);

        arr.shift();

        this.setState(prevState => ({
            image_arr: arr,
            vis_arr: temp
        }));
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

    grid(Images, num){
        var rows = [];
        var counter = 0;
        for (var j = 0; j < num; j++) {
           rows.push( <div key = {counter} className="row">
                {this.row(Images, counter)}
            </div>);
            counter = counter + 5;
        }
        return rows;
    }

    render() {

        let data;
        const Images = this.state.vis_arr.map((id, i) =>
            <ImageHover key={i} id={id} imageId={id} changeOnClickPosFromContainer={this.changeOnClickPos.bind(this, id, i)} changeOnClickNegFromContainer={this.changeOnClickNeg.bind(this, id, i)} changeOnClickSkipFromContainer={this.changeOnClickSkip.bind(this,id,i)}/>
        );

        if (this.state.loading) {
            data = <div className='training'>Round {this.state.round.toString()}</div>
        }
        else {
            data = <div className='training'>Round {this.state.round.toString()}</div>
        }
        //const Images = Array.from(Array(50).keys()).map((id, i) => <Image key={i} id={id}/>);
        //console.log("render");
        //console.log(this.state.vis_arr);
        //console.log(Images);

        return (    

            <div className="container">
                <div className="row">
                    <div className="border-extra-pos border-success col">
                            <PositiveContainer posImageIdFromParent={this.state.pos_arr} /*callBackFromParent={this.myCallBack.bind(this)}*//>
                        </div>
                        <div className="col-md-auto">
                            {this.grid(Images,5)}
                        </div>
                        <div className="border-extra-neg col">
                            <NegativeContainer negImageIdFromParent={this.state.neg_arr}/>
                        </div>
                    </div>
                <div className='row'>
                    <div className='col posAllCont'>
                        {this.popup_positive()}
                    </div>
                    <div className='col d-flex reset-room'>
                        <div className='p-2 button-p-2 update-b'>
                            <UpdateThemeButton updateThemeOnClickFromBtn={this.updateThemeOnClick.bind(this)}/>
                        </div>
                        <div className='p-2 button-p-2 update-b'>
                            <UpdateRandomButton updateRandomOnClickFromBtn={this.updateRandomOnClick.bind(this)}/>
                        </div>
                        <div className='p-2 button-p-2'>
                            <ResetThemeButton resetThemeOnClickFromBtn={this.resetThemeOnClick.bind(this)}/>
                        </div>
                        <div className='p-2 button-p-2'>
                            <ResetRandomButton resetRandomOnClickFromBtn={this.resetRandomOnClick.bind(this)}/>
                        </div> 
                    </div>
                    <div className='col negAllCont'>
                        {this.popup_negative()}
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