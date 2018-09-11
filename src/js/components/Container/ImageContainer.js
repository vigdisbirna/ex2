import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';
import ImageHover from "../Image/ImageHover";
import Image from "../Image/Image";
import PositiveContainer from "./PositiveContainer";
import NegativeContainer from "./NegativeContainer";
import UpdateThemeButton from "../Buttons/UpdateThemeButton";
import ResetThemeButton from "../Buttons/ResetThemeButton";
import FinishButton from "../Buttons/FinishButton";
import SaveButton from "../Buttons/SaveButton";
import ShowPositive from "../Buttons/ShowPositive";
import ShowNegative from "../Buttons/ShowNegative";
import ResetRandomButton from "../Buttons/ResetRandomButton.js";
import UpdateRandomButton from "../Buttons/UpdateRandomButton.js";
import Header from "../Layout/Header";
import Popup from "reactjs-popup";
import scrollArea from "react-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import LeftSidebar from "../Layout/LeftSidebar";
import Footer from "../Layout/Footer";
import Slider from "react-slick";
import Options from "./Options";    




export default class ImageContainer extends React.Component {
    constructor(props) {
        super(props);

        /*this.state = {image_arr: Array.from(Array(50).keys()), vis_arr: Array.from(Array(50).keys()), 
                     pos_arr: [], neg_arr: [], interval: null, 
                     pos_cnt: 0, neg_cnt: 0, loading: false, round: 0};*/

        this.state = {time: 0, sum_time: 0, session_timer: 0, 
                    avg_time: 0, image_arr: [],
                    vis_arr: [], vis_arr_source: [], image_arr_source: [], pos_arr: [], neg_arr: [], 
                    interval: null, pos_cnt: 0, neg_cnt: 0, 
                    loading: false, round: 0, userId: this.props.userId, finished: false, 
                    testing:true, currentImg: 0, activeSlide:0, positiveOn: false, negativeOn: false,
                    numberOfImages: 25, eyeTrackerMode: false};
        
        //this.modifyImage = this.modifyImage.bind(this);
    }

    componentDidMount() {
        this.initialize();        
        var intv = setInterval(this.loadData.bind(this), 5000);
        var sec = setInterval(this.updateTimer.bind(this), 1000);
        this.setState({interval: intv});
    }

    componentWillUnmount() {
        //print('yo:componentWillUnmount');
        clearInterval(this.state.interval);
    }

    updateTimer () {
        this.setState(prevState => ({
            session_timer: prevState.session_timer + 1
        }));
  
    }

