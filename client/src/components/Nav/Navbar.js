import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: true,
            about: false,
            contact: false
        }
        this.setPortfolio = this.setPortfolio.bind(this);
        this.setAbout = this.setAbout.bind(this);
        this.setContact = this.setContact.bind(this);
    }

    setPortfolio() {
        console.log('this:', this)
        console.log('state:', this.state)
        this.setState({
            portfolio: true,
            about: false,
            contact: false
        })
    }

    setAbout() {
        this.setState({
            portfolio: false,
            about: true,
            contact: false
        })
    }

    setContact() {
        this.setState({
            portfolio: false,
            about: false,
            contact: true
        })
    }

    render() {
        return (
            <nav className="nav-wrapper">
                <h1 className="nav-h1">Tori Miller</h1>
                <div className="nav-links">
                    <div className="nav-item nav-item-portfolio">
                        <Link to='/portfolio' 
                            className="nav-link" 
                            style={ this.state.portfolio ? { color: '#E94CC0'} : {color : '#75849E'} }  
                            onClick={this.setPortfolio}>
                            Portfolio
                        </Link>
                    </div>
                    <div className="nav-item nav-item-about">
                        <Link to='/about' 
                            className="nav-link"
                            style={ this.state.about ? { color: '#E94CC0'} : {color : '#75849E'} }  
                            onClick={this.setAbout}>
                            About
                        </Link>
                    </div>
                    {/* <div className="nav-item nav-item-contact">
                        <Link to='/contact' 
                            className="nav-link"
                            style={ this.state.contact ? { color: '#E94CC0'} : {color : '#75849E'} }  
                            onClick={this.setContact}>
                            Contact
                        </Link>
                    </div> */}
                </div>
            </nav>
        )
    }
}

export default Navbar;