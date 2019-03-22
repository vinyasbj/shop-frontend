import React, { Component } from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Navbar from '../components/navbar';
import '../App.css';

class LadiesOuterwear extends  React.Component {
    render(){
        return(
            <div>
            <Navbar/>
                <div className="ui grid button">
                <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s;" src="https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg"/>
               </div> 
            </div>
        )
    }
}

export default LadiesOuterwear;