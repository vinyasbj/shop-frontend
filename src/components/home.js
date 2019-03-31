import React from 'react';
import Navbar from '../components/navbar';
import Menu from '../components/navbar2';
// import axios from 'axios'
// import api from '../config/api'
import '../App.css';


class Home extends  React.Component {
    render(){
        return(
            <div className="">
            {/* <Navbar/> */}
            <Menu/>
               <div className="ui grid segments">
                    <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s;" src="https://shop.polymer-project.org/esm-bundled/images/mens_outerwear.jpg"/>
               </div> 
               <div className = "ui equal width center aligned padded grid">
                <div className="row ">
                    <div className="column ">
                        <h4 className="item " Style= " margin-top: 3%;">Men's Outerwear</h4>
                        <button className="ui inverted secondary button ">SHOP NOW</button>
                    </div>
                </div>
               </div>
               <div className="ui grid" mobile={16} tablet={8} computer={5}>
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
               <div className="ui grid ">
                <div className="eight wide column">
                    <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s;margin-bottom: 40px; outline: none;  float: left; width: 126%; height: 73%;" src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg"/>
                    <h4 className="item" Style= " margin-top: 3%;">Ladies Outerwear</h4>
                    <button className="ui inverted secondary button "Style= "margin-left: 42%;">SHOP NOW</button>
                </div>
                <div className="eight wide column">
                    <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s; margin-bottom: 40px; outline: none;  float: left; width: 126%; height: 73%;" src="https://shop.polymer-project.org/esm-bundled/images/ladies_tshirts.jpg"/>
                    <h4 className="item" Style= " margin-top: 3%;">Ladies Outerwear</h4>
                    <button className="ui inverted secondary button " Style= "margin-left: 42%;">SHOP NOW</button>
                    <br/>
                    <br/>
                </div>
            </div>
            </div>
        )
    }
}

export default Home;