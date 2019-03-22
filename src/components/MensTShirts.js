import React, { Component } from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import Navbar from '../components/navbar';
import '../App.css';

class MensTShirts extends  React.Component {
    render(){
        return(
            <div>
            <Navbar/>
                <div className="ui grid button">
                <img id="img" alt="Men's Outerwear" Style="opacity: 1; transition: opacity 0.5s ease 0s;margin-bottom: 40px; outline: none;  float: left; width: 126%; height: 73%;" src="https://shop.polymer-project.org/esm-bundled/images/mens_tshirts.jpg"/>
               </div> 
               <Card>
                    <Image src='/images/avatar/large/daniel.jpg' />
                    <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        10 Friends
                    </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default MensTShirts;