import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import ResetRandomButton from "../Buttons/ResetRandomButton.js";
import UpdateRandomButton from "../Buttons/UpdateRandomButton.js";
import UpdateThemeButton from "../Buttons/UpdateThemeButton";
import ResetThemeButton from "../Buttons/ResetThemeButton";
import Title from "./../Header/Title";

export default class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }
    
    
    handleChange(e) {

        const title = e.target.value;
        this.props.changeTitle(title);
        
    }

    onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
}

    toggle() {
    this.setState({
        dropdownOpen: !this.state.dropdownOpen
    });
}

    render () {
        
        
        return (
            <div className="header" style={this.props.eyeTrackerStyle}>
                <div>
                    <h1>Exquisitor</h1>
                </div>
                <div>
                    <div className="dropdown">
                        <button className="dropbtn" style={this.props.eyeTrackerStyle}><span className="glyphicon glyphicon-info-sign"></span></button>
                        <div className="dropdown-content info" style={this.props.eyeTrackerStyle}>
                            <div> 
                                <ul>
                                    <li>Hanna Ragnarsdóttir</li>
                                    <li>Þórhildur Þorleiksdóttir</li>
                                    <li>Björn Þór Jónsson</li>
                                    <li>Gylfi Þór Guðmundsson</li>
                                    <li>Jan Zahálka</li>
                                    <li>Stevan Rudinac </li>
                                </ul>
                            </div>
                            <div>
                                <div className="show-logo ">
                                    <img src="/src/assets/ru2.jpg" alt="ru.logo" className="rulogo"/>
                                </div>
                            </div>
                            
                        </div>  
                    </div>
                    <div className="dropdown settings">
                        <button className="dropbtn" style={this.props.eyeTrackerStyle} ><span className="glyphicon glyphicon-repeat"></span></button>
                        <div className="dropdown-content">
                            <div className='p-2 button-p-2 update-b'>
                                <UpdateThemeButton style={this.props.eyeTrackerStyle} updateThemeOnClickFromBtn={this.props.updateTheme}/>
                            </div>
                            <div className='p-2 button-p-2 update-b'>
                                <UpdateRandomButton style={this.props.eyeTrackerStyle} updateRandomOnClickFromBtn={this.props.updateRandom}/>
                            </div>
                            <div className='p-2 button-p-2'>
                                <ResetThemeButton style={this.props.eyeTrackerStyle} resetThemeOnClickFromBtn={this.props.resetTheme}/>
                            </div>
                            <div className='p-2 button-p-2'>
                                <ResetRandomButton style={this.props.eyeTrackerStyle} resetRandomOnClickFromBtn={this.props.resetRandom}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
        
        
        
        /*return (
            <div className="header">
                <Navbar className="header-content">
                    <div>
                        <h1>Exquisitor</h1>
                    </div>
                    <NavbarNav right>
                        <div className="dropdown">
                            <button className="dropbtn">settings</button>
                            <div className="dropdown-content">
                                <div className='p-2 button-p-2 update-b'>
                                    <UpdateThemeButton updateThemeOnClickFromBtn={this.props.updateTheme}/>
                                </div>
                                <div className='p-2 button-p-2 update-b'>
                                    <UpdateRandomButton updateRandomOnClickFromBtn={this.props.updateRandom}/>
                                </div>
                                <div className='p-2 button-p-2'>
                                    <ResetThemeButton resetThemeOnClickFromBtn={this.props.resetTheme}/>
                                </div>
                                <div className='p-2 button-p-2'>
                                    <ResetRandomButton resetRandomOnClickFromBtn={this.props.resetRandom}/>
                                </div>
                            </div>
                        </div>                  
                    </NavbarNav>
                </Navbar>    
            </div>  
        );*/
    }
}
