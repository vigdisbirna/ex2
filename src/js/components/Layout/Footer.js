import React from "react";

export default class Footer extends React.Component {

    render () {
        return (
            <div>
                <footer className="footer-flex">
                <div id="names" className="container-flex d-flex justify-content-center Bootstrap love footer row"> 
                        Hanna Ragnarsdóttir • Þórhildur Þorleiksdóttir • Björn Þór Jónsson • Gylfi Þór Guðmundsson • Jan Zahálka • Stevan Rudinac 
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <div className="show-logo">
                            <img src="/src/assets/ru2.jpg" alt="ru.logo" className="d-flex justify-content-center rounded logo" />
                        </div>
                    </div>
                    <div className="col">
                    <div className="show-logo">
                        <img src="/src/assets/itu.jpg" alt="ru.logo" className="d-flex justify-content-center rounded logo" />
                        </div>
                    </div>
                    <div className="col">
                    <div className="show-logo">
                        <img src="/src/assets/uva.jpg" alt="ru.logo" className="d-flex justify-content-center rounded logo" />
                        </div>
                    </div>
                    <div className="col">
                    <div className="show-logo justify-content-center">
                        <img src="/src/assets/bohem.jpg" alt="ru.logo" className="rounded logo" />
                        </div>
                    </div>
                </div>
                </footer>
            </div>
        );
    }
}
