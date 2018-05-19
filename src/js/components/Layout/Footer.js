import React from "react";

export default class Footer extends React.Component {

    render () {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center Bootstrap love footer "> 
                        Hanna Ragnarsdóttir • Þórhildur Þorleiksdóttir • Björn Þór Jónsson • Gylfi Þór Guðmundsson • Jan Zahálka • Stevan Rudinac 
                </div>
                <div className="row">
                    <div className="col">
                        <img src="/src/assets/ru2.jpg" alt="ru.logo" className="d-flex justify-content-center rounded logo" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/itu.jpg" alt="ru.logo" className="d-flex justify-content-center rounded logo" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/uva.jpg" alt="ru.logo" className="d-flex justify-content-center rounded logo" />
                    </div>
                    <div className="col">
                        <img src="/src/assets/bohem.jpg" alt="ru.logo" className="d-flex justify-content-center rounded logo" />
                    </div>
                </div>
            </div>
        );
    }
}
