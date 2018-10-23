import React, { Component } from 'react';

export default class Services extends Component {
    render() {
        return (
            <div className="services-container">
                <div className="component-header">
                    <h1>Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="services">
                    <div>
                        <i class="fas fa-shopping-cart"></i>
                        <h1>E-Commerce</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div>
                        <i class="fas fa-laptop"></i>
                        <h1>Responsive Design</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div>
                        <i class="fas fa-lock"></i>
                        <h1>Web Security</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        );
    }
}