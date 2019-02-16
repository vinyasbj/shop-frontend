import React, { Component } from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import '../App.css';

class MensTShirts extends  React.Component {
    render(){
        return(
            <div>
                <div className="ui grid button">
                <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s;margin-bottom: 40px; outline: none;  float: left; width: 126%; height: 73%;" src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg"/>
               </div> 
            </div>
        )
    }
}

export default MensTShirts;