    popup_positive() {

    var contentStyle = {
        maxWidth: "480px",
        maxHeight: "500px",
        height: "60%",
        width: "40%",
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
        maxWidth: "480px",
        maxHeight: "500px",
        height: "60%",
        width: "40%",
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
            //url: 'http://192.168.1.128:5001/init',
            url: 'http://localhost:5001/init',
            headers: {
            'Content-Type': 'application/json',
            },
            //withCredentials: true
            
        }).then(res => {
                var tmp = arr;
                this.setState({
                    image_arr: arr.slice(-25), 
                    vis_arr: tmp.slice(0,25)
                });

                console.log(res);
                this.state.image_arr.map((id, i) => this.getImages(id, i));
                this.state.vis_arr.map((id, i) => this.getVisImage(id, i));
                
                
                //arr.map((id, i) => this.getImages(id, i));
                //arr.map((id, i) => this.getImages(id, i)); 

                
                //this.getArrImages(this.state.vis_arr);

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

            this.setState({loading: true});
            var pos_send = [];
            var neg_send = [];
            var i = 0;
            var pos_size = this.state.pos_arr.length -1;
            var neg_size = this.state.neg_arr.length -1;
            while(i < this.state.pos_cnt) {
                pos_send.push(this.state.pos_arr[pos_size - i]);
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

                //url: 'http://192.168.1.128:5001/learn',
                url: 'http://localhost:5001/learn',
                data: {"pos": pos_send, "neg": neg_send},
                //data: {"pos":[205184, 1434920, 628770, 996981, 1498999], "neg":[1204751, 652837, 126553, 444500, 562808, 289004, 1304436, 1267878, 779381, 373122, 344467, 112635, 1195480, 919759, 1097026, 1405437, 1082330, 206936, 419696, 385295, 1071078, 834200, 630266, 826533, 337513, 226962, 549076, 1091162, 514520, 194552, 378336, 689210, 956037, 506132, 598172, 438651, 932860, 273433, 432193, 1120997, 504388, 198492, 978275, 998146, 1369446, 1231115, 863451, 1414852, 1266696, 957149, 766538, 1497839, 352509, 946142, 873132, 183645, 1325906, 676795, 819663, 1124820, 423116, 117691, 1428357, 524561, 940900, 1188178, 1113839, 811448, 445473, 61979, 1161657, 835207, 114952, 1049130, 1191258, 336337, 838882, 1202972, 923655, 539574, 358863, 525807, 1277982, 849936, 53155, 1101368, 154084, 1369843, 485161, 272079, 354267, 343382, 453196, 239875, 6151, 911754, 335043, 236151, 1210440, 334363]},
                headers: {
                'Content-Type': 'application/json',
                //'Cookie' : this.props.userId
                }, 
                //withCredentials: true,

                }).then(res => {

                    res.data.sugg.map((id, i) => this.getImages(id, i));
                    console.log("length og image_arr_source when loading new data: " + this.state.image_arr_source.length);

                    this.setState(prevState => ({
                        image_arr: res.data.sugg, 
                        pos_cnt: 0, 
                        neg_cnt: 0, 
                        loading: false, 
                        round: prevState.round + 1,
                        sum_time: prevState.sum_time + res.data.time,
                        avg_time: (prevState.sum_time + res.data.time)/(prevState.round+1),
                        time: res.data.time
                    }));
                    console.log(this.state.time);
                    console.log(this.state.avg_time);
                    console.log(res);
                    //console.log('image arr is:');
                    //console.log(this.state.image_arr);
                    //console.log('vis arr is:');
                    //console.log(this.state.vis_arr);
            });
        }
        else {
            console.log('Not enough data');
        }
    }

    
    changeOnClickPos(img_id,i) {
        var temp = this.state.vis_arr;
        var arr = this.state.image_arr;
        var temp_source = this.state.vis_arr_source;
        var arr_source = this.state.image_arr_source;

        temp[i] = arr[0];
        temp_source[i] = arr_source[0];
        

        console.log("changeOnClick");
        //console.log(temp[i]);
        //console.log(i);

        arr.shift();
        arr_source.shift();

        this.setState(prevState => ({
            pos_arr: [...prevState.pos_arr, img_id],
            pos_cnt: prevState.pos_cnt + 1,
            image_arr: arr,
            vis_arr: temp,
            image_arr_source: arr_source,
            vis_arr_source: temp_source
        }));
       // setTimeout(console.log(this.state.vis_arr), 3000);
    }

    changeOnClickNeg(img_id,i) {
        //console.log(img);
        var temp = this.state.vis_arr;
        var arr = this.state.image_arr;
        var temp_source = this.state.vis_arr_source;
        var arr_source = this.state.image_arr_source;

        temp[i] = arr[0];
        temp_source[i] = arr_source[0];

        //console.log("changeOnClick");
        //console.log(temp[i]);
        //console.log(i);

        arr.shift();
        arr_source.shift();

        this.setState(prevState => ({
            neg_arr: [...prevState.neg_arr, img_id],
            neg_cnt: prevState.neg_cnt + 1,
            image_arr: arr,
            vis_arr: temp,
            image_arr_source: arr_source,
            vis_arr_source: temp_source
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
        });

        this.state.image_arr.map((id, i) => this.getImages(id, i));
        this.state.vis_arr.map((id, i) => this.getVisImage(id, i));
    }

    updateThemeOnClick() {
        var temp = this.state.round;
        axios({
            method: 'get',

            //url: 'http://192.168.1.128:5001/updateTheme',
            url: 'http://localhost:5001/updateTheme',
            headers: {
            'Content-Type': 'application/json', 
            },
            //withCredentials: true,

            }).then(res => {
                //console.log(res);
                var tmp = res.data.sugg;
                this.setState(prevState => ({
                    image_arr: res.data.sugg.slice(-25), 
                    vis_arr: tmp.slice(0,25),
                    round: prevState.round + 1,
                    sum_time: prevState.sum_time + (res.data.time),
                    avg_time: (prevState.sum_time + res.data.time)/(prevState.round+1),
                    time: res.data.time 
                }));

                this.state.image_arr.map((id, i) => this.getImages(id, i));
                this.state.vis_arr.map((id, i) => this.getVisImage(id, i));

                console.log(this.state.time)
                console.log(this.state.avg_time)
                console.log('vis_arr is:')
                console.log(this.state.vis_arr)
                console.log('image_arr is:')
                console.log(this.state.image_arr)
            });

            console.log("done updateing theme on click");
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
            //url: 'http://192.168.1.128:5001/resetModel',
            url: 'http://localhost:5001/resetModel',

            headers: {
            'Content-Type': 'application/json', 
            },
            //withCredentials: true
            }).then(res => {
                var tmp = arr;
                this.setState({
                    pos_arr: [], 
                    neg_arr: [],
                    image_arr: arr.slice(-25), 
                    vis_arr: tmp.slice(0,25),
                    round: 0,
                    sum_time: 0,
                    avg_time: 0,
                    session_timer: 0,
                    time: 0
                });
                this.state.image_arr.map((id, i) => this.getImages(id, i));
                this.state.vis_arr.map((id, i) => this.getVisImage(id, i));
            });

          
    }

    resetThemeOnClick() {
        axios({
            method: 'get',
            //url: 'http://192.168.1.128:5001/resetTheme',
            url: 'http://localhost:5001/resetTheme',

            headers: {
            'Content-Type': 'application/json',
            },
            //withCredentials: true
            }).then(res => {
                //console.log(res);
                var tmp = res.data.sugg;
                this.setState(prevState => ({
                    pos_arr: [], 
                    neg_arr: [],
                    round: 1,
                    image_arr: res.data.sugg.slice(-25), 
                    vis_arr: tmp.slice(0,25),
                    sum_time: res.data.time,
                    avg_time: (res.data.time)/1,
                    session_timer: 0,
                    time: res.data.time
                }));
                console.log(this.state.time)
                console.log(this.state.avg_time)

                this.state.image_arr.map((id, i) => this.getImages(id, i));
                this.state.vis_arr.map((id, i) => this.getVisImage(id, i));
            });
    }

    changeOnClickSkip(i) {
        //console.log(img);
        var temp = this.state.vis_arr;
        var arr = this.state.image_arr;
        var temp_source = this.state.vis_arr_source;
        var arr_source = this.state.image_arr_source;

        temp[i] = arr[0];
        temp_source[i] = arr_source[0]; 
        //console.log("changeOnClick");
        //console.log(temp[i]);
        //console.log(i);

        arr.shift();
        arr_source.shift();

        this.setState(prevState => ({
            image_arr: arr,
            vis_arr: temp,
            image_arr_source: arr_source,
            vis_arr_source: temp_source
        }));
    }

    saveOrFinishOnClick() {
        this.setState({finished: true})
    }

    finish() {

        var contentStyle = {
            maxWidth: "480px",
            maxHeight: "500px",
            height: "60%",
            width: "40%",
            overflow: 'auto',
            overflowX: 'hidden',
            padding: "1% 0% 0% 1%",
            backgroundColor: "pink",
            borderColor: "red"
        };
        
        return(
            <Popup trigger={<button className='btn btn-info save'>Finish</button>} modal closeOnDocumentClick contentStyle={contentStyle}>
                <button onClick = {this.closeOnDocumentClick}>loka</button> 
                <p>Ertu viss um að þú viljir hætta?</p> 
            </Popup>

        );
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

    getImages(image_id, i) {
        var source;
        
        //get the image for certain image id
        
        axios
        .get(
            'http://localhost:9999/images/placing-test-thumbnails/' + image_id.toString() + '.jpg',

            { responseType: 'arraybuffer' },
          )
          .then(response => {
            const base64 = btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
              ));

            source = "data:;base64," + base64;
            var new_image_arr_source = this.state.image_arr_source;
            new_image_arr_source[i] = source;
            this.setState({image_arr_source: new_image_arr_source});
          
            })
          .catch(error => {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                
                //source = "/src/assets/notFound.jpg";
                
                //get the best image from image_arr if the image was not found
                //var new_image_arr_source = this.state.image_arr_source;
                //new_image_arr_source[i] = source;
                //this.setState({image_arr_source: new_image_arr_source});

                console.log("image in image_arr notfound");
                var arr = this.state.image_arr;
                arr.splice(i, 1);
                this.setState({image_arr: arr});
                console.log("size of image_arr after removing: " + this.state.image_arr.length);
          });
    }


    //get the image for 
    getVisImage(image_id, i) {
        
        var source;
        
        axios
        .get(
            'http://localhost:9999/images/placing-test-thumbnails/' + image_id.toString() + '.jpg',

            { responseType: 'arraybuffer' },
          )
          .then(response => {
            const base64 = btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                '',
              ));

            source = "data:;base64," + base64;
            var new_vis_arr_source = this.state.vis_arr_source;
            new_vis_arr_source[i] = source;
            this.setState({vis_arr_source: new_vis_arr_source});
          
            })
          .catch(error => {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);

                //this.setState({ source: "/src/assets/notFound.jpg"});
                //source = "/src/assets/notFound.jpg";
                //var new_vis_arr_source = this.state.vis_arr_source;
                //new_vis_arr_source[i] = source;
                //this.setState({vis_arr_source: new_vis_arr_source});
                console.log("image in vis_arr not found");
                //this.getImages(this.state.image_arr[0], 0);
                this.changeOnClickSkip(i);
            });
          
    }

    /*modifyImage(newImages) {
        
        if(currentSlid >= 0 && currentSlide < newImages.length) {
            console.log("kemst inn");
            newImages[currentSlide] =  <ImageHover visibility={"show-image"} buttons={'no-buttons'} key={i} id={id} theImage={<img alt={id} src={this.state.vis_arr_source[i]} className="hoveredimg d-flex justify-content-center rounded"/>} changeOnClickPosFromContainer={this.changeOnClickPos.bind(this, id, i)} changeOnClickNegFromContainer={this.changeOnClickNeg.bind(this, id, i)} changeOnClickSkipFromContainer={this.changeOnClickSkip.bind(this,i)}/>;
        }

        return newImages;   
    }*/

    render() {

        let data;
        //const Images = this.state.vis_arr.map((id, i) =>
        //    <ImageHover key={i} id={id} imageId={id} changeOnClickPosFromContainer={this.changeOnClickPos.bind(this, id, i)} changeOnClickNegFromContainer={this.changeOnClickNeg.bind(this, id, i)} changeOnClickSkipFromContainer={this.changeOnClickSkip.bind(this,id,i)}/>
        //);

        let newImages = [];
        
        if (this.state.vis_arr_source.length >= 25)
        {
            newImages = this.state.vis_arr.map((id, i) => 
                <ImageHover visibility={"show-image"} buttons={'no-buttons'} key={i} id={id} theImage={<img alt={id} src={this.state.vis_arr_source[i]} className="hoveredimg d-flex justify-content-center rounded"/>} changeOnClickPosFromContainer={this.changeOnClickPos.bind(this, id, i)} changeOnClickNegFromContainer={this.changeOnClickNeg.bind(this, id, i)} changeOnClickSkipFromContainer={this.changeOnClickSkip.bind(this,i)}/>);
        }

        let active = this.state.activeSlide; 
        

        if (active >= -1 && active < newImages.length) {
            
            if(active < 0) {
                active = newImages.length-1;
            }
            
            const thisId = this.state.vis_arr[active];
            newImages[active] = <ImageHover visibility={"show-image"} buttons={'show-buttons'} key={active} id={thisId} theImage={<img alt={thisId} src={this.state.vis_arr_source[active]} className="hoveredimg d-flex justify-content-center rounded"/>} changeOnClickPosFromContainer={this.changeOnClickPos.bind(this, thisId, active)} changeOnClickNegFromContainer={this.changeOnClickNeg.bind(this, thisId, active)} changeOnClickSkipFromContainer={this.changeOnClickSkip.bind(this,active)}/>;
        }

       // newImages = this.modifyImage(newImages);
        
        let backupImages = [];
        backupImages = this.state.image_arr.map((id, i) => 
        <ImageHover visibility={"hidden"} buttons={'show-buttons'} key={i} id={id} theImage={<img alt={id} src={this.state.image_arr_source[i]} className="hoveredimg d-flex justify-content-center rounded"/>} changeOnClickPosFromContainer={this.changeOnClickPos.bind(this, id, i)} changeOnClickNegFromContainer={this.changeOnClickNeg.bind(this, id, i)} changeOnClickSkipFromContainer={this.changeOnClickSkip.bind(this,i)}/>);


        if (this.state.loading) {
            data = <div className='training'>Round {this.state.round.toString()}</div>
        }
        else {
            data = <div className='training'>Round {this.state.round.toString()}</div>
        }
    
        if(this.state.finished) {
            return (
                <h1>Woho you are done, have a nice day!</h1>
            );
        }

                
        var sliderSettings = {
            autoplay: true,
            autoplaySpeed: 900,
            infinite: true,
            speed: 100,
            slidesToShow: 2,
            slidesToScroll: 1,
            easing: "ease-in",
            centerMode: true,
            vertical: true,
            /*rtl: true,*/ 
            pauseOnHover: true,
            arrows: false,
            initialSlide: 0,
            afterChange: current => this.setState({ activeSlide: current-1 })
        }

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

          var slider = <div></div>;

          if(newImages.length >= this.state.numberOfImages) {
            slider = 
            <Slider className="main-slider" {...sliderSettings}>
                {newImages}
            </Slider>;
        }

        if(this.state.eyeTrackerMode) {
            var  eyeTrackerSettings = {
                cursor: 'none'
            };
        }
        
        
        return (
            <div className="the-container" style={eyeTrackerSettings}>
                <div className="center">
                    <Header eyeTrackerStyle={eyeTrackerSettings} updateTheme={this.updateThemeOnClick.bind(this)} updateRandom={this.updateRandomOnClick.bind(this)} resetTheme={this.resetThemeOnClick.bind(this)} resetRandom={this.resetRandomOnClick.bind(this)}/>
                </div>
                <div className=" center row main-container">
                    <div className="container">
                        <div className=" col-md-3 border-extra-pos containers" onMouseEnter={this.test}>
                            <PositiveContainer posImageIdFromParent={this.state.pos_arr}/>
                        </div>
                        <div className="slider col-md-5">
                            {slider}
                        </div>
                        <div className=" col-md-3 border-extra-neg containers">
                            <NegativeContainer negImageIdFromParent={this.state.neg_arr}/>
                        </div>
                        <div>
                            {backupImages}
                        </div>
                    </div>
                </div>
            </div>
            );
        
    }
}
