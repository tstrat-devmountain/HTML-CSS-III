import React, { Component } from 'react';
import one from '../media/01.jpg';
import two from '../media/02.jpg';
import three from '../media/03.jpg';
import four from '../media/04.jpg';
import five from '../media/05.jpg';
import six from '../media/06.jpg';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio-container">
                <div className="component-header">
                    <h1>Portfolio</h1>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="photos">
                    <div>
                        <img src={one} alt="clothes" />
                        <h1>Threads</h1>
                        <h3>Illustration</h3>    
                    </div> 
                    <div>
                        <img src={two} alt="explore" />
                        <h1>Explore</h1>
                        <h3>Graphic Design</h3>    
                    </div> 
                    <div>
                        <img src={three} alt="finish" />
                        <h1>Finish</h1>
                        <h3>Identity</h3>    
                    </div>    
                    <div>
                        <img src={four} alt="lines" />
                        <h1>Lines</h1>
                        <h3>Branding</h3>    
                    </div> 
                    <div>
                        <img src={five} alt="southwest" />
                        <h1>Southwest</h1>
                        <h3>Website Design</h3>    
                    </div>   
                    <div>
                        <img src={six} alt="window" />
                        <h1>Window</h1>
                        <h3>Photography</h3>    
                    </div>       
                </div>
            </div>
        );
    }
}