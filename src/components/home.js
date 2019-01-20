import React from 'react'
// import axios from 'axios'
// import api from '../config/api'
import '../App.css';

class Home extends  React.Component {
    render(){
        return(
            <div className="">
               <div className="ui grid button">
               <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s;" src="https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg"/>
               </div> 
               <div className = "ui equal width center aligned padded grid">
               <div className="row ">
                <div className="column ">
                    <h4 className="item" Style= " margin-top: 3%;">Men's Outerwear</h4>
                    <button className="ui inverted secondary button ">SHOP NOW</button>
                </div>
               </div>
               </div>
               <div className="ui grid button">
               <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s;" src="https://shop.polymer-project.org/esm-bundled/images/ladies_outerwear.jpg"/>
               </div> 
               <div className = "ui equal width center aligned padded grid">
               <div className="row ">
                <div className="column ">
                    <h4 className="item" Style= " margin-top: 3%;">Ladies Outerwear</h4>
                    <button className="ui inverted secondary button ">SHOP NOW</button>
                </div>
               </div>
               </div>
            </div>
        )
    }
}

export default Home;