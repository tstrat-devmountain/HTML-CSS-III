import React, { Component } from 'react';

export default class Header extends Component {
    constructor(){ 
        super();
        this.state = {
            toggleNav : false
        }
    }

    toggle = () => {
        this.setState((prevState) => {
            return {
                toggleNav: !prevState.toggleNav
            }
        })
    }
    
    render() {
        return (
            <header>
                <div>
                    <div className="logo">
                        <a href="#/services">Start Bootstrap</a>
                    </div>
                    <button onClick={this.toggle}>Menu <i class="fas fa-bars"></i></button>
                    <nav className={this.state.toggleNav ? 'show': ''}>
                        <ul>
                            <li><a href="#/services">Services</a></li>
                            <li><a href="#/portfolio">Portfolio</a></li>
                            <li><a href="#/about">About</a></li>
                            <li><a href="#/team">Team</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}