import React, { Component } from 'react';
import one from '../media/about01.jpg';
import two from '../media/about02.jpg';
import three from '../media/about03.jpg';
import four from '../media/about04.jpg';

export default class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="component-header">
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <ul className="about">
                    <div className="line"></div>
                    <li className="left">
                        <img src={one} alt="something cool" />
                        <div>
                            <h2>2009-2011</h2>
                            <h2>Humble Beginnings</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </li>
                    <li className="right">
                        <img src={two} alt="something cool"/>
                        <div>
                            <h2>March 2011</h2>
                            <h2>An Agency is Born</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </li>
                    <li className="left">
                        <img src={three} alt="something cool"/>
                        <div>
                            <h2>December 2012</h2>
                            <h2>Transition to Full Service</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </li>
                    <li className="right"> 
                        <img src={four} alt="something cool"/>
                        <div>
                            <h2>July 2014</h2>
                            <h2>Phase Two Expansion</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                        </div>
                    </li>
                    <li>
                        <div id="finalImg"><p>Be Part Of Our Story!</p></div>
                    </li>
                </ul>
            </div>
        );
    }
}