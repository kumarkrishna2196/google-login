import React from 'react'
import logo from '../../src/logo.svg';
import './home.css';
const Home = () => {
    return (
        <div className="Container">
            <div className="header1">
            <p>
                Get the latest on our COVID-19 response
            </p>
            </div>
            <div className="switch">
              <p>Switch to hosting</p>
              <img src={logo} width="40px" height="40px" alt="logo"/>
              <button className="btn">login</button>
            </div>
            <div className="nav">
                <div>
                <p>Location</p>
                <p> where are you going?</p>
                </div>
                <div>
                <p>Check in </p>
                <p> Adds dates</p>
                </div>
                
                <div>
                <p>Check out</p>
                    <p> Add dates</p>
                </div>
                
                <div className="logo1">
                    <span>
                <p>Guests </p>
                <p>Add guests</p>
                </span>
                <img src={logo} width="40px" height="40px" alt="logo"/>
                </div>
                
            </div>
            <div className="step">
              <h1>
                  Go 
              </h1>
              <h1>Near</h1>
              <span>
              <p>Explore nearby stays</p>
              </span>
            </div>
        </div>
    )
}

export default Home
